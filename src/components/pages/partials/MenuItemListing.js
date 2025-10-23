const Listing = (props) => {
  return (
    <>
    <div className="row">
      <div className="column">
        <h2>{props.menuItem.name}</h2>
        <h3>Ingredients</h3>
        <p>{props.menuItem.ingredients}</p>
        <h3>Description</h3>
        <p>{props.menuItem.description}</p>
        <p>Price ${props.menuItem.price}</p>
      </div>
        <div className="column">
          <figure className="figure" >
            <img src={require(`../../../assets/${props.menuItem.name}.jpg`)} alt={props.menuItem.name} />
              <figcaption className="figure-caption">
                {props.menuItem.name}
              </figcaption>
          </figure>
        </div>
    </div>
    </>
  );
};

export default Listing;