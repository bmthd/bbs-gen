import "@/assets/app.css";
import theme from "@/theme";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { Container, Divider, HStack, Link, UIProvider } from "@yamada-ui/react";
import { Suspense } from "react";
import { lazily } from "react-lazily";

const component = () => {
  const { TanStackRouterDevtools } = lazily(() => import("@tanstack/router-devtools"));
  return (
    <UIProvider theme={theme}>
      <Container>
        <HStack className="p-2 flex gap-2">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/todo">Todo</Link>
        </HStack>
        <Divider />
        <Outlet />
        <Suspense>{process.env.NODE_ENV === "development" && <TanStackRouterDevtools />}</Suspense>
      </Container>
    </UIProvider>
  );
};

export const Route = createRootRoute({
  component,
});
