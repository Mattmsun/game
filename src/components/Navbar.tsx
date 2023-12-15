import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/game_logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
interface Props {
  onSearch: (searchText: string) => void;
}
const Navbar = ({ onSearch }: Props) => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px" margin="5px" />
      <SearchInput onSearch={(searchText) => onSearch(searchText)} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
