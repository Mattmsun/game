import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/game_logo.webp";
const Navbar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize="60px" margin="5px" />
      <Text>NavBar</Text>
    </HStack>
  );
};

export default Navbar;
