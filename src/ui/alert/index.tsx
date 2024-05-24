import { Alert, AlertIcon, AlertTitle, AlertDescription } from "@yamada-ui/react";
import { type FC, createContext, useContext, type ReactNode, useCallback } from "react";
import { createPortal } from "react-dom";

type AlertStatus = {
  status: "success" | "error" | "info" | "warning" | "loading";
  title?: ReactNode;
  message?: ReactNode;
};

const alertContext = createContext<({ id: string } & AlertStatus)[]>([]);

const AlertComponent: FC<AlertStatus> = ({ status, title, message }) => (
  <Alert {...{ status }}>
    <AlertIcon />
    {title && <AlertTitle>{title}</AlertTitle>}
    {message && <AlertDescription>{message}</AlertDescription>}
  </Alert>
);
/** アラートの追加、削除、リセット機能を提供する */
export const useAlert = () => {
  const alerts = useContext(alertContext);

  const addAlert = useCallback(
    (alert: AlertStatus) => {
      alerts.push({ id: crypto.randomUUID(), ...alert });
    },
    [alerts],
  );

  const removeAlert = useCallback(
    (id: string) => {
      alerts.filter((alert) => alert.id !== id);
    },
    [alerts],
  );

  const resetAlerts = useCallback(() => {
    alerts.splice(0, alerts.length);
  }, [alerts]);

  return { addAlert, removeAlert, resetAlerts };
};

/** アラートコンポーネントをbody最下部に固定する */
export const AlertProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const alerts = useContext(alertContext);
  const Provider = alertContext.Provider;

  return (
    <Provider value={[]}>
      {children}
      {createPortal(
        alerts.map((alert) => <AlertComponent key={alert.id} {...alert} />),
        document.body,
      )}
    </Provider>
  );
};
