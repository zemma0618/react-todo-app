import Header from "./Header";
import TodoList from "./TodoList";
import TodoListItem from "./TodoListItem";
import TodoInsert from "./TodoInsert";
import PixelCityImage from "../image/pixelCity2x.png";

const Main = ({ todos }) => {
  return (
    <>
      <div className="all-container">
        <div className="main-container">
          <Header />
          <div className="todo-container">
            <TodoList todos={todos}>
              <TodoListItem />
            </TodoList>
            <TodoInsert />
          </div>
        </div>
      </div>
      <img className="background-city" src={PixelCityImage} />
      <div className="background-animation" />
      <div className="background-area" />
    </>
  );
};

export default Main;
