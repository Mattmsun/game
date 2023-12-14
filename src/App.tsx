import { Grid, GridItem, Button, ButtonGroup, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
      >
        <GridItem area="nav">
          <Navbar />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" bg="gold">
            Aside
          </GridItem>
        </Show>
        <GridItem area="main" bg="dodgerblue">
          Main
        </GridItem>
      </Grid>
      <Button colorScheme="blue">Button</Button>
    </>
  );
}

export default App;
