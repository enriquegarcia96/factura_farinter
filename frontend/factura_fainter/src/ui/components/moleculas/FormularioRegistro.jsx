import { useState } from "react";
import { InputBoostrap } from "../atomos/InputBootstrap";
import { SelectBoostrap } from "../atomos/SelectBoostrap";

import { apiRegistroUsuario } from "../pages/ApiFactura";

export const FormularioRegistro = () => {
  const initialState = {
    nombre: "Enrique",
    apellido: "García",
    direccion: "Barrio las flores ",
    telefono: "98652233",
    genero: "Masculino",
    numero_identidad: "1234567891234",
  };

  const [usuario, setUsuario] = useState(initialState);

  const clickRegistrar = async(e) => {
    e.preventDefault ();

    try {
      const resp = await apiRegistroUsuario(usuario)
      const data = await resp.json()
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (e) => {
    setUsuario({ ...usuario, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={clickRegistrar}>
      <fieldset>
        <legend>Disabled fieldset example</legend>
        <div className="mb-3">
          <InputBoostrap
            tituloSpan={"Nombre"}
            type={"text"}
            estiloClassName="form-control"
            placeholder={"Enrique"}
            onchange={handleInputChange}
            value={usuario.nombre}
          />
        </div>
        <div className="mb-3">
          <InputBoostrap
            type={"text"}
            tituloSpan={"Apellido"}
            estiloClassName="form-control"
            placeholder={"García"}
            onchange={handleInputChange}
            value={usuario.apellido}
          />
        </div>

        <div className="mb-3">
          <InputBoostrap
            estiloClassName={"form-control"}
            type={"text"}
            tituloSpan={"Direccion"}
            placeholder={"Barrio las flores"}
            onchange={handleInputChange}
            value={usuario.direccion}
          />
        </div>

        <div className="mb-3">
          <InputBoostrap
            estiloClassName={"form-control"}
            type={"text"}
            tituloSpan={"Telefono"}
            placeholder={"98782211"}
            onchange={handleInputChange}
            value={usuario.telefono}
          />
        </div>

        <div className="mb-3">
          <InputBoostrap
            tituloSpan={"Numero de Identidad"}
            type={"number"}
            estiloClassName={"form-control"}
            placeholder={"0209200089765"}
            onchange={handleInputChange}
            value={usuario.numero_identidad}
          />
        </div>

        {/* <div className="mb-3">
          <SelectBoostrap />
        </div> */}
      </fieldset>

      <button type="submit" className="btn btn-success">
        Success
      </button>
    </form>
  );
};
