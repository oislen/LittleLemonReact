
import { useState } from "react";

const BookingForm = (props) => {

  const [times, setTimes] = useState("");
  const [guests, setGuests] = useState("");
  const [occasion, setOccasion] = useState("");

  var availableTimes=["18:00", "18:15", "18:30"];
  var date=Date();

  return (
      <section>
        <form>
          <fieldset className="formField">
            <div>
              <label htmlFor="book-date">Choose Date:</label>
              <input id="book-date" value={date} type="date" required />
            </div>

            <div>
              <label htmlFor="book-time">Choose Time:</label>
              <select id="book-time" value={times} onChange={(e) => setTimes(e.target.value)} required >
                <option value="">Select a Time</option>
                {availableTimes.map((availableTimes) => {return <option key={availableTimes}>{availableTimes}</option>;})}
              </select>
            </div>

            <div>
              <label htmlFor="book-guests">Number of Guests:</label>
              <input id="book-guests" min="1" max="10" type="number" placeholder={0} value={guests} onChange={(e) => setGuests(e.target.value)} required />
            </div>

            <div>
              <label htmlFor="book-occasion">Occasion:</label>
              <select id="book-occasion" key={occasion} value={occasion} onChange={(e) => setOccasion(e.target.value)} required >
                <option value="">Select an option</option>
                <option>Birthday</option>
                <option>Anniversary</option>
              </select>
            </div>

            <div className="btnReceive">
              <input
                aria-label="On Click"
                type="submit"
                value={"Make Your Reservation"}
              />
            </div>
          </fieldset>
        </form>
      </section>
  );
};

export default BookingForm;
