import React, { useContext } from "react";
import { TodoContext } from "../../context";
import uniqid from "uniqid";

import "./styles.scss";

function AddTodo() {
  const [state, setState] = useContext(TodoContext);
  const { todoInput, list } = state;

  const inputChange = (event) => {
    setState({ ...state, todoInput: event.target.value });
  };

  const addTodo = () => {
    if (
      todoInput &&
      !list.some((item) => todoInput.toLowerCase() === item.title.toLowerCase())
    ) {
      setState({
        ...state,
        list: [
          ...list,
          {
            id: uniqid(),
            title: todoInput,
          },
        ],
        todoInput: "",
      });
    }
  };
  const inputKeyPress = (event) => (event.key === "Enter" ? addTodo() : null);

  return (
    <div className="add-todo">
      <input
        type="text"
        placeholder="Add Todo..."
        value={todoInput}
        onChange={inputChange}
        onKeyPress={inputKeyPress}
      />
      <button className="radius" onClick={addTodo}>
        Add
      </button>
    </div>
  );
}

export default AddTodo;
