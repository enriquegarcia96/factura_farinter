import { useEffect, useState } from "react";
import { InputBoostrap } from "../atomos/InputBootstrap";
import { apiFacturaDeCompra } from "../pages/ApiFactura";
import { TablaDetalle } from "./TablaDetalle";

export const FormularioFactura = ({ productos = [] }) => {
  const [id, setId] = useState("");
  const [datosDelProducto, setDatosDelProducto] = useState([]);
  const [cantidad, setCantidad] = useState(0);
  const [carrito, setCarrito] = useState([0]);

  const handleSubmit = (productoSeleccionado) => {
    console.log(productoSeleccionado);
  };

  const capturaType = (e) => {
    setId(e.target.value);
  };

  useEffect(() => {
    const pre = productos.filter(
      (producto) => producto.categoria_categoria_id_id == id
    );

    setDatosDelProducto(Object.assign({}, pre[0]));
  }, [id, productos, setDatosDelProducto]);

  //console.log(datosDelProducto);

  const agregar = () => {
    const precio_venta = datosDelProducto.precio_venta
    const suma = cantidad * datosDelProducto.precio_venta;
    setCarrito( [{suma, cantidad, precio_venta}] );
  };

  const comprarProducto = async () =>{
     const data = await apiFacturaDeCompra()
     const resp = await data.json();
     console.log(resp);
  
  }

  return (
    <>
      <form>
        <fieldset>
          <legend>Compra</legend>
          <div className="mb-3">
            <select
              className="form-select"
              aria-label="Default select example"
              onChange={capturaType}
            >
              {productos.map(
                ({ id, categoria_categoria_id_id, nombre_producto }) => (
                  <option key={id} value={categoria_categoria_id_id}>
                    {nombre_producto}
                  </option>
                )
              )}
            </select>
          </div>

          <div className="mb-3">
            <InputBoostrap
              type={"text"}
              tituloSpan={"Precio"}
              estiloClassName="form-control"
              placeholder={datosDelProducto.precio_venta}
              value={datosDelProducto.precio_venta}
              disabled={true}
            />
          </div>

          <div className="input-group">
            <span className="input-group-text">Cantidad</span>

            <input
              type="number"
              className="form-control"
              value={cantidad}
              onChange={(e) => setCantidad(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <InputBoostrap
              tituloSpan={"Numero de Identidad"}
              type={"text"}
              estiloClassName={"form-control"}
              placeholder={"0209200089765"}
              value={0}
            />
          </div>

          <div className="d-flex justify-content-between" >
          <button type="button" className="btn btn-primary " onClick={agregar}>
            Agregar
          </button>

          <button type="button" className="btn btn-primary " onClick={comprarProducto}>
            Comprar
          </button>

          </div>



        </fieldset>
      </form>

      <TablaDetalle carrito={carrito} />


    </>
  );
};
