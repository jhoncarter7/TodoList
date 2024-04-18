import "./App.css";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";

function App() {
  return (
    <div id="main">
      <TaskInput />
      <TaskList />
    </div>
  );
}

export default App;
