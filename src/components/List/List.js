import { useState } from "react";
import { useRef } from "react";
import { Item } from "../Item/";

export const List = () => {
  console.log(JSON.parse(localStorage.getItem("todos")));
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );

  let elInput = useRef();

  const handleSubmit = (evt) => {
    evt.preventDefault();

    setTodos([
      ...todos,
      {
        id: todos.at(-1)?.id + 1 || 1,
        text: elInput.current.value,
        isCompleted: false,
      },
    ]);
    elInput.current.value = "";
  };

  localStorage.setItem("todos", JSON.stringify(todos));

  return (
    <div className="container">
      <h1 className="h1 display-2 my-5 text-center">TODO</h1>
      <form
        className="w-50 mx-auto p-5 rounded shadow"
        onSubmit={(evt) => handleSubmit(evt)}
      >
        <div className="input-group">
          <input
            className="form-control"
            ref={elInput}
            type="text"
            placeholder="Todo..."
            autoFocus
          />
          <button className="btn btn-primary" type="submit">
            SEND
          </button>
        </div>
      </form>
      <ul className="list-group mt-5 w-50 mx-auto">
        {todos.map((todo) => (
          <Item
            key={todo.id}
            text={todo.text}
            id={todo.id}
            isCompleted={todo.isCompleted}
            todos={todos}
            setTodos={setTodos}
          />
        ))}
      </ul>
    </div>
  );
};
