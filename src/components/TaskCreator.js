import React from "react";
import { useState } from "react";

const TaskCreator = () => {
  const [crearTareaNueva, setCrearTareaNueva] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("nombreTarea", crearTareaNueva);
    setCrearTareaNueva("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Introduce una nueva tarea"
          value={crearTareaNueva}
          onChange={(e) => setCrearTareaNueva(e.target.value)}
        />
        <button>Crear Tarea</button>
      </form>
    </div>
  );
};
export default TaskCreator;
