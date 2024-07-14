import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage/homePage";
import ProductPage from "./pages/ProductPage";
import CategoryPage from "./pages/CategoryPage/categoryPage";
import DetailPage from "./pages/DetailPage/detailPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:gender" element={<ProductPage />} />
        <Route path="/category" element={<CategoryPage />} />
        <Route path="/:gender/:category" element={<ProductPage/>} />
        <Route path="/category" element={<CategoryPage />} />
        <Route path="/detailPage/:gender/:product_id" element={<DetailPage />} />  

      </Routes>
    </BrowserRouter>
  );
}

export default App;
