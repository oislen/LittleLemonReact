import Hero from "./partials/Hero"
import menuImg from "../../assets/Grilled fish C.jpg";
import bookImg from "../../assets/salad.jpg";
import openImg from "../../assets/Mario and Adrian b.jpg";

const Home = () => {
  return (
    <>
      <section>
        <article id="hero">
          <h1>30% Off This Weekend</h1>
          <p>
              Enjoy an exclusive special deal on your bill this weekend only. Treat yourself to your favorites and make the most of this limited-time offer before it's gone.
          </p>
        </article>
      </section>
      <section>
        <article>
          <h2>Our New Menu</h2>
          <img src={menuImg} />
          <p>
            Experience the vibrant flavors of our new Mediterranean menu, inspired by fresh ingredients and timeless coastal recipes. From savory mezze to fragrant grilled specialties, every dish is crafted to transport you to the sun-kissed shores of the Mediterranean.
          </p>
          <p className="pButton">
            <a href="/menu">See our new menu</a>
          </p>
        </article>
        <article>
          <h2>Book a table</h2>
          <img src={bookImg} />
          <p>
            Reserve your table today and make sure you don't miss out on an unforgettable dining experience. Whether it's a romantic evening or a gathering with friends, we'll have everything ready to welcome you.
          </p>
          <p className="pButton">
            <a href="/book">Book your table now</a>
          </p>
        </article>
        <article>
          <h2>Opening Hours</h2>
          <img src={openImg} />
          <p>
            The Little Lemon Restaurant is open 7 days a week, except for public holidays. 
          </p>
          <ul>
            <li>Mon - Fri: 2pm - 10pm</li>
            <li>Sat: 2pm - 11pm</li>
            <li>Sun: 2pm - 9pm</li>
          </ul>
        </article>
      </section>
    </>
  );
};

export default Home;