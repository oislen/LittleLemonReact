const MenuListing = (props) => {
  return (
    <>
      <p className="menu-details">
        <a href={`/menu/${props.menuItem.name}`}> {props.menuItem.name} </a>
          <span>
            <br/>
            {props.menuItem.ingredients}
            <br/>
            {props.menuItem.price}
          </span>
      </p>
    </>
  );
};

export default MenuListing;