
import { useState } from "react";

const BookingForm = (props) => {

  const minimumDateTime = new Date().toISOString().slice(0, -8);
  const minimumNumberOfGuests = 1;
  const maximumNumberOfGuests = 10;

  const [fullName, setFullName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [guests, setGuests] = useState(minimumNumberOfGuests);
  const [dateTime, setDateTime] = useState(minimumDateTime);
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.submitForm(e);
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
              <label htmlFor="book-datetime">Date Time:</label>
              <input id="book-datetime" value={dateTime} min={minimumDateTime} type="datetime-local" onChange={(e) => setDateTime(e.target.value)} required />
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
