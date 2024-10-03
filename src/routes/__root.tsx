import {
  Link,
  Outlet,
  createRootRoute,
  useRouterState,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { useEffect } from "react";
import ReactGa from "react-ga4";

export const Route = createRootRoute({
  component: () => <Root />,
});

const Root = () => {
  const router = useRouterState();

  useEffect(() => {
    // Send pageview with a custom path
    ReactGa.send({
      hitType: "pageview",
      page: "/my-path",
      title: "Custom Title",
    });
  }, [router.location.pathname]);

  return (
    <>
      <div className="p-2 flex gap-2">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>{" "}
        <Link to="/about" className="[&.active]:font-bold">
          About
        </Link>{" "}
        <Link to="/news" className="[&.active]:font-bold">
          News
        </Link>{" "}
        <Link to="/login" className="[&.active]:font-bold">
          Login
        </Link>
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  );
};
