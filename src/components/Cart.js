import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";
import {
  addDoc,
  collection,
  getFirestore,
  serverTimestamp,
  updateDoc,
  doc,
  increment,
} from "firebase/firestore";

const Cart = () => {
  const { cartList, totalPrice, clear } = useContext(CartContext);

  const { removeItem } = useContext(CartContext);

  const order = {
    buyer: {
      name: "Camila",
      email: "camila@gmail.com",
      phone: "1515151515",
    },
    items: cartList.map((product) => ({
      id: product.idItem,
      title: product.nameItem,
      price: product.costItem,
      quantity: product.quantityItem,
    })),
    total: totalPrice(),
    date: serverTimestamp(),
  };

  const handleClick = () => {
    const db = getFirestore();
    const ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, order).then((response) => {
      alert("Tu orden ha sido creada con el numero: " + response.id);
      cartList.forEach(async (item) => {
        const itemRef = doc(db, "productos", item.idItem);
        await updateDoc(itemRef, {
          stock: increment(-item.quantityItem),
        });
      });
      clear();
    });
  };

  return (
    <>
      <h1 className="h1-carrito">Mi carrito</h1>

      <div className="div-botones">
        <Link to="/" className="link-terminar-seguir">
          Seguir comprando
        </Link>

        <div className="div-botones-eliminar-vacio">
          {cartList.length > 0 ? (
            <button onClick={clear} className="btn-cart">
              Eliminar todos los productos
            </button>
          ) : (
            <p className="p-carritoVacio">Tu carrito esta vacío</p>
          )}
        </div>
      </div>

      <div className="carrito-flex">
        <div className="div-cart">
          {cartList.length > 0 &&
            cartList.map((item) => (
              <div className="card mb-3 card-cart">
                <div className="row g-0">
                  <div className="col-md-4 div-img-card-cart">
                    <img
                      src={item.imgItem}
                      className="img-fluid rounded-start img-card-cart"
                      alt={item.nameItem}
                    />
                  </div>
                  <div className="col-md-8 card-cart-texto">
                    <div className="card-body card-cart-texto-body">
                      <h5 className="card-title">{item.nameItem}</h5>
                      <p className="card-text">
                        {" "}
                        {item.quantityItem} x ${item.costItem}
                      </p>
                      <p className="card-text">
                        Subtotal: ${item.quantityItem * item.costItem}
                      </p>
                    </div>
                    <button
                      className="card-cart-eliminar"
                      onClick={() => removeItem(item.idItem)}
                    >
                      <i className="fa-solid fa-circle-xmark"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>

        <div className="card-totales">
          {cartList.length > 0 ? (
            <div>
              <p className="p-total-carrito">Total: ${totalPrice()}</p>
              <button onClick={handleClick} className="btn-cart">
                Iniciar compra
              </button>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
