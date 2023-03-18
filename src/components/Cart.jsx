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


const Cart = () => {
  const [cart, setCart, removeItem, clear, getTotal] = useContext(CartContext);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  
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
                  onClick={()=>clear(item.id)}
                >
                  Vaciar Carrito
            </Button>    
            <Text>Total General: U$D {getTotal()}</Text>        
            </Card>
          </Container>
        );
      })}
      <SendOrder />
            
        </div>
      }
    </div>
      
    </>
  );
};

export default Cart;
