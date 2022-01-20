import Uuid from "./uuid";
import produce from "immer";
import { atom, useAtom } from "jotai";

const initialState = [
  { id: Uuid(), text: "전화하기", completed: false },
  { id: Uuid(), text: "책 읽기", completed: true },
];

export const todoListAtom = atom(initialState);

export function useTodoListAtom() {
  // <https://github.com/twinstae/realworld-react-redux/commit/6326e03a5b9aee9dc711df260d470bb65829fa93#diff-e8d077acbe70741eb0e73c7919822d3931e52a385a15622eddd9e7123b7e81d9>

  // <https://todomvc.com/examples/react/#/>

  const [todoList, setTodoList] = useAtom(todoListAtom);

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
    loadSaved: setTodoList,
  };
}
