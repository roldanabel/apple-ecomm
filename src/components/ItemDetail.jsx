import {
  Center,
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  CardFooter,
  Divider,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ItemCount from "./ItemCount";

import { useEffect, useState } from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore";

const ItemDetail = ({ phones }) => {
  const { id } = useParams();

  const [producto, setProducto] = useState([]);

  useEffect(() => {
    const db = getFirestore();

    const phoneRef = doc(db, "telefonos", `${id}`);

    getDoc(phoneRef).then((snapshot) => {
      if (snapshot.exists()) {
        setProducto(snapshot.data());
      } else {
        console.log("No such document!");
      }
    });
  }, []);

  const phoneFilter = phones.filter((phone) => phone.id == id);

  return (
    <>
      {phoneFilter.map((phone) => (
        <div key={phone.id}>
          <Center p="1rem">
            <Card className="card-main">
              <CardBody>
                <Image borderRadius="lg" src={phone.image} />
                <Stack mt="6" spacing="3">
                  <Heading size="md">{phone.name}</Heading>
                  <Text color="blue.800" fontSize="l">
                    Descripción: {phone.description}
                  </Text>
                  <Text color="blue.800" fontSize="l">
                    Categoría: {phone.category}
                  </Text>
                  <Text color="red.600" fontSize="xl">
                    Stock: {phone.stock}
                  </Text>
                  <Text color="green.600" fontSize="xl">
                    Precio: U$D {phone.price}
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter className="card-footer">
                <ItemCount
                  stock={phone.stock}
                  id={phone.id}
                  price={phone.price}
                  name={phone.name}
                />
              </CardFooter>
            </Card>
          </Center>
        </div>
      ))}
    </>
  );
};

export default ItemDetail;
