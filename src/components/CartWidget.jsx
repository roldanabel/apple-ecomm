import { Icon } from '@iconify/react';

import { Button } from "@chakra-ui/react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartWidget = () => {
  const [cart, setCart] = useContext(CartContext);

  const quantity = cart.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);

  return (
    <>
      <div className="cart">
        <Button size="lg" variant="outline" colorScheme="orange">
        <div><Icon icon="material-symbols:shopping-cart-outline" /></div>
          <span>{quantity}</span>
        </Button>
      </div>
    </>
  );
};

export default CartWidget;
