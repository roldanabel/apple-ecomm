import ItemDetail from "./ItemDetail";
import { useState, useEffect } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const db = getFirestore();
    const phonesCollection = collection(db, "telefonos");
    getDocs(phonesCollection).then((querySnapshot) => {
      const phones = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setData(phones);
    });
  }, []);

  return <ItemDetail phones={data} />;
};

export default ItemDetailContainer;
