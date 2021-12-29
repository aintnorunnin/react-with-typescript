import React, { useContext } from "react";
import TodoContext from "../context/TodoContext";
import TodoItem from "./TodoItem";

const TodoList: React.FC = () => {
  const todoCxt = useContext(TodoContext);
  return (
    <ul>
      {todoCxt.items.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            content={todo.text}
            removeTodo={todoCxt.removeTodo.bind(null, todo.id)}
          />
        );
      })}
    </ul>
  );
};

export default TodoList;
