import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GenderPage } from "./pages/gender";
import { HomePage } from "./pages/home";
import { DetailProductPage } from "./pages/detailProduct";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:gender" element={<GenderPage />} />
        <Route path="/detail-product" element={<DetailProductPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
