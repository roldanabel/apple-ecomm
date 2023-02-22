import {
    Center,
    Card,
    CardBody,
    Image,
    Stack,
    Heading,
    Text,
    Button,
    CardFooter,
    Divider,
  } from "@chakra-ui/react";
  import bikeImage from "../assets/iphone.jpg";
  import { useParams } from "react-router-dom";
  import ItemCount from "./ItemCount";
  
  const ItemDetail = ({ bikes }) => {
    const { id } = useParams();
  
    const bikeFilter = bikes.filter((bike) => bike.id == id);
    return (
      <>
        {bikeFilter.map((bike) => (
          <div key={bike.id}>
            <Center p="1rem">
              <Card className="card-main">
                <CardBody>
                  <Image borderRadius="lg" src={bikeImage} />
                  <Stack mt="6" spacing="3">
                    <Heading size="md">{bike.name}</Heading>
                    <Text color="blue.800" fontSize="l">
                      Descripción: {bike.description}
                    </Text>
                    <Text color="blue.800" fontSize="l">
                      Categoría: {bike.category}
                    </Text>
                    <Text color="red.600" fontSize="xl">
                      Stock: {bike.stock}
                    </Text>
                    <Text color="green.600" fontSize="xl">
                      Precio: U$D {bike.price}
                    </Text>
                  </Stack>
                </CardBody>
                <Divider />
                <CardFooter className="card-footer">
                  <ItemCount stock={bike.stock} />
                  <Center className="btn-center">
                    <Button variant="solid" colorScheme="blue">
                      Comprar
                    </Button>
                  </Center>
                </CardFooter>
              </Card>
            </Center>
          </div>
        ))}
      </>
    );
  };
  
  export default ItemDetail;
  