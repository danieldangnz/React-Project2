import { useEffect, useState } from "react";

function Demo9() {
  //States
  const [todos, setTodos] = useState([]);

  //Hook: useEffect
  useEffect(() => {
    //Fetch all "todos" data through REST API Endpoint: https://jsonplaceholder.typicode.com/todos
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => {
        setTodos([...json]);
      })
      .catch((error) => alert("landing error!"));
  }, []);

  return (
    <div>
      {todos.map((item) => {
        return (
          <div className="m-1 p-1" style={item.completed ? ({backgroundColor: 'pink'}) : ({backgroundColor: 'gray'})} key={item.id}>
            <h4>Task: {item.title}</h4>
            <p>Id: {item.id}</p>
            <p>Completed: {String(item.completed)}</p>
          </div>
        );
      })}
    </div>
  );
}
  
export default Demo9;