import "./styles.css";

import TaskCreator from "./components/TaskCreator";
import { useState } from "react";

function App() {
  const [tasksItems, setTaskSItem] = useState([
    { name: "mi primera tarea", done: false },
    { name: "mi segunda tarea", done: false },
    { name: "mi tercera tarea", done: false }
  ]);
  return (
    <div className="App">
      <TaskCreator />
      <table>
        <thead>
          <tr>
            <th>TAREAS</th>
          </tr>
        </thead>
        <tbody>
          {tasksItems.map((task) => (
            <tr>{task.name}</tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default App;
