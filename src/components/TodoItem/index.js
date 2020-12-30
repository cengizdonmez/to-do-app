import { useContext } from "react";
import { TodoContext } from "../../context";

import "./styles.scss";

function TodoItem({ id, status = "", title, onChange, handleRemove }) {
  const [state, setState] = useContext(TodoContext);
  const { list } = state;

  //const handleInputChange = (event) => {
  const handleInputChange = ({ target: { value } }) => {
    if (!(value.length > 50)) {
      setState({
        ...state,
        list: list.map((item) =>
          item.id === id
            ? {
                ...item,
                //title: event.target.value,
                title: value,
              }
            : item
        ),
      });
    }
  };

  return (
    <div className="item">
      <div className="content">
        <div className="chck">
          <input
            id={`checkbox-${id}`}
            type="checkbox"
            onChange={onChange}
            checked={status}
          />
          <label htmlFor={`checkbox-${id}`}></label>
        </div>

        <input
          className="title task-title"
          type="text"
          value={title}
          onChange={handleInputChange}
        />
      </div>
      <button className="close" onClick={handleRemove}></button>
    </div>
  );
}

export default TodoItem;
