import { BrowserRouter as Router, Routes, Route   } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

import littleLemonAPI  from "./utilities/littleLemonAPI";
import Home from "./pages/Home";
import About from "./pages/About"
import Menu from "./pages/Menu"
import MenuItem from "./pages/MenuItem"
import Bookings from "./pages/Bookings"
import BookingConfirmation from "./pages/BookingConfirmation"

const Main = () => {

  const userPlatform = navigator.platform;
  let apiUrl;
  if (userPlatform.indexOf("Win") !== -1) {
    apiUrl = "http://localhost:8000/api/menu-items";
  } else {
    apiUrl = "http://host.docker.internal:8000/api/menu-items";
  }
  var url=useRef(apiUrl);
  var method=useRef("GET");

  const [menuItems, setMenuItems] = useState([]);

  async function getMenuItems() {
        let response = await littleLemonAPI(url.current, method.current);
        setMenuItems(response);
      };

  useEffect(() => {
    getMenuItems();
  }, []);

  const submitAPI = function(formData) {
      return true;
  };

  return (
    <main>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu menuItems={menuItems} />} />
          <Route path="/menu/:name" element={<MenuItem menuItems={menuItems} />} />
          <Route path="/book" element={<Bookings submitAPI={submitAPI} />} />
          <Route path="/confirmed" element={<BookingConfirmation />} />
        </Routes>
      </Router>
    </main>
  );
};

export default Main;