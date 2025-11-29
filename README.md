# MascotaFeliz – Aplicación Web para Gestión de Mascotas

Este proyecto hace parte de la segunda entrega del curso de Desarrollo de Aplicaciones Web II. La idea es construir una aplicación web sencilla que permita consultar y registrar mascotas atendidas en la Clínica Veterinaria Huellas de Amor, ubicada en Santa Marta.

El desarrollo se hizo en CodeSandbox usando React con Vite. El objetivo principal es demostrar el uso integrado de tecnologías front-end modernas: ReactJS, Hooks, Context API, Axios y React Router.

---

## 🧩 Funcionalidades

- Pantalla de **inicio** con la descripción del sistema MascotaFeliz.
- Sección **“Ver mascotas”** que consulta datos mediante una petición HTTP y muestra una lista de mascotas.
- Sección **“Registrar mascota”** con un formulario para agregar nuevas mascotas al listado.
- Manejo de estado global para compartir la información de mascotas entre componentes.

---

## 🛠 Tecnologías utilizadas

- **ReactJS** (Vite)
- **React Router DOM** para rutas y navegación
- **Hooks**:
  - `useState`
  - `useEffect`
  - `useContext`
  - `useReducer`
- **Context API** para el estado global de las mascotas
- **Axios** para realizar peticiones HTTP a un API público
- **TypeScript/TSX** en la estructura base del proyecto (plantilla Reaccionar TS de CodeSandbox)

---

## 🧱 Estructura principal del código

- `src/App.tsx`  
  Configura las rutas principales de la aplicación: Inicio, Ver mascotas, Registrar mascota. Envuelve todo con `MascotasProvider` para que el contexto esté disponible.

- `src/main.tsx`  
  Punto de entrada. Monta el componente `<App />` sobre el elemento `root` del HTML.

- `src/pages/Inicio.tsx`  
  Pantalla de bienvenida con la descripción general del sistema MascotaFeliz y de la clínica veterinaria.

- `src/components/ListaMascotas.tsx`  
  Consulta las mascotas utilizando el servicio `obtenerMascotas` y muestra el listado. Usa `useContext`, `useEffect` y `useState`.

- `src/components/FormMascota.tsx`  
  Formulario para registrar una nueva mascota. Usa `useState` para controlar los campos y `useContext` para actualizar el estado global. Llama al servicio `registrarMascota`.

- `src/context/MascotasContext.tsx`  
  Implementa el **Context API** y `useReducer` para manejar el estado global de las mascotas (acciones de cargar y agregar).

- `src/apiMascotas.ts`  
  Servicio que usa **Axios** para hacer peticiones HTTP a un API público (`jsonplaceholder.typicode.com`). A partir de los datos de usuarios se construye una estructura similar a la de una “mascota” para el sistema.

---

## ▶ Cómo ejecutar el proyecto

### En CodeSandbox

1. Abrir el proyecto en CodeSandbox.
2. La vista previa se ejecuta automáticamente.
3. Usar el menú superior de la app:
   - **Inicio**
   - **Ver mascotas**
   - **Registrar mascota**

### De forma local (opcional)

Si se descarga el proyecto y se quiere ejecutar en un entorno local:

```bash
npm install
npm run dev
```
