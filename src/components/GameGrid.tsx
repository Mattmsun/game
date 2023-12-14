import { Text } from "@chakra-ui/react";
import useGame from "../hooks/useGame";

const GameGrid = () => {
  const { games, error } = useGame();
  return (
    <>
      {error && <Text>{error} </Text>}
      <ul>
        {games.map((g) => (
          <li key={g.id}>{g.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
