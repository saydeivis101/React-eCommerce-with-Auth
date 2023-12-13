import React from "react";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { MainPage } from "../pages/MainPage";
import { SearchProvider } from "../context/SearchProvider";
import { NavbarComponent } from "../../ui/Navbar";

export const EcommerceRouter = () => {
  return (
    <SearchProvider>
      <NavbarComponent/>
      <Routes>
        <Route path="/*" element={<MainPage />} />
      </Routes>
    </SearchProvider>
  );
};
