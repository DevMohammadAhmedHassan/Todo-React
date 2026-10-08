import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";


const Item = () => {
  return (
    <div>
      <p>React</p>
      <div className="buttons">
        <button className="check">
          <FontAwesomeIcon
            icon={faCheck}
            size="lg"
            style={{ color: "rgb(0, 197, 122)" }}
          />
        </button>
        <button className="delete">
          <FontAwesomeIcon
            icon={faTrashCan}
            size="lg"
            style={{ color: "rgb(255, 0, 0)" }}
          />
        </button>
      </div>
    </div>
  );
}

export default Item