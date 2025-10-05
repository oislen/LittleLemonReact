import BookingForm from "./forms/BookingForm";
import aboutImage from "../../assets/lemon dessert B.jpg";

const Bookings = () => {
  return (
    <>
      <section>
        <article>
          <div className="row">
            <div className="column">
              <h2>Bookings</h2>
              <BookingForm />
            </div>
            <div className="column">
              <figure className="figure" >
                <img src={aboutImage}  alt="Mario and Adrian"/>
                <figcaption className="figure-caption">
                  Lemon Dessert
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