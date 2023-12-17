import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useSingleGenre from "../hooks/useSingleGenre";
import useSinglePlatform from "../hooks/useSinglePlatform";
interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const genre = useSingleGenre(gameQuery.genreId);
  const platform = useSinglePlatform(gameQuery.platformId);

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return (
    <Heading marginY={5} fontSize="5xl" as="h1">
      {heading}
    </Heading>
  );
};

export default GameHeading;
