import React, { useState } from "react";
import "./App.css";

import Footer from "./Components/Footer";
import Form from "./Components/Form";
// import Greet from "./Components/Greet";
import Main from "./Components/Main";
import SearchForm from "./Components/SearchForm";

function App() {
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("shoppingList"))
  );
  const [search, setSearch] = useState("");
  const [newItem, setNewItem] = useState("");

  const addItem = (item) => {
    let id = data.length ? data[data.length - 1].id + 1 : 1;
    const mynewItem = {
      id,
      checked: false,
      item,
    };
    const listItem = [...data, mynewItem];
    setAndSave(listItem);
  };

  const setAndSave = (newItem) => {
    setData(newItem);
    localStorage.setItem("shoppingList", JSON.stringify(newItem)); //storing data into locale storage
  };

  const inputhandler = (id) => {
    let listitems = data.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setAndSave(listitems);
  };
  const deletehandler = (id) => {
    let listItems = data.filter((item) => item.id !== id);
    setAndSave(listItems);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem("");
  };
  return (
    <div className="App">
      {/* <Greet /> */}
      <Form
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchForm search={search} setSearch={setSearch} />
      <Main
        data={data.filter((item) =>
          item.item.toLowerCase().includes(search.toLowerCase())
        )}
        inputhandler={inputhandler}
        deletehandler={deletehandler}
      />
      <Footer length={data.length} />
    </div>
  );
}

export default App;
