import React from "react";

type Count = {
  count: number;
};

function TodoCount({ count }: Count) {
  return (
    <span className="todo-count">
      <strong>{count}</strong>
      <span> </span>
      <span>items</span>
      <span> left</span>
    </span>
  );
}

export default TodoCount;
