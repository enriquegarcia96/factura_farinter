import { useEffect, useState } from "react";
import { FormularioFactura } from "../moleculas/FormularioFactura";
import { apiProductos } from "./ApiFactura";

export const FacturaVentaScreen = () => {
  const [productos, setProductos] = useState([]);
  
  const productosApi = async () => {
    try {
      const resp = await apiProductos();
      const { Productos } = await resp.json();
      setProductos(Productos);
    } catch (error) {
      console.log(error);
    }
  };
  
  useEffect(() => {
    productosApi();
  }, [setProductos]);

  return <FormularioFactura productos={productos} />;
};
