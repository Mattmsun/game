import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";

import { BsChevronDown } from "react-icons/bs";
export type Ordering = {
  value: string;
  label: string;
};
interface Props {
  ordering: Ordering | null;
  onSelectOrder: (ordering: Ordering) => void;
}
const SortSelector = ({ ordering, onSelectOrder }: Props) => {
  const sortOrder = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date Added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release Date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average Rating" },
  ];
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {ordering?.label ? ordering.label : "Sort by Relevance"}
      </MenuButton>
      <MenuList>
        {sortOrder.map((o) => (
          <MenuItem
            key={o.value}
            value={o.value}
            onClick={() => onSelectOrder(o)}
          >
            {o.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
