import ReactDOM from "react-dom";
import React, { useEffect, useState } from "react";
import TodoInput from "./components/TodoInput";
import CompleteAllCheckBox from "./components/CompleteAllCheckBox";
import TodoItem from "./components/TodoItem";
import TodoCount from "./components/TodoCount";
import TodoFilter from "./components/TodoFilter";
import "./style.css";
import Uuid from "./uuid";
import produce from "immer";

type Todo = {
  id: string;
  text: string;
  completed: boolean;
};

const initialState = [
  { id: Uuid(), text: "전화하기", completed: false },
  { id: Uuid(), text: "책 읽기", completed: true },
];

const KEY = "TODO-LIST";

function useTodoList() {
  // <https://github.com/twinstae/realworld-react-redux/commit/6326e03a5b9aee9dc711df260d470bb65829fa93#diff-e8d077acbe70741eb0e73c7919822d3931e52a385a15622eddd9e7123b7e81d9>

  // <https://todomvc.com/examples/react/#/>

  const [todoList, setTodoList] = useState<Todo[]>(initialState);

  useEffect(() => {
    const saved = localStorage.getItem(KEY);
    saved && setTodoList(JSON.parse(saved));
  }, []); // 불러오기

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(todoList));
  }, [todoList]); // 저장하기

  function addTodo(todoInput: string) {
    const newTodoItem = {
      id: Uuid(),
      text: todoInput,
      completed: false,
    };
    // 원래 상태...
    // 함수를 데이터처럼
    // 고차함수 함수를 매개변수로 받는 함수

    setTodoList((old) => [...old, newTodoItem]);
  }
  // 인간에게는 매우 빠른 시간이지만...
  // 리액트 스케쥴러가 상태를 변경
  // 상태가 변경되니 컴포넌트를 리렌더

  // todo item 지우기
  function deleteTodoItem(targetId: string) {
    setTodoList((old) => old.filter((todo) => todo.id !== targetId));
    console.log("targetId :", targetId);
  }

  // 완료된 todo item 모두 지우기
  function clearCompleted() {
    setTodoList((old) => old.filter((todo) => !todo.completed));
  }

  // 완료된 todo item 체크하기
  function completeTodoItem(targetId: string) {
    setTodoList(
      produce((old) => {
        const targetTodo = old.find((todo) => todo.id === targetId);

        if (targetTodo) {
          targetTodo.completed = !targetTodo.completed;
        }
      })
    );
  }

  function changeTodoItem(targetId: string, newText: string) {
    setTodoList(
      produce((old) => {
        const targetTodo = old.find((todo) => todo.id === targetId);

        if (targetTodo) {
          targetTodo.text = newText;
        }
      })
    );
  }

  const itemLeftCount = todoList.filter((todo) => !todo.completed).length;

  return {
    todoList,
    addTodo,
    deleteTodoItem,
    completeTodoItem,
    itemLeftCount,
    clearCompleted,
    changeTodoItem,
  };
}

function App() {
  const {
    todoList,
    addTodo,
    deleteTodoItem,
    completeTodoItem,
    itemLeftCount,
    clearCompleted,
    changeTodoItem,
  } = useTodoList();

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
              <TodoItem
                key={todo.id}
                {...todo}
                deleteTodo={deleteTodoItem}
                completeTodo={completeTodoItem}
                changeTodoItem={changeTodoItem}
              />
            ))}
          </ul>
        </section>
        <footer className="footer">
          <TodoCount count={itemLeftCount} />
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
