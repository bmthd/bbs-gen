import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { Link as A, Container, Divider, HStack, UIProvider } from "@yamada-ui/react";
import "@/assets/app.css";

export const Route = createRootRoute({
  component: () => (
    <UIProvider>
      <Container>
        <HStack className="p-2 flex gap-2">
          <Link to="/" className="[&.active]:font-bold">
            <A>Home</A>
          </Link>
          <Link to="/about" className="[&.active]:font-bold">
            <A>About</A>
          </Link>
          <Link to="/todo" className="[&.active]:font-bold">
            <A>Todo</A>
          </Link>
          <Link to="/midashi">
            <A>Midashi</A>
          </Link>
        </HStack>
        <Divider />
        <Outlet />
        <TanStackRouterDevtools />
      </Container>
    </UIProvider>
  ),
});
