import { useState, useRef, useCallback } from "react";
import { fetchDelete, fetchPatch, fetchCreate } from "../util/api";
import CheckedHeartImage from "../image/checkedHeart.png";
import UnCheckedHeartImage from "../image/uncheckedHeart.png";

const TodoListItem = ({ todo }) => {
  const [edited, setEdited] = useState(false);
  const [description, setDescription] = useState(todo.description);

  const handleChange = (e) => {
    setDescription(e.target.value);
    console.log(description);
  }; //여기서는 useCallback 쓰면 안 됐음

  const handleDelete = () => {
    fetchDelete("http://localhost:3001/todos/", todo.id);
  };

  const handleCheck = () => {
    let patchData = { isCompleted: !todo.isCompleted };
    fetchPatch("http://localhost:3001/todos/", todo.id, patchData);
  };

  const onClickEditButton = () => {
    setEdited(true);
  };

  const handleEdit = () => {
    setEdited(false);
    let patchData = { description: description };
    fetchPatch("http://localhost:3001/todos/", todo.id, patchData);
  };

  return (
    <li className="todolist-item" key={todo.id}>
      <div className="todo-front-container">
        <span className="checkbox" onClick={handleCheck}>
          {todo.isCompleted ? (
            <img className="checked-heart-image" src={CheckedHeartImage} />
          ) : (
            <img className="unchecked-heart-image" src={UnCheckedHeartImage} />
          )}
        </span>
        {edited ? (
          <input
            className="todo-edit-input"
            defaultValue={todo.description}
            onChange={handleChange}
            autoFocus="autoFocus"
          />
        ) : (
          <span
            className={
              todo.isCompleted ? "todo-descrption-checked" : "todo-descrption"
            }
          >
            {todo.description}
          </span>
        )}
      </div>
      <div className="list-button-container">
        {edited ? (
          <button className="list-button" onClick={handleEdit}>
            END
          </button>
        ) : (
          <button className="list-button" onClick={onClickEditButton}>
            EDIT
          </button>
        )}
        <button className="list-button" onClick={handleDelete}>
          DEL
        </button>
      </div>
    </li>
  );
};

export default TodoListItem;
