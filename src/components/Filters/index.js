import { useContext } from "react";
import { TodoContext } from "../../context";

import "./styles.scss";

function Filters() {
  const [state, setState] = useContext(TodoContext);
  const { activeStatus } = state;
  const setActiveStatus = (value) => {
    setState({ ...state, activeStatus: value });
  };

  return (
    <div className="filter">
      <button
        onClick={() => setActiveStatus("")}
        className={`${activeStatus === "" ? "active" : ""}`}
      >
        All
      </button>
      <button
        onClick={() => setActiveStatus("uncompleted")}
        className={`${activeStatus === "uncompleted" ? "active" : ""}`}
      >
        Uncompleted
      </button>
      <button
        onClick={() => setActiveStatus("completed")}
        className={`${activeStatus === "completed" ? "active" : ""}`}
      >
        Completed
      </button>
    </div>
  );
}

export default Filters;
