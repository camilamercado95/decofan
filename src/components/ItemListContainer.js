import { useEffect } from "react";
import { useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore, query, where} from "firebase/firestore";

const ItemListContainer = (props) => {
  const [datos, setDatos] = useState([]);
  const { idCategory } = useParams();

  useEffect(() => {
    const querydb=getFirestore();
    const queryCollection=collection(querydb,"productos");
    if(idCategory){
      const queryFilter = query(queryCollection, where("categoryId","==", idCategory))
      getDocs(queryFilter)
      .then(res=>setDatos(res.docs.map(producto => ({ id: producto.id, ...producto.data() }) ) ))
      }else{
        getDocs(queryCollection)
        .then(res=>setDatos(res.docs.map(producto => ({ id: producto.id, ...producto.data() }) ) ))
      }
  }, [idCategory]);

  return (
    <>
      <ItemList items={datos} />
    </>
  );
};

export default ItemListContainer;
