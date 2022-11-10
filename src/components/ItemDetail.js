import ItemCount from "./ItemCount";

const ItemDetail = ({ item }) => {

  const onAdd=(quantity)=>{
    alert("Agregaste " + quantity + " productos al carrito!");
  }

  return (
    <>
      <div className="card mb-3 card-detail">
        <img src={item.imagen}className="card-img-top card-img-top-detail" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{item.nombre}</h5>
          <p className="card-text">
            {item.descripcion}
          </p>
          <p className="card-text">
            <small className="text-muted">${item.precio}</small>
          </p>
          <ItemCount stock={item.stock} initial={1} onAdd={onAdd}/>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;