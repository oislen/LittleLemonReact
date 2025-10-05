
import { useState } from "react";

const BookingForm = (props) => {

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("");
  const [occasion, setOccasion] = useState("");

  var occasionTypes=["Select an Occasion", "Birthday", "Anniversary"]

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Booking successful!");
  };

  const handleChange = (e) => {
    setDate(e);
    props.dispatch(e);
  };

  return (
      <section>
        <form onSubmit={handleSubmit}>
          <fieldset className="formField">
            <div>
              <label htmlFor="book-date">Choose Date:</label>
              <input id="book-date" value={date} type="date" onChange={(e) => handleChange(e.target.value)} required />
            </div>

            <div>
              <label htmlFor="book-time">Choose Time:</label>
              <select id="book-time" value={time} onChange={(e) => setTime(e.target.value)} required >
                {props.availableTimes.map((availableTimes) => {return <option key={availableTimes}>{availableTimes}</option>;})}
              </select>
            </div>

            <div>
              <label htmlFor="book-guests">Number of Guests:</label>
              <input id="book-guests" min="1" max="10" type="number" placeholder={1} value={guests} onChange={(e) => setGuests(e.target.value)} required />
            </div>

            <div>
              <label htmlFor="book-occasion">Occasion:</label>
              <select id="book-occasion" key={occasion} value={occasion} onChange={(e) => setOccasion(e.target.value)} >
                {occasionTypes.map((occasionTypes) => {return <option key={occasionTypes}>{occasionTypes}</option>;})}
              </select>
            </div>

            <div className="btnReceive">
              <input aria-label="On Click" type="submit" value={"Make Your Reservation"} />
            </div>
          </fieldset>
        </form>
      </section>
  );
};

export default BookingForm;
