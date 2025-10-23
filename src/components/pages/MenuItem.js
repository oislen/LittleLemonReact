import { useParams } from "react-router-dom"
import MenuItemListing from "./partials/MenuItemListing"

const MenuItem = (props) => {
  const { name } = useParams();
  const menuItems = props.menuItems.filter(obj => {return obj.name === name})
  return (
    <>
      <section>
        <article>
          {menuItems.map((menuItem) => <MenuItemListing menuItem={menuItem} key={menuItem.menuitem_id}/>)}
        </article>
      </section>
    </>
  );
};

export default MenuItem;