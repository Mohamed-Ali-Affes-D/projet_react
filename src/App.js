import Form from "./components/Form";
import Todo from "./components/Todo";
import FilterButton from "./components/FilterButton";
import { useState } from "react";
import { nanoid } from "nanoid";

function App(props) {

  function toggleTaskCompleted(id) {
    const updatedTasks = tasks.map((task) => {
      if (id === task.id) {

        return { ...task, completed: !task.completed };
      }
      return task;
    }); setTasks(updatedTasks);
  }
  const [tasks, setTasks] = useState(props.tasks);

  function deleteTask(id) {
    const remainingTasks = tasks.filter((task) => id !== task.id);
    setTasks(remainingTasks);
  }

  function addTask(name) {
    const newTask = { id: `todo-${nanoid()}`, name, completed: false };
    setTasks([...tasks, newTask]);
  }


  const tasksWords = tasks.length !== 1 ? "tâches " : "tâche restante";


  let tacheterminer = 0;
  let active = 0;
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].completed === true) {
      tacheterminer++;
    } else {
      active++;
    }
  }

  const headingText = `${tasks.length} ${tasksWords} : ${tacheterminer}
   terminées et ${active} actives`;

  const taskList = tasks.map((task) => (<Todo id={task.id}
    name={task.name}
    completed={task.completed}
    key={task.id}
    deleteTask={deleteTask}
    toggleTaskCompleted={toggleTaskCompleted} />));

  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Form addTask={addTask} />
      <div className="filters btn-group stack-exception">
        <FilterButton name="Toutes" />
        <FilterButton name="Actives" />
        <FilterButton name="Terminées" />
      </div>
      <h2 id="list-heading">{headingText}</h2>
      <ul role="list" className="todo-list stack-large stack-exception">
        {taskList}
      </ul>
    </div>
  );
}

export default App;
