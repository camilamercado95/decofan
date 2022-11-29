import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider=(props)=>{
    
    //crear un estado local , vacio al entrar a la web
    const [cartList,setCartList]=useState([]);

    //funcion para agregar al carrito
    const addItem=(item,quantity)=>{
        //preguntar si existe
        let found=cartList.find(product=>product.idItem===item.id);

        if(found===undefined){
            setCartList([
                ...cartList,
                {
                    idItem: item.id,
                    imgItem:item.imagen,
                    nameItem:item.nombre,
                    costItem:item.precio,
                    quantityItem: quantity
                }
            ]);
        } else{
            found.quantityItem+=quantity;
        }
    }

    const totalPrice=()=>{
        return cartList.reduce((prev,act)=>prev+act.quantityItem*act.costItem,0)
    }

    const totalProducts=()=>cartList.reduce((acumulador,productoActual)=>acumulador+productoActual.quantityItem,0);

    const clear=()=>setCartList([]);

    const removeItem = (id)=> {
        let result=cartList.filter(item=>item.idItem!==id);
        setCartList(result); 
    }

    return(
        //lo pasas a estado global
        <CartContext.Provider value={{
            cartList, 
            addItem,
            removeItem,
            clear,
            totalPrice,
            totalProducts}}>
            {props.children}
        </CartContext.Provider>
    )
};

export default CartContextProvider;