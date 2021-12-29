import React, { useContext, useRef } from "react";
import TodoContext from "../context/TodoContext";


const NewTodo: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const todoCxt = useContext(TodoContext);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    todoCxt.addNewTodo(inputRef.current!.value);
    inputRef.current!.value = "";
  };

  return (
    <form>
      <label htmlFor="newTodoInput">Add New Todo</label>
      <input id="newTodoInput" type="text" ref={inputRef}></input>
      <button onClick={submitHandler}>Add</button>
    </form>
  );
};

export default NewTodo;
