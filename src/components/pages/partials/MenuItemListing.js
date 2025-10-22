const Listing = (props) => {
  return (
    <>
    <span>
    <a href="/home">Home</a>/<a href="/Menu">Menu</a>/{props.menuItem.name}
    </span>
    <div className="row">
    <div className="column">
        <h2>{props.menuItem.name}</h2>
        <p>{props.menuItem.description}</p>
        <p>Price ${props.menuItem.price}</p>
    </div>
    </div>
    </>
  );
};

export default Listing;