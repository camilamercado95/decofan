import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <>
      <header className="header">
        <nav className="nav">
          <Link to="/">DecoFan</Link>

          <ul className="nav justify-content-center">
            <li className="nav-item">
              <Link to="/category/deco" className="nav-link">Decoración</Link>
            </li>
            <li className="nav-item">
              <Link to="/category/relojes" className="nav-link">Relojes</Link>
            </li>
            <li className="nav-item">
              <Link to="/category/organizadores" className="nav-link">Organizadores</Link>
            </li>
          </ul>

        <CartWidget/>
          
        </nav>
      </header>
    </>
  );
};

export default NavBar;
