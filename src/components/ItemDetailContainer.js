import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import {getFirestore, doc, getDoc} from "firebase/firestore";

const ItemDetailContainer = () => {

  const[dato,setDato]=useState({});
  const{idItem} = useParams();
        
    useEffect(()=>{
        const querydb=getFirestore();
        const queryDoc=doc(querydb,"productos",idItem);
        getDoc(queryDoc)
        .then(res=> setDato({id: res.id, ...res.data()}))
    },[idItem]);

  return (
    <>
      <ItemDetail item={dato}/>
    </>
  );
};

export default ItemDetailContainer;