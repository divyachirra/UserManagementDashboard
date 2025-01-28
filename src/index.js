import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import UserManagement from "./UserManagement";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <UserManagement />
  </StrictMode>
);
