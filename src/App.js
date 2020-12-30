import "./App.scss";

import Search from "./components/Search/index";
import Filters from "./components/Filters/index";
import AddTodo from "./components/AddTodo/index";
import TodoList from "./components/TodoList/index";

function App() {
  return (
    <div className="todo-app">
      <div className="todo-form">
        <Filters />
        <Search />
        <TodoList />
        <AddTodo />
      </div>
    </div>
  );
}

export default App;
