import React from "react";

interface TodoItemProps {
  text: string;
  completed: boolean;
}

function TodoItem({ text, completed }: TodoItemProps) {
  return (
    <li className={completed ? "completed" : ""}>
      <div className="view">
        <input className="toggle" type="checkbox" checked={completed} />
        <label>{text}</label>
        <button className="destroy"></button>
      </div>
      <input className="edit" value={text} />
    </li>
  );
}

export default TodoItem;
