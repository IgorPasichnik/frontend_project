import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "../../pages/HomePage/HomePage";
import { CatalogPage } from "../../pages/CatalogPage/CatalogPage";
import { CardPage } from "../../pages/CardPage/CardPage";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="catalog/:goodId" element={<CardPage />} />
      </Routes>
    </BrowserRouter>
  );
};
