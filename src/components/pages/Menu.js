import unpackMenuItems from "../utilities/unpackMenuItems"

const Menu = (props) => {
  console.log(unpackMenuItems(props.menuItems));
  return (
    <>
      <section>
        <article>
          <h2>Menu</h2>
          <div className="row">
            <div className="column">
              <h2>Starters</h2>
              <h2>Mains</h2>
              <h2>Desserts</h2>
              <h2>Drinks</h2>
            </div>
            <div className="column">
              <figure></figure>
              <figure></figure>
            </div>
          </div>
        </article>
      </section>
    </>
  );
};

export default Menu;