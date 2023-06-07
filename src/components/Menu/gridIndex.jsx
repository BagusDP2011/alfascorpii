import {
  Container,
  Grid,
  GridItem,
  Text,
  Image,
} from "@chakra-ui/react";
import NmaxS from "../../assets/Nmax 155 standard.png";
import NmaxCon from "../../assets/Nmax 155 Connected.png";
import NmaxConABS from "../../assets/Nmax 155 Connected ABS.png";
import flux from "../../assets/Fazzio Lux.png";
import fneo from "../../assets/Fazzio Neo.png";
import gflux from "../../assets/Grand Filano Lux.png";
import gfneo from "../../assets/Grand Filano Neo.png";
import mfg from "../../assets/Matic Fino Grande.png";
import mfp from "../../assets/Matic Fino Premium.png";
import mfs from "../../assets/Matic Fino Sporty.png";
import mfrg from "../../assets/Matic FreeGo 125.png";
import mmm3 from "../../assets/Matic Mio M3.png";
import mxr from "../../assets/Matic Xride 125.png";
import sr15a from "../../assets/Sport R15M ABS.png";
import sr15c from "../../assets/Sport R15M Connected.png";
import sxsr155 from "../../assets/Sport XSR 155m.png";
import mjz1 from "../../assets/Moped Jupiter Z1.png";
import mmxk from "../../assets/Moped MX King 150.png";
import mvega from "../../assets/Moped Vega Force.png";

import React from "react";


const Collection = () => {
  return (
    <div id="collection">
      <Container
        maxW={{ lg: "container.lg", base: "container.sm" }}
        py={{ lg: "32", base: "14" }}
      >
        <Text
          fontSize="3xl"
          fontWeight="extrabold"
          textTransform="uppercase"
        >
          Koleksi YAMAHA
        </Text>
        <div id="maxi">
        <Text
          paddingTop={"20px"}
          mb={{ lg: "10", base: "4" }}
          fontSize="3xl"
          fontWeight="extrabold"
          textTransform="uppercase"
        >
          MAXI
        </Text>
        <Grid
          gridTemplateColumns={{ sm: "repeat(2, 1fr)", md: "repeat(4, 1fr)", lg: "repeat(4, 1fr)" }}
          rowGap="4"
          columnGap={{ sm: "0", md: "2", lg: "5" }}
          width="100%"
          maxWidth="100%"
          justifyItems={"center"}
          textAlign={"center"}
        >
          <GridItem>
            <Image src={NmaxS} alt="MAXI NMax 155 Standard"/>
            <Text fontWeight={"semibold"}>NMax 155 Standard</Text>
            <Text>Harga Mulai Dari: </Text>
            <Text>Rp. 32.184.000 </Text>
         </GridItem>
          <GridItem>
            <Image src={NmaxCon} alt="MAXI NMax 155 Connected"/>
            <Text fontWeight={"semibold"}>NMax 155 Connected</Text>
            <Text>Harga Mulai Dari: </Text>
            <Text>Rp. 33.449.000 </Text>
         </GridItem>
          <GridItem>
            <Image src={NmaxConABS} alt="MAXI NMax 155 Connected ABS"/>
            <Text fontWeight={"semibold"}>NMax 155 Connected ABS</Text>
            <Text>Harga Mulai Dari: </Text>
            <Text>Rp. 36.494.000 </Text>
         </GridItem>
        </Grid>
        </div>
        <div id="classy">

        <Text
          paddingTop={"50px"}
          mb={{ lg: "10", base: "4" }}
          fontSize="3xl"
          fontWeight="extrabold"
          textTransform="uppercase"
        >
          Classy
        </Text>
        <Grid
          gridTemplateColumns={{ sm: "repeat(2, 1fr)", md: "repeat(4, 1fr)", lg: "repeat(4, 1fr)" }}
          rowGap="4"
          columnGap={{ sm: "0", md: "2", lg: "5" }}
          width="100%"
          maxWidth="100%"
          justifyItems={"center"}
          textAlign={"center"}
        >
          <GridItem>
            <Image src={gflux} alt="Classy Grand Filano Lux"/>
            <Text fontWeight={"semibold"}>Grand Filano Lux</Text>
            <Text>Harga Mulai Dari: </Text>
            <Text>Rp. 27.200.000 </Text>
         </GridItem>
          <GridItem>
            <Image src={gfneo} alt="Classy Grand Filano Neo"/>
            <Text fontWeight={"semibold"}>Grand Filano Neo</Text>
            <Text>Harga Mulai Dari: </Text>
            <Text>Rp. 26.700.000 </Text>
         </GridItem>
          <GridItem>
            <Image src={flux} alt="Classy Fazzio"/>
            <Text fontWeight={"semibold"}>Fazzio Lux</Text>
            <Text>Harga Mulai Dari: </Text>
            <Text>Rp. 23.327.000 </Text>
         </GridItem>
          <GridItem>
            <Image src={fneo} alt="Classy Fazzio"/>
            <Text fontWeight={"semibold"}>Fazzio Neo</Text>
            <Text>Harga Mulai Dari: </Text>
            <Text>Rp. 22.922.000 </Text>
         </GridItem>
        </Grid>
        </div>
        <div id="matic">
        <Text
          paddingTop={"50px"}
          mb={{ lg: "10", base: "4" }}
          fontSize="3xl"
          fontWeight="extrabold"
          textTransform="uppercase"
        >
          Matic
        </Text>
        <Grid
          gridTemplateColumns={{ sm: "repeat(2, 1fr)", md: "repeat(4, 1fr)", lg: "repeat(4, 1fr)" }}
          rowGap="4"
          columnGap={{ sm: "0", md: "2", lg: "5" }}
          width="100%"
          maxWidth="100%"
          justifyItems={"center"}
          textAlign={"center"}
        >
          <GridItem>
            <Image src={mfg} alt="Matic Fino Grande"/>
            <Text fontWeight={"semibold"}>Fino Grande</Text>
            <Text>Harga Mulai Dari: </Text>
            <Text>Rp. 21.621.500 </Text>
         </GridItem>
          <GridItem>
            <Image src={mfp} alt="Matic Fino Premium"/>
            <Text fontWeight={"semibold"}>Fino Premium</Text>
            <Text>Harga Mulai Dari: </Text>
            <Text>Rp. 20.621.500 </Text>
         </GridItem>
          <GridItem>
            <Image src={mfs} alt="Matic Fino Sporty"/>
            <Text fontWeight={"semibold"}>Fino Sporty</Text>
            <Text>Harga Mulai Dari: </Text>
            <Text>Rp. 20.471.500 </Text>
         </GridItem>
          <GridItem>
            <Image src={mfrg} alt="Matic FreeGo 125"/>
            <Text fontWeight={"semibold"}>FreeGo 125</Text>
            <Text>Harga Mulai Dari: </Text>
            <Text>Rp. 21.541.000 </Text>
         </GridItem>
          <GridItem>
            <Image src={mmm3} alt="Matic Mio M3"/>
            <Text fontWeight={"semibold"}>Mio M3</Text>
            <Text>Harga Mulai Dari: </Text>
            <Text>Rp. 17.481.000 </Text>
         </GridItem>
          <GridItem>
            <Image src={mxr} alt="Matic Xride 125"/>
            <Text fontWeight={"semibold"}>Xride 125</Text>
            <Text>Harga Mulai Dari: </Text>
            <Text>Rp. 18.366.000 </Text>
         </GridItem>
        </Grid>
        </div>
        <div id="sport">

        <Text
          paddingTop={"50px"}
          mb={{ lg: "10", base: "4" }}
          fontSize="3xl"
          fontWeight="extrabold"
          textTransform="uppercase"
        >
          Sport
        </Text>
        <Grid
          gridTemplateColumns={{ sm: "repeat(2, 1fr)", md: "repeat(4, 1fr)", lg: "repeat(4, 1fr)" }}
          rowGap="4"
          columnGap={{ sm: "0", md: "2", lg: "5" }}
          width="100%"
          maxWidth="100%"
          justifyItems={"center"}
          textAlign={"center"}
        >
          <GridItem>
            <Image src={sr15a} alt="Sport R15M ABS"/>
            <Text fontWeight={"semibold"}>Grand Filano Lux</Text>
            <Text>Harga Mulai Dari: </Text>
            <Text>Rp. 45.275.500 </Text>
         </GridItem>
          <GridItem>
            <Image src={sr15c} alt="Sport R15M Connected"/>
            <Text fontWeight={"semibold"}>Grand Filano Neo</Text>
            <Text>Harga Mulai Dari: </Text>
            <Text>Rp. 40.630.000 </Text>
         </GridItem>
          <GridItem>
            <Image src={sxsr155} alt="Sport XSR 155m"/>
            <Text fontWeight={"semibold"}>Fazzio Lux</Text>
            <Text>Harga Mulai Dari: </Text>
            <Text>Rp. 38.215.000 </Text>
         </GridItem>
        </Grid>
        </div>
        <div id="moped">
        <Text
          paddingTop={"50px"}
          mb={{ lg: "10", base: "4" }}
          fontSize="3xl"
          fontWeight="extrabold"
          textTransform="uppercase"
        >
          Moped
        </Text>
        <Grid
          gridTemplateColumns={{ sm: "repeat(2, 1fr)", md: "repeat(4, 1fr)", lg: "repeat(4, 1fr)" }}
          rowGap="4"
          columnGap={{ sm: "0", md: "2", lg: "5" }}
          width="100%"
          maxWidth="100%"
          justifyItems={"center"}
          textAlign={"center"}
        >
          <GridItem>
            <Image src={mjz1} alt="Moped Jupiter Z1"/>
            <Text fontWeight={"semibold"}>Jupiter Z1</Text>
            <Text>Harga Mulai Dari: </Text>
            <Text>Rp. 20.139.000 </Text>
         </GridItem>
          <GridItem>
            <Image src={mmxk} alt="Moped MX King 150"/>
            <Text fontWeight={"semibold"}>MX King 150</Text>
            <Text>Harga Mulai Dari: </Text>
            <Text>Rp. 25.893.000 </Text>
         </GridItem>
          <GridItem>
            <Image src={mvega} alt="Moped Vega Force"/>
            <Text fontWeight={"semibold"}>Vega Force</Text>
            <Text>Harga Mulai Dari: </Text>
            <Text>Rp. 18.584.000 </Text>
         </GridItem>
        </Grid>
        </div>
      </Container>
    </div>
  );
};

export default Collection;
