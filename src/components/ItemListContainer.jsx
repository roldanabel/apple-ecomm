import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore } from "firebase/firestore";

const ItemListContainer = () => {
  const [phones, setPhones] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const phonesCollection = collection(db, "telefonos");
    getDocs(phonesCollection).then((querySnapshot) => {
      const phones = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setPhones(phones);
    });
  }, []);

  const catFilter = phones.filter((phone) => phone.category === category);

  return (
    <div>
      {category ? <ItemList phones={catFilter} /> : <ItemList phones={phones} />}
    </div>
  );
};

export default ItemListContainer;
