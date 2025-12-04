import {useNavigate} from "react-router-dom";
import BookingForm from "./forms/BookingForm";
import aboutImage from "../../assets/mario-and-adrian.jpg";

const Bookings = (props) => {
  const navigate = useNavigate();
  function submitForm(formData) {
    if (props.submitAPI(formData)) {
      /* add rest api call to write booking info to backend */
      const data = {
        fullName:formData.target[1].attributes.value.nodeValue,
        mobileNumber:formData.target[2].attributes.value.nodeValue,
        numberGuests:formData.target[3].attributes.value.nodeValue,
        dateTime:formData.target[4].attributes.value.nodeValue,
        comment:formData.target[5].attributes.value.nodeValue
      };
      console.log(data);
      navigate("/confirmed");
    }
  }
  return (
    <>
      <section>
        <article>
          <div className="row">
            <div className="column">
              <h2>Make a reservation</h2>
              <BookingForm submitForm={submitForm}/>
            </div>
            <div className="column">
              <figure className="figure" >
                <img src={aboutImage}  alt="Mario and Adrian"/>
                <figcaption className="figure-caption">
                  Little Lemon owners Mario and Adrian.
                </figcaption>
              </figure>
            </div>
          </div>
        </article>
      </section>
    </>
  );
};

export default Bookings;