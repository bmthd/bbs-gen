import { useCallback, useEffect, type RefCallback, type RefObject } from "react";

type TargetElement = Window | Document | HTMLElement;

type EventMap<T extends TargetElement> = T extends Window
  ? WindowEventMap
  : T extends Document
    ? DocumentEventMap
    : HTMLElementEventMap;

const isRefObject = <T extends object>(arg: RefObject<T> | T): arg is RefObject<T> =>
  Object.hasOwn(arg, "current");

/**
 * イベントハンドラを登録する
 * @param eventName イベント名
 * @param handler イベントハンドラ
 * @param target イベントを登録する要素 (未指定はdocument)
 * @param options イベントリスナーのオプション
 */
export const useEventListener = <
  T extends TargetElement,
  EventName extends keyof EventMap<T> & string,
>(
  eventName: EventName,
  handler: (event: EventMap<T>[EventName]) => void,
  target: T | RefObject<T> = document as T,
  options?: Omit<AddEventListenerOptions, "signal">,
) => {
  useEffect(() => {
    const targetElement = isRefObject(target) ? target.current : target;
    if (!targetElement) return;
    const controller = new AbortController();
    targetElement.addEventListener(eventName, handler as EventListener, {
      signal: controller.signal,
      ...options,
    });

    return () => {
      controller.abort();
    };
  }, [eventName, handler, options, target]);
};

/**
 * イベントハンドラをDOM要素に登録するためのRefコールバックを生成する
 * @param eventName イベント名
 * @param handlerFactory イベントハンドラを生成するファクトリ関数
 * @param options イベントリスナーのオプション
 */
export const useRefEventCallback = <
  TargetElement extends HTMLElement,
  EventName extends keyof HTMLElementEventMap,
>(
  eventName: EventName,
  handlerFactory: (node: TargetElement) => (event: HTMLElementEventMap[EventName]) => void,
  options?: Omit<AddEventListenerOptions, "signal">,
): RefCallback<TargetElement> =>
  useCallback(
    (node) => {
      if (!node) return;
      const handler = handlerFactory(node);
      const controller = new AbortController();
      node.addEventListener(eventName, handler, { signal: controller.signal, ...options });
      return () => {
        controller.abort();
      };
    },
    [eventName, handlerFactory, options],
  );
