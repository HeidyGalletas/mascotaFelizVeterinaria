import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { MascotasProvider } from "./context/MascotasContext";
import Inicio from "./pages/Inicio";
import ListaMascotas from "./components/ListaMascotas";
import FormMascota from "./components/FormMascota";

export default function App() {
  return (
    <MascotasProvider>
      <BrowserRouter>
        <header>
          <nav style={{ marginBottom: "16px" }}>
            <Link to="/">Inicio</Link> |{" "}
            <Link to="/mascotas">Ver mascotas</Link> |{" "}
            <Link to="/registrar">Registrar mascota</Link>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/mascotas" element={<ListaMascotas />} />
            <Route path="/registrar" element={<FormMascota />} />
          </Routes>
        </main>
      </BrowserRouter>
    </MascotasProvider>
  );
}

