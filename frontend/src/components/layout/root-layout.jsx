import { StrictMode } from "react";
import { Outlet } from "react-router-dom";
import { CookieBanner } from "../ui/cookie-banner";

export function RootLayout() {
  return (
    <StrictMode>
      <Outlet />
      <CookieBanner />
    </StrictMode>
  );
}
