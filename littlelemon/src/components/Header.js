import logo from "../assets/Logo.svg";

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
          <img src={logo} alt="logo" />
        <ul className="navbar-links">
          <li>
            <a className="navbar-button" href="/">Home</a>
          </li>
          <li>
            <a className="navbar-button" href="/about">About</a>
          </li>
          <li>
            <a className="navbar-button" href="/menu">Menu</a>
          </li>
          <li>
            <a className="navbar-button" href="/bookings">Bookings</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;