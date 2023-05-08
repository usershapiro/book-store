import { NavLink } from "react-router-dom";
import "./Header.css";


function Header(): JSX.Element {
    return (
        <div className="Header">
			<NavLink to="/home">Home</NavLink>
            <span> | </span>
            <NavLink to="/booklist"> book List</NavLink>
            <span> | </span>
            <NavLink to="/book-add">Insert new book</NavLink>
        </div>
    );
}

export default Header;
