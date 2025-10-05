import { BrowserRouter as Router, Routes, Route   } from "react-router-dom";
import { useReducer } from "react";

import Home from "./pages/Home";
import About from "./pages/About"
import Menu from "./pages/Menu"
import Bookings from "./pages/Bookings"

const Main = () => {

  const seededRandom = function (seed) {
      var m = 2**35 - 31;
      var a = 185852;
      var s = seed % m;
      return function () {
          return (s = s * a % m) / m;
      };
  }

  const fetchAPI = function(date) {
      let result = [];
      let random = seededRandom(date.getDate());

      for(let i = 17; i <= 23; i++) {
          if(random() < 0.5) {
              result.push(i + ':00');
          }
          if(random() < 0.5) {
              result.push(i + ':30');
          }
      }
      return result;
  };

  const submitAPI = function(formData) {
      return true;
  };

  function updateTimes(state, date) {
    return fetchAPI(new Date(date));
  }

  const initialState = fetchAPI(new Date());
  const [state, dispatch] = useReducer(updateTimes, initialState);

  function submitForm(formData) {
    alert("Booking successful!");
  }

  return (
    <main>
      <Router>
        <Routes>
          <Route  path="/" element={<Home />} />
          <Route  path="/about" element={<About />} />
          <Route  path="/menu" element={<Menu />} />
          <Route  path="/book" element={<Bookings availableTimes={state} dispatch={dispatch} submitForm={submitForm} />} />
        </Routes>
      </Router>
    </main>
  );
};

export default Main;