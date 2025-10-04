import { BrowserRouter as Router, Routes, Route   } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About"
import Menu from "./pages/Menu"
import Bookings from "./pages/Bookings"

const Main = () => {
  return (
    <main>
      <Router>
        <Routes>
          <Route  path="/" element={<Home />} />
          <Route  path="/about" element={<About />} />
          <Route  path="/menu" element={<Menu />} />
          <Route  path="/bookings" element={<Bookings />} />
        </Routes>
      </Router>
    </main>
  );
};

export default Main;