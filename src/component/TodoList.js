import TodoListItem from "./TodoListItem";

const TodoList = ({ todos }) => {
  return (
    <ul className="todolist">
      {todos && todos.map((todo) => <TodoListItem todo={todo} key={todo.id} />)}
    </ul>
  );
};

export default TodoList;
