import {
  Container,
  Heading,
  Stack,
  Input,
  Button,
  Text,
  Center,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";

import {  useState } from "react";


const SendOrder = ({createOrder}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "" || email === "") {
      alert("No pueden existir campos vacios");
    } else {
    createOrder(name,email)
    }
  };
  return (
    <div>
      <Center>
        <Heading>Envío de ordenes</Heading>
      </Center>
      <Container>
        <FormControl>
          <form onSubmit={handleSubmit}>
            <FormLabel>Nombre *</FormLabel>
            <Input size="lg" onChange={(e) => setName(e.target.value)} />
            <FormLabel>E-mail *</FormLabel>
            <Input size="lg" onChange={(e) => setEmail(e.target.value)} />
            <Button colorScheme="blue" type="submit" m={5}>
              Enviar Orden
            </Button>
          </form>
        </FormControl>
      </Container>
      
      
      
    </div>
  );
};

export default SendOrder;