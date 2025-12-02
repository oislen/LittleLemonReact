
import { useState } from "react";

const BookingForm = (props) => {

  const minimumDate = new Date().toISOString().split('T')[0];
  const defaultTime = props.availableTimes[0];
  const minimumNumberOfGuests = 1;
  const maximumNumberOfGuests = 10;

  const [fullName, setFullName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [guests, setGuests] = useState(minimumNumberOfGuests);
  const [date, setDate] = useState(minimumDate);
  const [time, setTime] = useState(defaultTime);
  const [comment, setComment] = useState("");

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
              <label htmlFor="book-fullname">Full name:</label>
              <input id="book-fullname" value={fullName} minLength="2" maxLength="128" type="text" onChange={(e) => setFullName(e.target.value)} required />
            </div>

            <div>
              <label htmlFor="book-mobile-number">Mobile Number</label>
              <input id="book-mobile-number" value={mobileNumber} minLength="2" maxLength="32" type="text" onChange={(e) => setMobileNumber(e.target.value)} required />
            </div>

            <div>
              <label htmlFor="book-guests">Number of Guests:</label>
              <input id="book-guests" min={minimumNumberOfGuests} max={maximumNumberOfGuests } type="number" placeholder={1} value={guests} onChange={(e) => setGuests(e.target.value)} required />
            </div>

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
              <label htmlFor="book-comment">Comment:</label>
              <input id="book-comment" value={comment} maxLength="256" type="text" onChange={(e) => setComment(e.target.value)} />
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
