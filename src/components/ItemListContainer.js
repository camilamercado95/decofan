import { useEffect } from "react";
import { useState } from "react"
import { customFetch } from "../utils/customFetch";
import { data } from "../utils/data";
import ItemList from "./ItemList";
import ItemCount from "./ItemCount";
import { useParams } from "react-router-dom";

const ItemListContainer = (props) => {

  const[datos,setDatos]=useState([]);
  const {idCategory}=useParams();
        
    useEffect(()=>{
      if(idCategory===undefined){
        customFetch(2000,data)
        .then((response)=>setDatos(response))
        .catch((err)=>console.log(err));

      }else{
        customFetch(2000,data.filter(item=>item.categoryId===idCategory))
        .then((response)=>setDatos(response))
        .catch((err)=>console.log(err));
      }
    },[idCategory]);

  const onAdd=(quantity)=>{
    alert("Seleccionaste " + quantity + " items.");
  }

  return (
    <>
      <div className="msg">{props.text}</div>
      <ItemList items={datos}/>
    </>
  );
};

export default ItemListContainer;
