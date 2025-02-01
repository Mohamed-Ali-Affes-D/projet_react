import Form from "./components/Form";
import Todo from "./components/Todo";
import FilterButton from "./components/FilterButton";
function App(props) {
  const nbTasks = props.tasks.length;
  let msg = "";
  if (nbTasks == 1) {
    msg = "1 tâche restante";
  } else {
    msg = nbTasks + " tâches restantes";
  }
  const taskList = props.tasks.map((task, index) => (

    <Todo
      id={task.id}
      name={task.name}
      completed={task.completed}
      key={index}
    />
  ));
  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Form />
      <div className="filters btn-group stack-exception">
        <FilterButton name='Toutes' />
        <FilterButton name='Actives' />
        <FilterButton name='Terminées' />
      </div>
      <h2 id="list-heading">{msg}</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception">
        {/* <Todo name="Manger" completed={true} id="todo-0" />
        <Todo name="Dormir" completed={false} id="todo-1" />
        <Todo name="Recommencer" completed={false} id="todo-2" /> */}

        {taskList}
      </ul>
    </div>
  );
}

export default App;