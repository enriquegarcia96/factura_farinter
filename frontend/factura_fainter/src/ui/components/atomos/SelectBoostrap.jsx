import { useState } from "react";

export const SelectBoostrap = ({ categoria = [], categoriaSeleccion }) => {
  const [categoriaSeleccinada, setCategoriaSeleccinada] = useState("");

  const handleChange = (e) => {
    setCategoriaSeleccinada(e.target.value);
    categoriaSeleccion(categoriaSeleccinada);
  };
  
  return (
    <select
      className="form-select"
      aria-label="Default select example"
      onChange={handleChange}
      value={categoriaSeleccinada}
    >
      {categoria.map((categoria) => (
        <option key={categoria.id} >{categoria.nombre}</option>
      ))}
    </select>
  );
};
