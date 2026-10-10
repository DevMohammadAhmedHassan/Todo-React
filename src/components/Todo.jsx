import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import Item from "./Item";

const Todo = () => {
  // states
  const [list, setList] = useState([
    {
      id: 1,
      name: "react",
      status: "pending",
    },
    {
      id: 2,
      name: "css",
      status: "pending",
    },
    {
      id: 3,
      name: "Biryani",
      status: "completed",
    },
  ]);

  const [input, setInput] = useState("");

  // Functions
  const handleInputChange = (e) => {
    setInput(e.target.value);
    console.log(e.target.value);
  };

  const addTask = () => {
    // to avoid blank input
    if (input === "") {
      return;
    }
    console.log(input);
    const newTask = {
      id: Math.floor(Math.random() * 100),
      name: input,
      status: "pending",
    };

    setList([...list, newTask]);
  };

  const clearAllTasks = () => {
    setList([]);
  };

  const doneTask = (id)=>{
    const updatedList = list.map((element)=>{
      if(element.id === id){
        element.status = "completed";
      }
      return element;
    })
    setList(updatedList);
  }
  
  const deleteTask = (id) => {
    const updatedList = list.filter((element)=> {
      return(element.id !== id)
    })
    setList(updatedList);
  };

  // UI
  return (
    <div>
      <main>
        <div className="container">
          <h1>Make Your TODO List!</h1>
          <div className="pTag">
            <p>Add your items here 🖊️</p>
          </div>

          <div className="input">
            <input
              type="text"
              placeholder="your item"
              value={input}
              onChange={handleInputChange}
            />

            <button onClick={addTask}>submit</button>
          </div>

          {/* Your Tasks */}
          <div className="items">
            {list.length > 0 && <h4>Your Tasks</h4>}

            {/* List of all the tasks */}
            <ul>
              {list.map((element) => (
                //passing props and you can also pass functions as props
                <Item task={element} doneTask={doneTask} deleteTask={deleteTask} />
              ))}
            </ul>
          </div>

          {/* Clear All Button */}
          {list.length > 0 && (
            <button className="clearAll" onClick={clearAllTasks}>
              Clear All
            </button>
          )}
        </div>

        <p className="name">
          Made with{" "}
          <span>
            <FontAwesomeIcon
              icon={faReact}
              size="xl"
              style={{ color: "rgb(116, 192, 252)" }}
            />
          </span>{" "}
          by DevMohammadAhmedHassan
        </p>
      </main>
    </div>
  );
};

export default Todo;
