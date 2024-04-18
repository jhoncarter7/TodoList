import "./App.css";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import {useSelector} from 'react-redux'
function App() {
  const { AllTodoList } = useSelector((state) => state.todos);
  console.log("AllTodoList", AllTodoList)
  return (
    <div id="main">
      <TaskInput />
      {AllTodoList ?  AllTodoList.map((todo)=> <TaskList key={todo.id} id={todo.id} title={todo.title} />) : <div> Boring day </div>}
    </div>
  );
}

export default App;
