import { Logo } from "@/assets/InstaCodeLogo";
import { Box, HStack, Spacer, Text, chakra } from "@chakra-ui/react";
import { NavLink } from "./NavLink";

const Svg = chakra("svg");

const NavigationBar = () => {
  return (
    <Box position="relative" bg="white" color="white" overflow="hidden">
      <Box py={1} textAlign="center">
        <HStack>
          <Logo boxSize={200} color="black" />
          <Spacer />
          <NavLink gap={10} to="/">
            Strona Główna
          </NavLink>
          <NavLink mx={50} to="/">
            O nas
          </NavLink>
          <NavLink to="/">Konakt</NavLink>
        </HStack>
        <Text fontSize="4xl" fontWeight="bold" color={"black"} mt={4}>
          Technologia, która wspiera Twój biznes.
        </Text>
        <Text fontSize="xl" mt={4} color={"gray.600"} mb={4}>
          Innowacja zakodowana w każdej linii.
        </Text>
      </Box>

      <Svg
        width="100%"
        height="200px"
        viewBox="0 0 1200 320"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#0099ff"
          fill-opacity="0.3"
          d="M0,256L0,224L36.9,224L36.9,96L73.8,96L73.8,0L110.8,0L110.8,64L147.7,64L147.7,64L184.6,64L184.6,224L221.5,224L221.5,192L258.5,192L258.5,192L295.4,192L295.4,224L332.3,224L332.3,288L369.2,288L369.2,288L406.2,288L406.2,192L443.1,192L443.1,288L480,288L480,96L516.9,96L516.9,256L553.8,256L553.8,64L590.8,64L590.8,128L627.7,128L627.7,192L664.6,192L664.6,32L701.5,32L701.5,288L738.5,288L738.5,256L775.4,256L775.4,224L812.3,224L812.3,160L849.2,160L849.2,256L886.2,256L886.2,0L923.1,0L923.1,192L960,192L960,32L996.9,32L996.9,256L1033.8,256L1033.8,224L1070.8,224L1070.8,96L1107.7,96L1107.7,160L1144.6,160L1144.6,128L1181.5,128L1181.5,96L1218.5,96L1218.5,224L1255.4,224L1255.4,224L1292.3,224L1292.3,96L1329.2,96L1329.2,96L1366.2,96L1366.2,320L1403.1,320L1403.1,32L1440,32L1440,0L1403.1,0L1403.1,0L1366.2,0L1366.2,0L1329.2,0L1329.2,0L1292.3,0L1292.3,0L1255.4,0L1255.4,0L1218.5,0L1218.5,0L1181.5,0L1181.5,0L1144.6,0L1144.6,0L1107.7,0L1107.7,0L1070.8,0L1070.8,0L1033.8,0L1033.8,0L996.9,0L996.9,0L960,0L960,0L923.1,0L923.1,0L886.2,0L886.2,0L849.2,0L849.2,0L812.3,0L812.3,0L775.4,0L775.4,0L738.5,0L738.5,0L701.5,0L701.5,0L664.6,0L664.6,0L627.7,0L627.7,0L590.8,0L590.8,0L553.8,0L553.8,0L516.9,0L516.9,0L480,0L480,0L443.1,0L443.1,0L406.2,0L406.2,0L369.2,0L369.2,0L332.3,0L332.3,0L295.4,0L295.4,0L258.5,0L258.5,0L221.5,0L221.5,0L184.6,0L184.6,0L147.7,0L147.7,0L110.8,0L110.8,0L73.8,0L73.8,0L36.9,0L36.9,0L0,0L0,0Z"
        ></path>
      </Svg>
    </Box>
  );
};

export default NavigationBar;
