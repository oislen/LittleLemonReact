import unpackMenuItems from "../utilities/unpackMenuItems"
import Item from "./partials/Item"
import grilledFishImage from "../../assets/Grilled fish B.jpg";
import lemonDessertImage from "../../assets/lemon dessert B.jpg";

const Menu = (props) => {
  const unpackedMenuItems = unpackMenuItems(props.menuItems);
  console.log(unpackedMenuItems);
  return (
    <>
      <section>
        <article>
          <h2>Menu</h2>
          <div className="row">
            <div className="column">
              <h3>Starters</h3>
                {unpackedMenuItems.get("starters").map((menuItem) => <Item item={menuItem}/>)}
              <h3>Mains</h3>
                {unpackedMenuItems.get("mains").map((menuItem) => <Item item={menuItem}/>)}
              <h3>Desserts</h3>
                {unpackedMenuItems.get("desserts").map((menuItem) => <Item item={menuItem}/>)}
              <h3>Drinks</h3>
                {unpackedMenuItems.get("drinks").map((menuItem) => <Item item={menuItem}/>)}
            </div>
            <div className="column">
              <figure className="figure" >
                <img src={grilledFishImage}  alt="Charcoal Grilled Fish"/>
                <figcaption className="figure-caption">
                  Charcoal Grilled Fish
                </figcaption>
              </figure>
              <br/>
              <figure className="figure" >
                <img src={lemonDessertImage}  alt="Light Lemon Dessert"/>
                <figcaption className="figure-caption">
                  Light Lemon Dessert
                </figcaption>
              </figure>
            </div>
          </div>
        </article>
      </section>
    </>
  );
};

export default Menu;