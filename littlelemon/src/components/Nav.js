import logo from "../assets/Logo.svg";

const Nav = () => {
  return (
    <nav className="nav">
        <img src={logo} alt="logo" />
      <ul className="nav-links">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/">Menu</a>
        </li>
        <li>
          <a href="/">Reservations</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;