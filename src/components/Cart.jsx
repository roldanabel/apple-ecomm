import {
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Button,
  Container,
  Box,
  Textarea,
  Center,
  Heading,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
} from "@chakra-ui/react";
import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import SendOrder from "./SendOrder";
import { Link } from "react-router-dom";
import { collection, getFirestore, addDoc } from "firebase/firestore";


const Cart = () => {
  const [cart, setCart, removeItem, clear, getTotal] = useContext(CartContext);
  const [orderId, setOrderId] = useState('');

  const createOrder = (name, email) => {
    
   
      let order = {
        name,
        email,
      };
      const db = getFirestore();
      const ordersCollection = collection(db, "orden");
      addDoc(ordersCollection, order).then(({ id }) => {
        setOrderId(id)
        clear()
      }) ; 
    
  
  };

  
  if(orderId !== ''){
    return(
      <Center>
      <Text as="b" m={3} fontSize="xl">
        Order ID:{" "}
      </Text>
      <Text as="mark" fontSize="2xl">
        {orderId}
      </Text>
      <Text as="b">Gracias por su compra</Text>

    </Center>
    )
  }
  return (
    
   
    <>
    <div>
      {
        !cart.length 
        ?<div>
        <Center bg="#ffffff" h="100px" color="black">
        <Heading as="h2" size="2xl">
          Carrito de compras
        </Heading>
      </Center>
          <h2>Tu carrito esta vacio!</h2>
          <h4>Te invitamos a seguir navegando nuestros productos</h4>
          <Box p="10" w="300px" h="100">
            <Heading size="md">
              <Link to={"/catalogue"}>Seguir navegando</Link>
            </Heading>
          </Box>
        </div>
        :<div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
        <Center bg="#ffffff" h="100px" color="black">
        <Heading as="h2" size="2xl">
          Carrito de compras
        </Heading>
      </Center>
      {cart.map((item) => {
        return (
          <Container key={item.id} className="main-catalogue">
            <Card maxW="sm">
              <CardHeader>
                <Heading size="md">{item.name}</Heading>
              </CardHeader>
              <CardBody>
                <Text as="b">Cantidad: {item.quantity}</Text>
                <Text>Precio: U$D {item.price}</Text>
                <Text>Total Parcial: U$D {item.price * item.quantity}
                </Text>
              </CardBody>
              <CardFooter> 
                <Button
                  colorScheme="red"
                  onClick={()=>removeItem(item.id)}
                >
                  Eliminar producto
                </Button>
              </CardFooter>
            </Card>
            <Card maxW="sm">
            <Button
                  colorScheme="red"
                  onClick={()=>clear()}
                >
                  Vaciar Carrito
            </Button>    
            <Text>Total General: U$D {getTotal()}</Text>        
            </Card>
          </Container>
        );
      })}
            
            <SendOrder createOrder={createOrder}/>
        </div>
      }
    </div>
      
    </>
  );
};

export default Cart;