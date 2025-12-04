import {useNavigate} from "react-router-dom";
import BookingForm from "./forms/BookingForm";
import aboutImage from "../../assets/mario-and-adrian.jpg";

const Bookings = (props) => {
  const navigate = useNavigate();
  function submitForm(formData) {
    if (props.submitAPI(formData)) {
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