import "./App.css";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import {useSelector} from 'react-redux'
import { Toaster } from "react-hot-toast";


function App() {
  const { AllTodoList } = useSelector((state) => state.todos);
  return (
    <div id="main">
      <TaskInput />
      {AllTodoList ?  AllTodoList.map((todo)=> <TaskList key={todo.id} id={todo.id} title={todo.title} complete={todo.complete}/>) : <div> Boring day </div>}
      <Toaster/>
    </div>
  );
}

export default App;
