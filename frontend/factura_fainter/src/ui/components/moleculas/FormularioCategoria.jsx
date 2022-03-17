import { useState } from "react";
import { InputBoostrap } from "../atomos/InputBootstrap";
import { SelectBoostrap } from "../atomos/SelectBoostrap";
import { apiResgistroCategoria } from "../pages/ApiFactura";

export const FormularioCategoria = ({
  nombreCategoria,
  descripcionSpan,
  categoria,
}) => {
  const [descripcion, setDescripcion] = useState("");
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const api = await apiResgistroCategoria();
    const resp = await api.json()
    console.log(resp);
    
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Ingreso de categoria</legend>
        <div className="mb-3">
          <select
            className="form-select"
            value={categoriaSeleccionada}
            onChange={(e) => setCategoriaSeleccionada(e.target.value)}
          >
            {categoria.map((cate) => (
              <option key={cate.id}>{cate.nombre}</option>
            ))}
          </select>
          {/* <SelectBoostrap
            categoria={categoria}
            categoriaSeleccion={setCategoriaSeleccionada}
          /> */}
        </div>
        <div className="mb-3">
          <InputBoostrap
            tituloSpan={descripcionSpan}
            type={"text"}
            estiloClassName="form-control"
            placeholder={"Panadol"}
            onchange={(e) => {
              setDescripcion(e.target.value);
            }}
            value={descripcion}
          />
        </div>
      </fieldset>

      <button type="submit" className="btn btn-primary">
        Guardar
      </button>
    </form>
  );
};
