import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./src/AppRouter";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const root = createRoot(document.getElementById("app"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
        <AppRouter/>
    </BrowserRouter>
  </React.StrictMode>
);
