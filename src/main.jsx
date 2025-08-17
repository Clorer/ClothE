import { StrictMode, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./Home/Home.jsx";
import {ClothPage} from "./ClothPage/ClothPage.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cloth" element={<ClothPage/>}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
