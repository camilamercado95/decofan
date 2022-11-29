import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";
import ItemCount from "./ItemCount";

const ItemDetail = ({ item }) => {

  const [goToCart, setGoToCart] = useState(false);
  
  //traer la funcion
  const {addItem} = useContext(CartContext);

  const onAdd=(quantity)=>{
    alert("Agregaste "+quantity+" al carrito!")
    
    setGoToCart(true);
    
    //funcion para agregar al carrito:
    addItem(item,quantity);

  }

  return (
    <>
      <div className="card mb-3 card-detail">
        <img src={item.imagen} className="card-img-top card-img-top-detail" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{item.nombre}</h5>
          <p className="card-text">
            {item.descripcion}
          </p>
          
          {item.stock > 0 ? (
            <p className="card-text">Stock : {item.stock}</p>
          ) : (
            <p className="card-text-sinStock">SIN STOCK</p>
          )}
        
          <p className="card-text card-text-precio">
            ${item.precio}
          </p>
          {
            goToCart
            ? <Link to="/cart" className="link-terminar-seguir">Ir al carrito</Link>
            : <ItemCount stock={item.stock} initial={1} onAdd={onAdd}/>
          }
          
        </div>
      </div>
    </>
  );
};

export default ItemDetail;