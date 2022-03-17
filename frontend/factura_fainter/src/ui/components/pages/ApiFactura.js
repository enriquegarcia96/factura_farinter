const API = "http://127.0.0.1:8000/api";

export const ApiFactura = async () => {
  return await fetch(API);
};

export const apiCategorias = async () => {
  return await fetch(`${API}/categoria`);
};

export const apiProductos = async () => {
  return await fetch(`${API}/producto`);
};

export const apiRegistroUsuario = async (usuario) => {
  return await fetch(`${API}/registro`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      "nombre": String(usuario.nombre),
      "apellido": String(usuario.apellido),
      "dirrecion": String(usuario.dirrecion),
      "telefono": String(usuario.telefono),
      "genero": String(usuario.genero),
      "numero_identidad": String(usuario.identidad),
    }),
  });
};

export const apiResgistroCategoria = async (
  categoriaSeleccionada,
  descripcion
) => {
  return await fetch(`${API}/categoria`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      "nombre": categoriaSeleccionada,
      "descripcion": descripcion,
    }),
  });
};


export const apiFacturaDeCompra = async () =>{
  return  await fetch(`${API}/compra/6`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: {
      "total":  "123",
      "persona_persona_id": "0209199700192"
    }
  })
}
