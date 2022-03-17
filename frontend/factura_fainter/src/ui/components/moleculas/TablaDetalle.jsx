export const TablaDetalle = ({ carrito = [] }) => {
  carrito.map(({ cantidad, index, suma }) => {
    console.log(cantidad);
    console.log(suma);
    console.log(index);
  });

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Cantidad</th>
          <th scope="col">Precio por unidad</th>
          <th scope="col">Sub Total</th>
        </tr>
      </thead>
      <tbody>
        {carrito.map(({ cantidad, suma, precio_venta }) => (
          <tr>
            <td key={0}>{cantidad}</td>
            <td key={1}>{precio_venta}</td>
            <td key={2}>{suma}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
