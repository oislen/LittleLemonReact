import unpackMenuItems from "../utilities/unpackMenuItems"
import MenuListing from "./partials/MenuListing"
import grilledFishImage from "../../assets/Grilled fish B.jpg";
import lemonDessertImage from "../../assets/lemon dessert B.jpg";

const Menu = (props) => {
  const unpackedMenuItems = unpackMenuItems(props.menuItems);
  return (
    <>
      <section>
        <article>
          <h2>Menu</h2>
          <div className="row">
            <div className="column">
              <h3>Starters</h3>
                {unpackedMenuItems.get("starters").map((menuItem) => <MenuListing menuItem={menuItem} key={menuItem.menuitem_id} />)}
              <h3>Mains</h3>
                {unpackedMenuItems.get("mains").map((menuItem) => <MenuListing menuItem={menuItem} key={menuItem.menuitem_id} />)}
              <h3>Desserts</h3>
                {unpackedMenuItems.get("desserts").map((menuItem) => <MenuListing menuItem={menuItem} key={menuItem.menuitem_id} />)}
              <h3>Drinks</h3>
                {unpackedMenuItems.get("drinks").map((menuItem) => <MenuListing menuItem={menuItem} key={menuItem.menuitem_id} />)}
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