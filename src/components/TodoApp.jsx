import { useState } from "react";
import styles from "./doApp.module.css";
import Titulo from "./Titulo";
import NotaItem from "./NotaItem";

function TodoApp() {

  const [notas, setNotas] = useState([
    { id: 1, text: "Nota 1", completed: false },
    { id: 2, text: "Nota 2", completed: true },
    { id: 3, text: "Nota 3", completed: false },
  ]);


  const [nuevaNota, setNuevaNota] = useState("");


  const agregarNota = () => {
    if (nuevaNota.trim() === "") return; 

    const notaNueva = {
      id: crypto.randomUUID(),
      text: nuevaNota,
      completed: false,
    };

    setNotas([...notas, notaNueva]); 
    setNuevaNota(""); 
  };

 
  const toggleNota = (id) => {
    const notasActualizadas = notas.map((nota) =>
      nota.id === id ? { ...nota, completed: !nota.completed } : nota
    );
    setNotas(notasActualizadas);
  };

  return (
    <>
      <Titulo />

      <div className={styles.formNota}>
        <input
          type="text"
          value={nuevaNota}
          onChange={(e) => setNuevaNota(e.target.value)}
          placeholder="Escribe una nota..."
        />
        <button onClick={agregarNota}>Agregar</button>
      </div>

      <ul className={styles.noteList}>
        {notas.map((nota) => (
          <NotaItem
            key={nota.id} 
            text={nota.text}
            completed={nota.completed}
            onToggle={() => toggleNota(nota.id)}
          />
        ))}
      </ul>
    </>
  );
}

export default TodoApp;