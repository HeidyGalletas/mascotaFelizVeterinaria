import { useContext, useEffect, useState } from "react";
import { MascotasContext } from "../context/MascotasContext";
import { obtenerMascotas } from "../apiMascotas";

export default function ListaMascotas() {
  const { mascotas, dispatch } = useContext(MascotasContext);
  const [cargando, setCargando] = useState(false);

  useEffect(() => {
    setCargando(true);
    obtenerMascotas()
      .then((datos) => {
        dispatch({ type: "CARGAR", datos });
      })
      .finally(() => setCargando(false));
  }, []);

  return (
    <section>
      <h2>Mascotas registradas</h2>
      {cargando && <p>Cargando información...</p>}
      {!cargando && mascotas.length === 0 && <p>No hay mascotas aún.</p>}
      {!cargando &&
        mascotas.map((m) => (
          <div key={m.id}>
            <strong>{m.nombre}</strong> — {m.especie} (Propietario: {m.propietario})
          </div>
        ))}
    </section>
  );
}
