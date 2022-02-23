import React from "react";
import { FaTrashAlt } from "react-icons/fa";

const ListItem = ({ item, inputhandler, deletehandler }) => {
  return (
    <li className="list-item" key={item.id}>
      <input
        type="checkbox"
        checked={item.checked}
        onChange={() => inputhandler(item.id)}
      />
      <label
        style={
          item.checked
            ? {
                textDecoration: "line-through",
              }
            : null
        }
        onDoubleClick={() => inputhandler(item.id)}
      >
        {item.item}
      </label>
      <span className="delete">
        <FaTrashAlt
          role="button"
          tabIndex="0"
          size={28}
          onClick={() => deletehandler(item.id)}
        />
      </span>
    </li>
  );
};

export default ListItem;
