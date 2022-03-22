import { NavLink } from "react-router-dom";
import './NavBar.css';
const NavBar = () =>
{
    return(
        <div className="static">
            <nav>
                <div className="logo">
                    <h1>Logo</h1>
                </div>
                <ul>
                    <NavLink exact className="links" activeClassName="active" to="/">Home</NavLink>
                    <NavLink className="links" activeClassName="active" to="/about">About</NavLink>
                    <NavLink className="links" activeClassName="active" to="/service">Service</NavLink>
                    <NavLink className="links" activeClassName="active" to="/contact">Contact</NavLink>
                </ul>
            </nav>
        </div>
    );
}
export default NavBar;