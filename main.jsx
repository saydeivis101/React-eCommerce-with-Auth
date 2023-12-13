import React from "react";
import { createRoot } from "react-dom/client";
import { ECommerce } from "./src/ECommerce";
import { SearchProvider } from "./src/ecommerce/context/SearchProvider";
import { CartProvider } from "./src/ecommerce/context/CartProvider";
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./src/AppRouter";

const root = createRoot(document.getElementById("app"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
  
          <AppRouter/>
       
    </BrowserRouter>
  </React.StrictMode>
);
