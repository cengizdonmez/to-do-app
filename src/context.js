import React, { createContext, useState } from "react";
import uniqid from "uniqid";
export const TodoContext = createContext();

const getState = () => {
  try {
    return JSON.parse(localStorage.getItem("state"));
  } catch (err) {
    return null;
  }
};

export const TodoProvider = (props) => {
  const [state, setState] = useState(
    getState() || {
      search: "",
      activeStatus: "",
      todoInput: "",

      list: [
        {
          id: uniqid(),
          title: "Yemek yap",
          status: "completed",
        },
        {
          id: uniqid(),
          title: "Bulaşık yıka",
          status: "completed",
        },
        {
          id: uniqid(),
          title: "Uyu",
        },
        {
          id: uniqid(),
          title: "Sabah erken uyan",
        },
      ],
    }
  );

  const setStateLocalStorage = (state) => {
    setState(state);
    localStorage.setItem("state", JSON.stringify(state));
  };

  return (
    <TodoContext.Provider value={[state, setStateLocalStorage]}>
      {props.children}
    </TodoContext.Provider>
  );
};
