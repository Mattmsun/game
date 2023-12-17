import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid, { pageSize } from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";

import PlatformSelector from "./components/PlatformSelector";
import SortSelector, { Ordering } from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

export interface GameQuery {
  genreId?: number;
  platformId?: number;
  ordering: Ordering | null;
  searchText: string;
  page_size: number;
}
function App() {
  const [gameQuery, setGameQuery] = useState({
    page_size: pageSize,
  } as GameQuery);
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <GridItem area="nav">
          <Navbar
            onSearch={(searchText) =>
              setGameQuery({ ...gameQuery, searchText })
            }
          />
        </GridItem>

        <Show above="lg">
          <GridItem area="aside" paddingX={5}>
            <GenreList
              selectedGenreId={gameQuery.genreId}
              onSelectGenre={(genreId) =>
                setGameQuery({ ...gameQuery, genreId })
              }
            />
          </GridItem>
        </Show>
        <GridItem area="main">
          <Box paddingLeft={2}>
            <GameHeading gameQuery={gameQuery} />
            <HStack spacing={5} marginBottom={4}>
              <PlatformSelector
                onSelectPlatform={(platformId) =>
                  setGameQuery({ ...gameQuery, platformId })
                }
                selectedPlatformId={gameQuery.platformId}
              />
              <SortSelector
                ordering={gameQuery.ordering}
                onSelectOrder={(ordering) =>
                  setGameQuery({ ...gameQuery, ordering })
                }
              />
            </HStack>
          </Box>
          <GameGrid gameQuery={gameQuery} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
