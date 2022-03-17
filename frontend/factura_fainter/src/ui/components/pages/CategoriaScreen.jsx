import { useEffect, useState } from "react";
import { FormularioCategoria } from "../moleculas/FormularioCategoria";

import { apiCategorias, apiResgistroCategoria } from "./ApiFactura";

export const CategoriaScreen = () => {
  const [categoria, setCategoria] = useState([]);
  
  const categorias = async () => {
    try {
      const res = await apiCategorias();
      const { Categoria } = await res.json();
      setCategoria(Categoria);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    categorias();
  }, []);

  return (
    <div>
      <FormularioCategoria
        nombreCategoria={"Descripcion"}
        descripcionSpan={"Descripcion"}
        categoria={categoria}
      />
    </div>
  );
};
