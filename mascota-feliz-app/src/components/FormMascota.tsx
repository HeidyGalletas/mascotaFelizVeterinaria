import { useState, useContext } from "react";
import { registrarMascota } from "../apiMascotas";
import { MascotasContext } from "../context/MascotasContext";

export default function FormMascota() {
  const [nombre, setNombre] = useState("");
  const [especie, setEspecie] = useState("");
  const [propietario, setPropietario] = useState("");
  const [enviando, setEnviando] = useState(false);
  const { dispatch } = useContext(MascotasContext);

  async function enviar(e) {
    e.preventDefault();
    setEnviando(true);

    const nueva = await registrarMascota({ nombre, especie, propietario });

    dispatch({ type: "AGREGAR", nueva });

    setNombre("");
    setEspecie("");
    setPropietario("");
    setEnviando(false);
  }

  return (
    <section>
      <h2>Registrar nueva mascota</h2>
      <form onSubmit={enviar}>
        <input
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
        <br />

        <input
          placeholder="Especie"
          value={especie}
          onChange={(e) => setEspecie(e.target.value)}
          required
        />
        <br />

        <input
          placeholder="Propietario"
          value={propietario}
          onChange={(e) => setPropietario(e.target.value)}
          required
        />
        <br />

        <button disabled={enviando}>
          {enviando ? "Guardando..." : "Guardar"}
        </button>
      </form>
    </section>
  );
}
