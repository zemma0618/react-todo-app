import useInput from "../util/useInput";
import { fetchCreate } from "../util/api";
import { useState, useCallback } from "react";
const TodoInsert = () => {
  const [description, setDescription] = useState("");

  const handleChange = useCallback((e) => {
    setDescription(e.target.value);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { description, isCompleted: false };
    fetchCreate("http://localhost:3001/todos", data);
  };

  return (
    <form className="todo-insert" onSubmit={handleSubmit}>
      <input
        className="todo-insert-input"
        placeholder="⏎ 할 일을 입력하세요"
        onChange={handleChange}
        value={description}
      />
      <button className="submit-button" type="submit">
        ENTER
      </button>
    </form>
  );
};

export default TodoInsert;
