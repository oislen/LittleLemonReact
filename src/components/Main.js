import { BrowserRouter as Router, Routes, Route   } from "react-router-dom";
import { useReducer } from "react";

import fetchAPI  from "./utilities/fetchAPI";
import Home from "./pages/Home";
import About from "./pages/About"
import Menu from "./pages/Menu"
import Bookings from "./pages/Bookings"
import BookingConfirmation from "./pages/BookingConfirmation"

const Main = () => {

  const submitAPI = function(formData) {
      return true;
  };

  function updateTimes(state, date) {
    return fetchAPI(new Date(date));
  }

  const initialState = fetchAPI(new Date());
  const [state, dispatch] = useReducer(updateTimes, initialState);

  return (
    <main>
      <Router>
        <Routes>
          <Route  path="/" element={<Home />} />
          <Route  path="/about" element={<About />} />
          <Route  path="/menu" element={<Menu />} />
          <Route  path="/book" element={<Bookings availableTimes={state} dispatch={dispatch} submitAPI={submitAPI} />} />
          <Route path="/confirmed" element={<BookingConfirmation />} />
        </Routes>
      </Router>
    </main>
  );
};

export default Main;