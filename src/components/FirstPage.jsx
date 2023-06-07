import { Box, Button, Stack, Text, Image, HStack, VStack } from "@chakra-ui/react";
import bg from "../assets/bg.png";
import "../App.css";

const FirstPage = () => {
  return (
    <div id="mainpage">
      <Box
        height={{ lg: "80vh", md: "55vh" }}
        position="relative"
        display="flex"
        paddingX={{ lg: "64px", md: "16px" }}
      >
        {/* <Box  /> */}
        <HStack alignSelf={"left"} spacing={{ sm: 2, md: 3, lg: 4 }}>
          <Image
            src={bg}
            alt="toko"
            width={{ sm: "25%", md: '30%', lg: "50%" }}
            height="60%"
          />

          <Stack alignSelf="center" textAlign={"center"} spacing={{ sm: 2, md: 3, lg: 4 }}>
            <Text
              position="relative"
              color="black"
              fontSize={{ sm: 'l', lg: "2xl", md: "xl" }}
              lineHeight={{ md: "1" }}
              fontFamily="Inter"
              fontWeight="bold"
            >
              Authorized Yamaha Dealer
            </Text>
            <Text
              position="relative"
              color="black"
              fontSize={{ lg: "8xl", md: "6xl" }}
              lineHeight={{ md: "1" }}
              fontFamily="Inter"
              fontWeight="bold"
            >
              PT. ALFA SCORPII
            </Text>
            <VStack textAlign={"left"}>
            <Text
              // position="relative"
              color="black"
              fontSize={{ lg: "lg", md: "sm" }}
              fontFamily="Inter"
              fontWeight="medium"
            >
              Contact Information:
            </Text>
            <Text><a href="http://wa.me/+6281278732817">0812-7873-2817 (Bagus)</a></Text>
            <Text><a href="http://wa.me/+6282284257160">0822-8425-7160 (Danny)</a></Text>
            </VStack>
            <Button
              onClick={() =>
                window.open("https://goo.gl/maps/WvokCmzr3GYHRkSu9")
              }
              alignSelf="start"
              colorScheme="blackAlpha"
            >
              Visit Us
            </Button>
          </Stack>
        </HStack>
      </Box>
    </div>
  );
};

export default FirstPage;
