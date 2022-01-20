import React from "react";
import { useTodoListAtom } from "../useTodoListAtom";

function TodoCount() {
  const { itemLeftCount } = useTodoListAtom();
  return (
    <span className="todo-count">
      <strong>{itemLeftCount}</strong>
      <span> </span>
      <span>items</span>
      <span> left</span>
    </span>
  );
}

export default TodoCount;
