import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/game_logo.webp";
import ColorModeSwitch from "./colorModeSwitch";
const Navbar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} boxSize="60px" margin="5px" />

      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
