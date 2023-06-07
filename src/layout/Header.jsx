import { Flex, Text, HStack, Image, Button } from "@chakra-ui/react";
import "../App.css";
import logo from "../assets/logo_alfa_2.jpg";

const Header = () => {
  return (
    <Flex
      padding={{
        base: "24px 16px",
        lg: "24px 64px",
      }}
      // position="fixed" Bugged
      backgroundColor="blackAlpha.900"
      alignItems="center"
      justifyContent="space-between"
    >
      <Text
        color="white"
        textTransform="uppercase"
        fontFamily="Inter"
        fontWeight="bold"
      >
        <Image
          src={logo}
          alt="Logo"
          width={"50px"}
          height={"50px"}
          borderRadius={"10px"}
        ></Image>
        Alfa Scorpii Batam
      </Text>
      <a href="#mainpage" style={{ color: "white" }}>
        Homepage
      </a>
      <HStack
        display={{ base: "none", lg: "initial" }}
        color="white"
        spacing={"30px"}
        gap={"30px"}
      >
        <div>Motor Type:</div>
        <a href="#maxi">
          <Button marginRight="20px" colorScheme="messenger">
            MAXI
          </Button>
        </a>
        <a href="#classy">
          <Button marginRight="20px" colorScheme="messenger">
            Classy
          </Button>
        </a>
        <a href="#matic">
          <Button marginRight="20px" colorScheme="messenger">
            Matic
          </Button>
        </a>
        <a href="#sport">
          <Button marginRight="20px" colorScheme="messenger">
            Sport
          </Button>
        </a>
        <a href="#moped">
          <Button marginRight="20px" colorScheme="messenger">
            Moped
          </Button>
        </a>
        <a href="https://api.whatsapp.com/send?phone=6281278732817&text=Saya tertarik dan ingin bertanya">
          Order
        </a>
      </HStack>
    </Flex>
  );
};

export default Header;
