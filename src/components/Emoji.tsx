import { FaRegGrinStars } from "react-icons/fa";
import { HStack } from "@chakra-ui/react";
import React from "react";
interface Props {
  rating: number;
}
const Emoji = ({ rating }: Props) => {
  return (
    <HStack>
      {Array(rating)
        .fill(<FaRegGrinStars color="skyblue" size="20px" />)
        .map((s, index) => (
          <React.Fragment key={index}>{s}</React.Fragment>
        ))}
    </HStack>
  );
};

export default Emoji;
