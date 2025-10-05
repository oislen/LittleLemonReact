import { BrowserRouter as Router, Routes, Route   } from "react-router-dom";
import { useReducer } from "react";

import Home from "./pages/Home";
import About from "./pages/About"
import Menu from "./pages/Menu"
import Bookings from "./pages/Bookings"

const Main = () => {

  const updateTimes = function(){
    let allAvailableTimes=["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    let availableTimes=["Select a Time"];
    for (const availableTime of allAvailableTimes){
      let random = Math.random();
      if (random < 0.5) {
        availableTimes.push(availableTime)
      }
    }
    return availableTimes;
  }

  const initialState = updateTimes();
  const [state, dispatch] = useReducer(updateTimes, initialState);

  return (
    <main>
      <Router>
        <Routes>
          <Route  path="/" element={<Home />} />
          <Route  path="/about" element={<About />} />
          <Route  path="/menu" element={<Menu />} />
          <Route  path="/book" element={<Bookings availableTimes={state} dispatch={dispatch} />} />
        </Routes>
      </Router>
    </main>
  );
};

export default Main;