import { useContext, useState } from "react";
import {
  Text,
  ButtonGroup,
  IconButton,
  Tooltip,
  Center,
  Button,
} from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { CartContext } from "../context/CartContext";

const ItemCount = ({ stock, id, price, name }) => {
  const [cart, setCart] = useContext(CartContext);
  const [count, setCount] = useState(1);

  const addCant = () => {
    setCount(count + 1);
  };

  const substractCant = () => {
    setCount(count - 1);
  };

  const addToCart = () => {
    setCart((currItems) => {
      const isItemFound = currItems.find((item) => item.id === id);
      if (isItemFound) {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + count };
          } else {
            return item;
          }
        });
      } else {
        return [...currItems, { id, quantity: count, price, name }];
      }
    });
  };

  return (
    <>
      <ButtonGroup size="sm" isAttached variant="outline">
        {count < 1 ? (
          <Tooltip label="stock mínimo alcanzado" placement="bottom">
            <IconButton icon={<MinusIcon />} isDisabled />
          </Tooltip>
        ) : (
          <IconButton icon={<MinusIcon />} onClick={substractCant} />
        )}
        <Center>
          <Button
            onClick={() => addToCart()}
            variant="solid"
            colorScheme="blue"
          >
            Añadir al carrito: {count}
          </Button>
        </Center>
        {count < stock ? (
          <IconButton icon={<AddIcon />} onClick={addCant} />
        ) : (
          <Tooltip label="stock máximo alcanzado" placement="bottom">
            <IconButton icon={<AddIcon />} isDisabled />
          </Tooltip>
        )}
      </ButtonGroup>
    </>
  );
};

export default ItemCount;
