// import Muka from "../assets/Muka.jpeg";
import "../App.css";

const {
  Box,
  Text,
  Flex,
  Container,
  Image,
  VStack,
} = require("@chakra-ui/react");

const Description = () => {
  return (
    <div id="description">
      <Box backgroundColor="lightgray"
      borderRadius={"50px"}>
        <Container
          maxW={{ lg: "container.lg", base: "container.sm" }}
          py={{ lg: "32", base: "14" }}
        >
          <Flex color="black" direction="row" justifyContent="start">
            <VStack textAlign={"center"}>
              <Text
                maxWidth={{ base: "410px", md: "756px" }}
                textTransform="uppercase"
                fontSize={{ sm: "sm", md: "md", lg: "xl", xl: "4xl" }}
                fontWeight="bold"
                lineHeight="1.25"
                mt="20px"
                paddingRight={{ sm: "5px", md: "10px", lg: "15px", xl: "20px" }}
              >
                Descripsi perusahaan
              </Text>
              <Text
                maxWidth={{ base: "410px", md: "756px" }}
                textTransform="uppercase"
                fontSize={{ sm: "sm", md: "md", lg: "lg", xl: "xl" }}
                fontWeight="normal"
                lineHeight="1.25"
                mt="20px"
                color="red"
                paddingRight={{ sm: "5px", md: "10px", lg: "15px", xl: "20px" }}
              >
                VLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Text>
            </VStack>

            <Image
              // src={Muka}
              alt="Owner"
              height="200px"
              width="200px"
              borderRadius={"20px"}
            />
          </Flex>
        </Container>
      </Box>
    </div>
  );
};

export default Description;
