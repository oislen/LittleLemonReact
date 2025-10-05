import logo from "../assets/Logo.svg";

const Header = () => {
  return (
    <nav className="nav">
        <img src={logo} alt="logo" />
      <ul className="nav-links">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/menu">Menu</a>
        </li>
        <li>
          <a href="/bookings">Bookings</a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;