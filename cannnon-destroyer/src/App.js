import {
  Box,
  Center,
  Flex,
  VStack,
  SimpleGrid,
  Text,
  HStack,
} from "@chakra-ui/react";
import ChooseQuantity from "./component/ChooseQuantity";
import Knapsack from "./utils/knapsack";
import cannon from "./assets/cannon.png";
import ship from "./assets/ship.png";
import { useState } from "react";

function App() {
  const [ball1, setBall1] = useState(5);
  const [ball2, setBall2] = useState(5);
  const [ball3, setBall3] = useState(5);
  const knapsack = new Knapsack();
  console.log(knapsack);

  return (
    <div>
      <Flex bgGradient="radial(gray.300,yellow.300,blue.400)" height="100vh">
        <Center>
          <VStack>
            <img src={cannon} />
            <VStack>
              <SimpleGrid columns={3} spacing={10}>
                <Text>Força</Text>
                <Text>Qntd</Text>
                <Text>Peso</Text>
              </SimpleGrid>
              <SimpleGrid columns={3}>
                <VStack>
                  <Center pl="50px" h="40px" w="50px">
                    <Text>50</Text>
                  </Center>
                  <Center pl="50px" h="40px" w="50px">
                    <Text>50</Text>
                  </Center>
                  <Center pl="50px" h="40px" w="50px">
                    <Text>50</Text>
                  </Center>
                </VStack>
                <VStack>
                  <ChooseQuantity value={ball1} setValue={setBall1} />
                  <ChooseQuantity value={ball2} setValue={setBall2} />
                  <ChooseQuantity value={ball3} setValue={setBall3} />
                </VStack>
                <VStack>
                  <Text>10</Text>
                  <Text>10</Text>
                  <Text>10</Text>
                </VStack>
              </SimpleGrid>
              <button onClick={() => console.log(knapsack.getAnswer())}>
                {" "}
                Clique em mim
              </button>
            </VStack>
          </VStack>

          <Box
            d="flex"
            flexDirection="row-reverse"
            flex="3"
            height="70vh"
            margin="1rem"
            bgGradient="linear(to-t, blue.500,green.200,)"
            borderRadius="10px"
          >
            <img src={ship} height="40%" width="40%" />
          </Box>
        </Center>
      </Flex>
    </div>
  );
}

export default App;
