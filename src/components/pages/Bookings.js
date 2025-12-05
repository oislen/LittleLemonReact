import {useNavigate} from "react-router-dom";
import BookingForm from "./forms/BookingForm";
import aboutImage from "../../assets/mario-and-adrian.jpg";
import littleLemonAPI  from "../utilities/littleLemonAPI";
import { useRef } from "react";

const Bookings = (props) => {

  /* determine url endpoint for rest api */
  const userPlatform = navigator.platform;
  let apiUrl;
  if (userPlatform.indexOf("Win") !== -1) {
    apiUrl = "http://localhost:8000/api/bookings/";
  } else {
    apiUrl = "http://host.docker.internal:8000/api/bookings/";
  }
  var url=useRef(apiUrl);

  const navigate = useNavigate();
  async function submitForm(formData) {
    if (props.submitAPI(formData)) {
      /* add rest api call to write booking info to backend */
      const data = {
        full_name:formData.target[1].attributes.value.nodeValue,
        mobile_number:formData.target[2].attributes.value.nodeValue,
        guest_number:formData.target[3].attributes.value.nodeValue,
        date_time:formData.target[4].attributes.value.nodeValue,
        comment:formData.target[5].attributes.value.nodeValue
      };
      await littleLemonAPI(url.current, "POST", JSON.stringify(data), {"Accept":"*/*", "Content-Type": "application/json"});
      console.log(JSON.stringify(data));
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