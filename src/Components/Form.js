import React from "react";
import { FaPlus } from "react-icons/fa";
import "./Form.css";
const Form = ({ newItem, setNewItem, handleSubmit }) => {
  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        autoFocus
        required
        placeholder="Enter item"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button>
        <FaPlus size={28} />
      </button>
    </form>
  );
};

export default Form;
