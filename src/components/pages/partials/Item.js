const Item = (props) => {
  return (
    <>
      <p className="menu-details">
          <a href="/menu"> {props.item.name} </a>
            <span>
                <br/>
                {props.item.ingredients}
                <br/>
                {props.item.price}
          </span>
      </p>
    </>
  );
};

export default Item;