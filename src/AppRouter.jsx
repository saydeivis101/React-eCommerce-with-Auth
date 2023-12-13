import React from "react";
import { Route } from "react-router-dom";
import { AuthRouter } from "./auth/routes/AuthRouter";
import { Routes } from "react-router-dom";
import { EcommerceRouter } from "./ecommerce/routes/EcommerceRouter";
import { SearchProvider } from "./ecommerce/context/SearchProvider";
import { CartProvider } from "./ecommerce/context/CartProvider";

export const AppRouter = () => {
  return (
    <CartProvider>
      <Routes>
        <Route path="/*" element={<EcommerceRouter />} />
        <Route path="auth/*" element={<AuthRouter />} />
      </Routes>
    </CartProvider>
  );
};
