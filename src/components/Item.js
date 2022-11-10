import { Link } from "react-router-dom";

const Item = ({ id, imagen, nombre, precio }) => {
  return (
    <> 
      <div className="col">
        <div className="card">
          <img className="card-img-top" src={imagen} alt="" />
          <div className="card-body">
            <h5 className="card-title">{nombre}</h5>
            <p className="card-text">${precio}</p>
            <Link to={`/item/${id}`} className="card-ver">Ver producto</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Item;
