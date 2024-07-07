import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CategoryPage } from "./Pages";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/category" element={<CategoryPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
