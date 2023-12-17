import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatform from "../hooks/usePlatform";
import useSinglePlatform from "../hooks/useSinglePlatform";
interface Props {
  onSelectPlatform: (platformId: number) => void;
  selectedPlatformId?: number;
}
const PlatformSelector = ({ onSelectPlatform, selectedPlatformId }: Props) => {
  const { data, error } = usePlatform();
  const platform = useSinglePlatform(selectedPlatformId);

  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {platform ? platform.name : "Platform"}
      </MenuButton>
      <MenuList>
        {data?.results.map((d) => (
          <MenuItem key={d.id} onClick={() => onSelectPlatform(d.id)}>
            {d.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
