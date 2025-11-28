import { createContext, useReducer } from "react";

export const MascotasContext = createContext({
  mascotas: [],
  dispatch: () => {}
});

function reducer(state, action) {
  switch (action.type) {
    case "CARGAR":
      return action.datos;
    case "AGREGAR":
      return [...state, action.nueva];
    default:
      return state;
  }
}

export function MascotasProvider({ children }) {
  const [mascotas, dispatch] = useReducer(reducer, []);
  return (
    <MascotasContext.Provider value={{ mascotas, dispatch }}>
      {children}
    </MascotasContext.Provider>
  );
}
