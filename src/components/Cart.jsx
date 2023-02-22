import {
    FormControl,
    FormLabel,
    Input,
    FormHelperText,
    Button,
    Container,
    Box,
    Flex,
    Textarea,
  } from "@chakra-ui/react";
  import React from "react";
  
  const Cart = () => {
    return (
      <Container className="cart-container">
        <FormControl>
          <Box>
            <FormLabel>Nombre</FormLabel>
            <Input type="text" />
            <FormLabel>Email</FormLabel>
            <Input type="email" />
            <FormHelperText>Nunca compartiremos su email.</FormHelperText>
          </Box>
          <FormLabel>Que le interesa?</FormLabel>
          <Textarea></Textarea>
          <Box className="btn-send">
            <Button colorScheme="teal" variant="outline">
              enviar información
            </Button>
          </Box>
        </FormControl>
      </Container>
    );
  };
  
  export default Cart;
  