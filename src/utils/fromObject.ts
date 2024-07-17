/**
 * オブジェクトの値を取り出して関数に渡すことでクロージャを作成するJSXテンプレート用ユーティリティ
 * 使い方は配列のmap関数と同様
 * @param obj オブジェクト
 * @example
 * ```tsx
 * const obj = { a: 1, b: 2, c: 3 };
 *
 * const Component = () => (
 *  <>
 *   {fromObject(obj)(({ a, b, c }) => (
 *    <>
 *     <div>{a}</div>
 *     <div>{b}</div>
 *     <div>{c}</div>
 *    </>))}
 *   </>
 * );
 * ```
 */
export const fromObject =
  <T extends Record<string, unknown>>(obj: T): (<R>(fn: (obj: T) => R) => R) =>
  (fn) =>
    fn(obj);
