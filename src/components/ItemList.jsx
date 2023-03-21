import Item from "./Item";
import { Container } from "@chakra-ui/react";
const ItemList = ({ phones }) => {
  return (
    <>
      <Container maxW="container.sm" className="main-catalogue">
        {phones?.map((phone) => (
          <Item
            key={phone.id}
            id={phone.id}
            name={phone.name}
            description={phone.description}
            price={phone.price}
            stock={phone.stock}
            category={phone.category}
          />
        ))}
      </Container>
    </>
  );
};

export default ItemList;
