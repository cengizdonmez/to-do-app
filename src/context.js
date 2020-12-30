import React, { createContext, useState } from "react";
import uniqid from "uniqid";
export const TodoContext = createContext();

export const TodoProvider = (props) => {
  const [state, setState] = useState({
    search: "",
    activeStatus: "",
    todoInput: "",
    editTodoId: "",
    changeTitle: "",

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
  });

  return (
    <TodoContext.Provider value={[state, setState]}>
      {props.children}
    </TodoContext.Provider>
  );
};
