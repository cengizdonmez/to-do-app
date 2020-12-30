import { useContext } from "react";
import SearchIcon from "../../assets/search.svg";
import { TodoContext } from "../../context";

import "./styles.scss";

function Search() {
  const [state, setState] = useContext(TodoContext);
  const { search } = state;
  const searchChange = (event) => {
    setState({ ...state, search: event.target.value });
  };
  return (
    <div className="search">
      <img src={SearchIcon} alt="" />

      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={searchChange}
      />
    </div>
  );
}

export default Search;
