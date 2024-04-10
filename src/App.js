import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";


function App() {
  return (
    <div className="bg-slate-950 flex flex-col w-[100%] h-[100vh]">
      <AddTodo />
      <Todos />
    </div>
  );
}

export default App;
