import { useState } from "react";
import { useRef } from "react";

export const List = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Code yozish",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Uxlash",
      isCompleted: false,
    },
  ]);

  const handleSubmit = (evt) => {
    evt.preventDefault();

    setTodos([
      ...todos,
      {
        id: todos.at(-1).id + 1 || 1,
        text: elInput.current.value,
        isCompleted: false,
      },
    ]);

    console.log(todos);
  };

  let elInput = useRef();

  return (
    <div className="container">
      <h1 className="h1 display-2 text-center">TODO</h1>
      <form onClick={(evt) => handleSubmit(evt)}>
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
      <ul></ul>
    </div>
  );
};
