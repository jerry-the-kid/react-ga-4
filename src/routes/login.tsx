import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { trackTotalUsers } from "../ga4";

export const Route = createFileRoute("/login")({
  component: () => <LoginScreen />,
});

const LoginScreen = () => {
  useEffect(() => {
    trackTotalUsers();
  }, []);

  return <div>Hello /login!</div>;
};
