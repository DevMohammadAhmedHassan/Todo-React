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
    }
  ]);

  const [input, setInput]= useState("");

  // Functions
  const handleInputChange=(e)=>{
    setInput(e.target.value);
    console.log(e.target.value);
  }

  const addTask=()=>{
    console.log(input);
    const newTask = {
      id: Math.floor(Math.random()*100),
      name: input,
      status: "pending",
    };

    setList([...list ,newTask]);
  }

  return (
    <div>
      <main>
        <div className="container">
          <h1>Make Your TODO List!</h1>
          <div className="pTag">
            <p>Add your items here 🖊️</p>
          </div>

          <div className="input">
            <input type="text" placeholder="your item" value={input} onChange={handleInputChange}/>

            <button onClick={addTask}>submit</button>
          </div>

          {/* Your Tasks */}
          <div className="items">
            <h4>Your Tasks</h4>

            <ul>
              {list.map((element) => (
                  <Item task={element}/>
              ))}
            </ul>
          </div>

          {/* Clear All Button */}
          <button className="clearAll">Clear All</button>
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
