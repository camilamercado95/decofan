import { useEffect, useState } from "react";

const ItemCount = ({initial,stock,onAdd}) => {

    const[count,setCount]=useState(parseInt(initial));

    const decrease=()=>{
        setCount(count-1);
    }

    const increase=()=>{
        setCount(count+1);
    }

    useEffect(()=>{
        setCount(parseInt(initial));
    }, [initial])


  return (
    <>
      <div className="counter">
        <button disabled={count<=1} onClick={decrease} className="counter__button">-</button>
        <span className="counter__span">{count}</span>
        <button disabled={count >=stock} onClick={increase} className="counter__button">+</button>
        <div>
          <button disabled={stock<=0} onClick={() =>onAdd(count)} className="counter__agregar">Agregar al carrito</button>
        </div>
      </div>
    </>
  );
};

export default ItemCount;
