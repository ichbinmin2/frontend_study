import ReactDOM from "react-dom";
import React, { useEffect, useState } from "react";
import TodoInput from "./components/TodoInput";
import CompleteAllCheckBox from "./components/CompleteAllCheckBox";
import TodoItem from "./components/TodoItem";
import TodoCount from "./components/TodoCount";
import TodoFilter from "./components/TodoFilter";
import "./style.css";
import { useTodoListAtom } from "./useTodoListAtom";

type Todo = {
  id: string;
  text: string;
  completed: boolean;
};

// https://github.com/twinstae/realworld-react-redux/commit/d69fd9051ec4034c187d06d9b7cbcb740f00cafd#diff-e8d077acbe70741eb0e73c7919822d3931e52a385a15622eddd9e7123b7e81d9

const KEY = "TODO-LIST";

function App() {
  const { loadSaved, todoList, clearCompleted } = useTodoListAtom();

  useEffect(() => {
    const saved = localStorage.getItem(KEY);
    saved && loadSaved(JSON.parse(saved));
  }, []); // 불러오기

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(todoList));
  }, [todoList]); // 저장하기

  return (
    <section className="todoapp">
      <div>
        <header className="header">
          <h1>todos</h1>
          <TodoInput />
        </header>
        <section className="main">
          <CompleteAllCheckBox />
          <ul className="todo-list">
            {todoList.map((todo) => (
              <TodoItem key={todo.id} {...todo} />
            ))}
          </ul>
        </section>
        <footer className="footer">
          <TodoCount />
          <TodoFilter />
          <button className="clear-completed" onClick={clearCompleted}>
            Clear completed
          </button>
        </footer>
      </div>
    </section>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
