import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GenderPage } from "./pages/gender";
import { HomePage } from "./pages/home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:gender" element={<GenderPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
