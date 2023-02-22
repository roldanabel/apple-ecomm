import { Heading, Center, Box, Image } from "@chakra-ui/react";

const Welcome = () => {
  return (
    <div className="welcome-container">
      <Center>
        <Box boxSize="xxl">
          <Image
            src="https://cdn.shopify.com/s/files/1/0604/8373/1606/products/IMG-7380043_823x.jpg?v=1673373173"
            alt="iphone"
          />
        </Box>
      </Center>
    </div>
  );
};

export default Welcome;
