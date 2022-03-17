import { Routes, Route } from "react-router-dom";

import { CategoriaScreen } from "../ui/components/pages/CategoriaScreen";
import { FacturaVentaScreen } from "../ui/components/pages/FacturaVentaScreen";
import { RegistroScreen } from "../ui/components/pages/RegistroScreen";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/registro" element={<RegistroScreen />} />
      <Route path="/categoria" element={<CategoriaScreen />} />
      <Route path="/factura" element={<FacturaVentaScreen />} />
    </Routes>
  );
};
