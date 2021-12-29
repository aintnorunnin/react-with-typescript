import React from "react";

interface TodoItemProps {
  content: string;
  removeTodo: () => void;
}
const TodoItem: React.FC<TodoItemProps> = (props) => {
  
  return <li onClick={props.removeTodo}>{props.content}</li>;
};

export default TodoItem;
