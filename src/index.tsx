import ReactDOM from "react-dom";
import React from "react";
import TodoInput from "./components/TodoInput";
import CompleteAllCheckBox from "./components/CompleteAllCheckBox";
import TodoItem from "./components/TodoItem";
import TodoCount from "./components/TodoCount";
import TodoFilter from "./components/TodoFilter";

function App() {
  // https://todomvc.com/examples/react/#/

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
            <TodoItem text={"테스트"} />
            <TodoItem text={"토끼"} />
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
