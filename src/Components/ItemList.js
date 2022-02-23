import React from "react";
import ListItem from "./ListItem";

const ItemList = ({ data, inputhandler, deletehandler }) => {
  return (
    <ul className="list-ul">
      {data.map((item) => (
        <ListItem
          key={item.id}
          item={item}
          inputhandler={inputhandler}
          deletehandler={deletehandler}
        />
      ))}
    </ul>
  );
};

export default ItemList;
