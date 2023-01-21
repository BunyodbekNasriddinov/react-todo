// import { useState } from "react";

const Todo = () => {
  // const { todo, setTodo } = useState([]);

  return (
    <div className="todo">
      <div className="container">
        <h1 className="todo__title">TODO</h1>
        <form
          className="todo__form"
          onSubmit={(evt) => {
            evt.preventDefault();

            console.log(evt.target);
          }}
        >
          <div className="todo__input-group">
            <input
              className="todo__input"
              type="text"
              placeholder="Todo qo'shing"
              autoFocus
            />
            <button className="todo__add-btn main-btn" type="submit">
              Add
            </button>
          </div>
        </form>
        <div className="todo__navbar">
          <button className="todo__all main-btn">
            <span>(0)</span> All
          </button>
          <button className="todo__completed main-btn">
            <span>(0)</span> Copmleted
          </button>
          <button className="todo__uncompleted main-btn">
            <span>(0)</span>
            Un Copmleted
          </button>
          <button className="todo__clear-all main-btn">ClearAll</button>
        </div>
        <ul className="todo__list"></ul>
      </div>
    </div>
  );
};

export default Todo;
