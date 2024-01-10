import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";

import { BsChevronDown } from "react-icons/bs";
import useGameQueryStore from "../store";
export type Ordering = {
  value: string;
  label: string;
};

const SortSelector = () => {
  const sortOrder = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date Added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release Date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average Rating" },
  ];

  const ordering = useGameQueryStore((s) => s.gameQuery.ordering);
  const setSortOrder = useGameQueryStore((s) => s.setSortOrder);
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
            onClick={() => setSortOrder(o)}
          >
            {o.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
