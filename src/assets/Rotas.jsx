import { Routes, Route } from "react-router-dom";
import PaginaInicial from "../pages/PaginaInicial";

export default function Rotas() {
  return (
    <Routes>
      <Route path="/" element={<PaginaInicial />} />
    </Routes>
  );
}
