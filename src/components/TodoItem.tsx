import React, { useRef, useState } from "react";

interface TodoItemProps {
  text: string;
  completed: boolean;
  id: string;
  deleteTodo: (targetId: string) => void;
  completeTodo: (targetId: string) => void;
  changeTodoItem: (targetId: string, newText: string) => void;
}

// https://github.com/twinstae/realworld-react-redux/commit/b2b760f36198e19106676beb2ad4c624e0ca7f87#diff-e8d077acbe70741eb0e73c7919822d3931e52a385a15622eddd9e7123b7e81d9

function TodoItem({
  text,
  completed,
  id,
  deleteTodo,
  completeTodo,
  changeTodoItem,
}: TodoItemProps) {
  const [editing, setEditing] = useState(false);
  const [editingInput, setEditingInput] = useState(text);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setEditingInput(e.currentTarget.value);
  }

  function handleKeyUp(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      changeTodoItem(id, editingInput);
      setEditing(false);
    }
  }

  function handleDoubleClick() {
    setEditing(true);
  }

  function handleBlur() {
    setEditing(false);
  }

  return (
    <li
      className={
        (completed ? "completed" : "") + " " + (editing ? "editing" : "")
      }
    >
      <div className="view" onDoubleClick={handleDoubleClick}>
        <input
          className="toggle"
          type="checkbox"
          checked={completed}
          onClick={() => completeTodo(id)}
        />
        <label>{text}</label>
        <button className="destroy" onClick={() => deleteTodo(id)}></button>
      </div>
      <input
        className="edit"
        value={editingInput}
        onChange={handleChange}
        onKeyUp={handleKeyUp}
        onBlur={handleBlur}
      />
    </li>
  );
}

export default TodoItem;
