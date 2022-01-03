import ReactDOM from "react-dom";
import React, { useState } from "react";
import TodoInput from "./components/TodoInput";
import CompleteAllCheckBox from "./components/CompleteAllCheckBox";
import TodoItem from "./components/TodoItem";
import TodoCount from "./components/TodoCount";
import TodoFilter from "./components/TodoFilter";
import "./style.css";

function App() {
  // https://todomvc.com/examples/react/#/
  const [todoList, setTodoList] = useState(["테스트", "토끼"]);

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
              <TodoItem text={todo} />
            ))}
          </ul>
        </section>
        <footer className="footer">
          <TodoCount />
          <TodoFilter />
        </footer>
      </div>
    </section>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
