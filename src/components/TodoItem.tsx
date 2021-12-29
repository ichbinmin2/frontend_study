import React from "react";

interface TodoItemProps {
  text: string;
}

function TodoItem({ text }: TodoItemProps) {
  return (
    <li className="">
      <div className="view">
        <input className="toggle" type="checkbox" />
        <label>{text}</label>
        <button className="destroy"></button>
      </div>
      <input className="edit" value={text} />
    </li>
  );
}

export default TodoItem;
