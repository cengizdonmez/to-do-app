import React, { useContext } from "react";
import { TodoContext } from "../../context";
import TodoItem from "../TodoItem";
import Empty from "../../assets/empty-img.svg";

import "./styles.scss";

function TodoList() {
  const [state, setState] = useContext(TodoContext);
  const { list, search, activeStatus } = state;

  const changeStatus = (id, checked) => {
    setState({
      ...state,
      list: list.map((item) =>
        item.id === id
          ? {
              ...item,
              status: checked,
            }
          : item
      ),
    });
  };

  const deleteTodo = (id) => {
    setState({ ...state, list: list.filter((item) => item.id !== id) });
  };
  return (
    <div className="list">
      {!list.length ? (
        <img className="hero" src={Empty} alt="" />
      ) : (
        <div className="todos">
          {(activeStatus === "uncompleted" || activeStatus === "") && (
            <div>
              <h5 className="title">Uncompleted Tasks</h5>
              <div className="items">
                {list
                  .filter((item) => !item.status)
                  .filter((item) =>
                    item.title.toLowerCase().includes(search.toLowerCase())
                  )
                  .map((item, i) => (
                    <TodoItem
                      key={i}
                      {...item}
                      onChange={({ target: { checked } }) => {
                        changeStatus(item.id, checked);
                      }}
                      handleRemove={() => {
                        deleteTodo(item.id);
                      }}
                    />
                  ))}
              </div>
            </div>
          )}
          {(activeStatus === "completed" || activeStatus === "") && (
            <div>
              <h5 className="title">Completed Tasks</h5>
              <div className="items">
                {list
                  .filter((item) => item.status)
                  .filter((item) =>
                    item.title.toLowerCase().includes(search.toLowerCase())
                  )
                  .map((item, i) => (
                    <TodoItem
                      key={i}
                      {...item}
                      onChange={({ target: { checked } }) => {
                        changeStatus(item.id, checked);
                      }}
                      handleRemove={() => {
                        deleteTodo(item.id);
                      }}
                    />
                  ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default TodoList;
