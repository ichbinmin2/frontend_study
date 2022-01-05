import ReactDOM from "react-dom";
import React, { useState } from "react";
import TodoInput from "./components/TodoInput";
import CompleteAllCheckBox from "./components/CompleteAllCheckBox";
import TodoItem from "./components/TodoItem";
import TodoCount from "./components/TodoCount";
import TodoFilter from "./components/TodoFilter";
import "./style.css";

type Todo = { text: string; completed: boolean };

function App() {
  // https://todomvc.com/examples/react/#/
  const [todoList, setTodoList] = useState([
    { text: "테스트", completed: false },
    { text: "춤추기", completed: true },
  ]);

  function addTodo(todoInput: string) {
    // 원래 상태...
    // 함수를 데이터처럼
    // 고차함수 함수를 매개변수로 받는 함수
    setTodoList((old) => [...old, { text: todoInput, completed: false }]);
  }

  // 인간에게는 매우 빠른 시간이지만...
  // 리액트 스케쥴러가 상태를 변경
  // 상태가 변경되니 컴포넌트를 리렌더

  return (
    <section className="todoapp">
      <div>
        <header className="header">
          <h1>todos</h1>
          <TodoInput addTodo={addTodo} />
        </header>
        <section className="main">
          <CompleteAllCheckBox />
          <ul className="todo-list">
            {todoList.map((todo) => (
              <TodoItem key={todo.text} {...todo} />
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
