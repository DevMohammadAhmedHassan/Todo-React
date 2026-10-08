import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import Item from "./Item";

const Todo = () => {
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
      name: "html",
      status: "pending",
    }
  ]);

  return (
    <div>
      <main>
        <div className="container">
          <h1>Make Your TODO List!</h1>
          <div className="pTag">
            <p>Add your items here 🖊️</p>
          </div>

          <div className="input">
            <input type="text" placeholder="your item" />
            <button>submit</button>
          </div>

          {/* Your Tasks */}
          <div className="items">
            <h4>Your Tasks</h4>

            <ul>
              {list.map((element) => (
                <li>
                  <Item />
                </li>
              ))}
            </ul>

            <ul>
              {/* <li>
              <p>React</p>
              <div>
                <button>
                  <i className="fa-solid fa-check" style="color: rgb(0, 209, 70)"></i>
                </button>
                <button>
                  <i
                    className="fa-regular fa-trash-can"
                    style="color: rgb(211, 0, 0)"
                  ></i>
                </button>
              </div>
            </li> */}
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
