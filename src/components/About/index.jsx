import { Box, Container, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import "../../App.css";
import botania from "../../assets/Botania.jpg";
import bengkong from "../../assets/Bengkong.jpg";
import btmcentre from "../../assets/BtmCentre.jpg";
import batubesar from "../../assets/BatuBesar.jpeg";

const About = () => {
  return (
    <div id="about">
      <Box backgroundColor="gray.400">
        <Container
          maxW={{ lg: "container.lg", base: "container.sm" }}
          py={{ lg: "50px", base: "30px" }}
        >
          <Text fontSize="3xl" fontWeight="bold">
            Lokasi:
          </Text>
          <Grid
            // gridTemplateColumns={{
            //   lg: "repeat(4, 1fr)",
            //   base: "repeat(2, 1fr)",
            // }}
            gap={"50px"}
            textAlign={"center"}
          >
            {/* <GridItem>
              <Image src={botania} alt="Botania" width={'200px'} height={'200px'}></Image>
              <Text fontSize="md">
                Komplek Ruko Marbella 2 blok D6 no. 1,2 & 3 - BATAM
              </Text>
              <br/>
              <Text fontSize="md">081278732817 </Text><Text>(Bagus Dwi Putra)</Text>
            </GridItem>
            <GridItem>
              <Image src={bengkong} alt="Bengkong" width={'200px'} height={'200px'}></Image>
              <Text fontSize="md">
              Komplek Green Town Blok Q No. 1-3 & Komplek Sari Ruci Blok B NO. 7-9 - BATAM
              </Text>
              <br/>
              <Text fontSize="md">081278732817 </Text><Text>(Bagus Dwi Putra)</Text>
            </GridItem> */}
            <GridItem>
              <Grid gridTemplateColumns={"1fr 1fr"}>
                <GridItem>
                  <Image
                    src={btmcentre}
                    alt="Batam Centre"
                    width={"200px"}
                    height={"200px"}
                  ></Image>
                </GridItem>
                <GridItem>
                  <Text fontSize="md">
                    Komplek Mahkota Raya A. 1-3A - BATAM
                  </Text>
                  <br />
                  <Text fontSize="md">081278732817 </Text>
                  <Text>(Bagus Dwi Putra)</Text>
                </GridItem>
              </Grid>
            </GridItem>
            {/* <GridItem>
              <Image src={batubesar} alt="Batu Besar" width={'200px'} height={'200px'}></Image>
              <Text fontSize="md">
              Komplek Putra Mandiri Blok A NO 6-7 - BATAM
              </Text>
              <br/>
              <Text fontSize="md">081278732817 </Text><Text>(Bagus Dwi Putra)</Text>
            </GridItem> */}
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default About;
