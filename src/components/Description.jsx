// import Muka from "../assets/Muka.jpeg";
import "../App.css";

const {
  Box,
  Text,
  VStack,
} = require("@chakra-ui/react");

const Description = () => {
  return (
    <div id="description">
      <Box backgroundColor="lightgray" borderRadius={"50px"}>
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
                Deskripsi perusahaan
              </Text>
              <Text
                // maxWidth={{ base: "410px", md: "756px" }}
                fontSize={{ sm: "sm", md: "md", lg: "lg", xl: "xl" }}
                fontWeight="normal"
                lineHeight="1.25"
                mt="20px"
                color="black"
                paddingRight={{ sm: "5px", md: "10px", lg: "15px", xl: "20px" }}
                px={{ lg: "50px", base: "30px" }}
                paddingBottom={{ lg: "50px", base: "30px" }}
              >
                PT Alfa Scorpii adalah perusahaan motor dealer yang beroperasi
                dengan sukses di industri otomotif. Sebagai salah satu dealer
                terkemuka di wilayah ini, kami menyediakan beragam pilihan
                kendaraan bermotor berkualitas tinggi kepada pelanggan kami.
                Dengan pengalaman bertahun-tahun dalam industri ini, PT Alfa
                Scorpii telah membangun reputasi yang kuat sebagai mitra
                tepercaya bagi para konsumen yang mencari kendaraan bermotor
                terbaik. Dengan jaringan luas dari merek-merek terkemuka, kami
                menawarkan berbagai pilihan motor baru dan bekas yang memenuhi
                kebutuhan dan preferensi setiap pelanggan. Dengan komitmen kami
                terhadap kepuasan pelanggan, layanan pelanggan yang unggul, dan
                pengetahuan mendalam tentang produk yang kami tawarkan, PT Alfa
                Scorpii terus berusaha memberikan pengalaman belanja yang luar
                biasa dan memuaskan kepada setiap pelanggan.
              </Text>
            </VStack>
      </Box>
    </div>
  );
};

export default Description;
