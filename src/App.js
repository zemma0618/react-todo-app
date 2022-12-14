import "./App.css";

import useFetch from "./util/useFetch";
import Main from "./component/Main";

function App() {
  const [todos, isPending, error] = useFetch("http://localhost:3001/todos");

  return (
    <div className="App">
      <Main todos={todos} />
    </div>
  );
}

export default App;
