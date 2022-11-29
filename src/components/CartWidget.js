import { useContext } from "react";
import { CartContext } from "./CartContext";

const CartWidget = () => {
  const {totalProducts}=useContext(CartContext);
  return (
    <>
      <button type="button" className="btn btn-primary position-relative">

        <i className="fa-solid fa-cart-shopping"></i>
        
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {totalProducts() || ''}
        </span>
      
      </button>
    </>
  );
};

export default CartWidget;
