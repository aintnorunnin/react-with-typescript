import React, { useState } from "react";
import Todo from "../models/Todo";

interface TodoContextObj {
  items: Todo[];
  addNewTodo: (text: string) => void;
  removeTodo: (id: string) => void;
}

const INITIAL_TODO_CONTEXT: TodoContextObj = {
  items: [],
  addNewTodo: (text: string) => {},
  removeTodo: (id: string) => {},
};

const INITIAL_ITEMS_STATE: Todo[] = [];

const TodoContext = React.createContext(INITIAL_TODO_CONTEXT);

export const TodoContextProvider: React.FC = (props) => {
  const [items, setItems] = useState(INITIAL_ITEMS_STATE);

  function createNewTodo(text: string) {
    setItems((prevItems) => {
      return [new Todo(text), ...prevItems];
    });
  }

  function removeTodo(id: string) {
    setItems((prevItems) => {
      return prevItems.filter((todo) => todo.id !== id);
    });
  }

  const todoContext: TodoContextObj = {
    items: items,
    addNewTodo: createNewTodo,
    removeTodo: removeTodo,
  };

  return (
    <TodoContext.Provider value={todoContext}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoContext;
