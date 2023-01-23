import { toast } from "react-toastify";

export const Item = ({ text, id, isCompleted, todos, setTodos }) => {
  const handleChange = (todoId) => {
    const findedTodo = todos.find((todo) => todo.id === todoId);
    findedTodo.isCompleted = !findedTodo.isCompleted;
    setTodos([...todos]);

    if (findedTodo.isCompleted) {
      toast.success("Todo bajarildi");
    } else {
      toast.warning("Todo bajarildimadi!");
    }
  };

  const handleDelete = (todoId) => {
    const filteredTodo = todos.filter((todo) => todo.id !== todoId);
    setTodos(filteredTodo);
    toast.error("Todo o'chirildi!!!");
  };

  const handleEdit = (todoId, text) => {
    const newText = prompt("Todo'ni o'zgartiring!", text);
    const findedTodo = todos.find((todo) => todo.id === todoId);

    if (newText !== null) {
      findedTodo.text = newText;
      setTodos([...todos]);
      toast.warning("Todo o'zgartirildi!");
    }
  };

  return (
    <li className="list-group-item d-flex align-items-center">
      <input
        className="form-check-input me-3"
        onChange={() => handleChange(id)}
        checked={isCompleted}
        type="checkbox"
      />
      <strong
        className={
          isCompleted ? "text-decoration-line-through text-success" : ""
        }
      >
        {id}. {text}
      </strong>
      <button
        className="btn btn-warning ms-auto me-3"
        onClick={() => handleEdit(id, text)}
      >
        EDIT
      </button>
      <button className="btn btn-danger" onClick={() => handleDelete(id)}>
        DELETE
      </button>
    </li>
  );
};
