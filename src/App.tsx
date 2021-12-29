import React from "react";
import "./App.css";
import NewTodo from "./components/NewTodo";
import TodoList from "./components/TodoList";
import { TodoContextProvider } from "./context/TodoContext";

const App = () => {
  return (
    <TodoContextProvider>
      <div className="App">
        <TodoList />
        <NewTodo />
      </div>
    </TodoContextProvider>
  );
};

export default App;
