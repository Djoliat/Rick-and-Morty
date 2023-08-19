import SearchBar from "./SearchBar";
import { NavLink } from "react-router-dom";

const Nav = ({ onSearch }) => {
  return (
    <nav>
      <SearchBar onSearch={onSearch} />
      <button>
      <NavLink to="/about"> About </NavLink> 
      </button>

      <button>
        <NavLink to="/home"> Home</NavLink> 
      </button>
      <NavLink to ="/favorites "><button>Favorites</button></NavLink>
    </nav>
  );
};
export default Nav;
