import axios from "axios";

const URL_BASE = "https://jsonplaceholder.typicode.com";

// GET de mascotas simuladas
export async function obtenerMascotas() {
  const respuesta = await axios.get(URL_BASE + "/users");
  return respuesta.data.slice(0, 5).map((u) => ({
    id: u.id,
    nombre: u.name,
    especie: "Perro",
    propietario: u.username
  }));
}

// POST que simula registrar mascota
export async function registrarMascota(mascota) {
  const r = await axios.post(URL_BASE + "/posts", mascota);
  return {
    ...mascota,
    id: r.data.id ?? Math.floor(Math.random() * 10000)
  };
}
