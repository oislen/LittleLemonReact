
import { useState } from "react";

const BookingForm = (props) => {

  const minimumDate = new Date().toISOString().split('T')[0];
  const defaultTime = props.availableTimes[0];
  const minimumNumberOfGuests = 1;
  const maximumNumberOfGuests = 10;

  const [date, setDate] = useState(minimumDate);
  const [time, setTime] = useState(defaultTime);
  const [guests, setGuests] = useState(minimumNumberOfGuests);
  const [occasion, setOccasion] = useState("");

  var occasionTypes=["Select an Occasion", "Birthday", "Anniversary"]

  const handleSubmit = (e) => {
    e.preventDefault();
    props.submitForm(e);
  };

  const handleDateChange = (e) => {
    setDate(e);
    props.dispatch(e);
  };

  return (
      <section>
        <form onSubmit={handleSubmit}>
          <fieldset className="formField">
            <div>
              <label htmlFor="book-date">Choose Date:</label>
              <input id="book-date" value={date} min={minimumDate} type="date" onChange={(e) => handleDateChange(e.target.value)} required />
            </div>

            <div>
              <label htmlFor="book-time">Choose Time:</label>
              <select id="book-time" value={time} onChange={(e) => setTime(e.target.value)} required >
                {props.availableTimes.map((availableTimes) => {return <option data-testid="book-time-option" key={availableTimes}>{availableTimes}</option>;})}
              </select>
            </div>

            <div>
              <label htmlFor="book-guests">Number of Guests:</label>
              <input id="book-guests" min={minimumNumberOfGuests} max={maximumNumberOfGuests } type="number" placeholder={1} value={guests} onChange={(e) => setGuests(e.target.value)} required />
            </div>

            <div>
              <label htmlFor="book-occasion">Occasion:</label>
              <select id="book-occasion" key={occasion} value={occasion} onChange={(e) => setOccasion(e.target.value)} >
                {occasionTypes.map((occasionTypes) => {return <option data-testid="book-occasion-option" key={occasionTypes}>{occasionTypes}</option>;})}
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
