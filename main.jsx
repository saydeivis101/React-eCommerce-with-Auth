import React from "react";
import { createRoot } from "react-dom/client";
import { ECommerce } from "./src/ECommerce";
import { SearchProvider } from "./src/ecommerce/context/SearchProvider";

const root = createRoot(document.getElementById("app"));

root.render(
  <React.StrictMode>
    <SearchProvider>
      <ECommerce />
    </SearchProvider>
  </React.StrictMode>
);
