import { FaRegGrinStars } from "react-icons/fa";
import { HStack } from "@chakra-ui/react";
interface Props {
  rating: number;
}
const Emoji = ({ rating }: Props) => {
  return (
    <HStack>
      {Array(rating)
        .fill(<FaRegGrinStars color="skyblue" size="20px" />)
        .map((s) => s)}
    </HStack>
  );
};

export default Emoji;
