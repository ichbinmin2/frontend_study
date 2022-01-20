import React, { useState } from "react";
import { useTodoListAtom } from "../useTodoListAtom";

function TodoInput() {
  const { addTodo } = useTodoListAtom();
  // todoInput state
  const [todoInput, setTodoInput] = useState("");
  // handleChange

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setTodoInput(e.target.value);
  }

  function handleKeyUp(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      addTodo(todoInput);
      setTodoInput("");
    }
  }

  return (
    <input
      className="new-todo"
      placeholder="What needs to be done?"
      onChange={handleChange}
      onKeyUp={handleKeyUp}
      value={todoInput}
    />
  );
}

export default TodoInput;
