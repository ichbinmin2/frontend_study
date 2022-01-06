import React from "react";

interface TodoItemProps {
  text: string;
  completed: boolean;
  id: string;
  deleteTodo: (targetId: string) => void;
  completeTodo: (targetId: string) => void;
}

function TodoItem({
  text,
  completed,
  id,
  deleteTodo,
  completeTodo,
}: TodoItemProps) {
  return (
    <li className={completed ? "completed" : ""}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={completed}
          onClick={() => completeTodo(id)}
        />
        <label>{text}</label>
        <button className="destroy" onClick={() => deleteTodo(id)}></button>
      </div>
      <input className="edit" value={text} />
    </li>
  );
}

export default TodoItem;
