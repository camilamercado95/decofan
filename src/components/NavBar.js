import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <>
      <header className="header">
        <nav className="nav">
          <a href="App.js">DecoFan</a>

          <ul className="nav justify-content-center">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Todo
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Categoria 1
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Categoria 2
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Categoria 3
              </a>
            </li>
          </ul>

        <CartWidget/>
          
        </nav>
      </header>
    </>
  );
};

export default NavBar;
