import React from "react";
import { Route } from "react-router-dom";
import { AuthRouter } from "./auth/routes/AuthRouter";
import { Routes } from "react-router-dom";
import { EcommerceRouter } from "./ecommerce/routes/EcommerceRouter";
import { CartProvider } from "./ecommerce/context/CartProvider";
import { AppTheme } from "./theme/AppTheme";
import { SearchProvider } from "./ecommerce/context/SearchProvider";
import { NavbarComponent } from "./ui/Navbar";

export const AppRouter = () => {
  return (
    <AppTheme>
      <SearchProvider>
        <NavbarComponent />
        <CartProvider>
          <Routes>
            <Route path="/*" element={<EcommerceRouter />} />
            <Route path="auth/*" element={<AuthRouter />} />
          </Routes>
        </CartProvider>
      </SearchProvider>
    </AppTheme>
  );
};
