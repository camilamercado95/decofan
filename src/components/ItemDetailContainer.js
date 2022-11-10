import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import { customFetch } from "../utils/customFetch";
import { data } from "../utils/data";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {

  const[dato,setDato]=useState({});
  const{idItem} = useParams();
        
    useEffect(()=>{
        customFetch(2000,data.find(item=>item.id==idItem))
            .then((response)=>setDato(response))
            .catch((err)=>console.log(err));
    },[idItem]);

  return (
    <>
      <ItemDetail item={dato}/>
    </>
  );
};

export default ItemDetailContainer;