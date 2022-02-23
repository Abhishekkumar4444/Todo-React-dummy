import React from "react";
import "./Main.css";
import ItemList from "./ItemList";

const Main = ({ data, deletehandler, inputhandler }) => {
  return (
    <div className="list">
      {data.length ? (
        <ItemList
          data={data}
          deletehandler={deletehandler}
          inputhandler={inputhandler}
        />
      ) : (
        <p>No item left</p>
      )}
    </div>
  );
};

export default Main;
