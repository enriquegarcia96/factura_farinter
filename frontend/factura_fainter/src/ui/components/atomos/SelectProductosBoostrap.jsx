import { useState } from "react";

export const SelectProductosBoostrap = ({ productos = [], submit }) => {
  const [productoSeleccionado, setProductoSeleccionado] = useState("");

  submit(productoSeleccionado);
  console.log(productoSeleccionado);

  return (
    <select className="form-select" aria-label="Default select example">
      {productos.map(({ nombre_producto, id }) => (
        <option
          key={id}
          onChange={setProductoSeleccionado}
          value={productoSeleccionado}
        >
          {nombre_producto}
        </option>
      ))}
    </select>
  );
};
