import {
  Box,
  Center,
  Flex,
  VStack,
  SimpleGrid,
  Text,
  HStack,
  Button,
} from "@chakra-ui/react";
import ChooseQuantity from "./component/ChooseQuantity";
import Knapsack from "./utils/Knapsack";
import cannon from "./assets/cannon.png";
import ship1 from "./assets/ship1.png";
import ship2 from "./assets/ship2.png";
import ship3 from "./assets/ship3.png";
import ship1Wrecked from "./assets/ship1Wrecked.png";
import ship2Wrecked from "./assets/ship2Wrecked.png";
import ship3Wrecked from "./assets/ship3Wrecked.png";
import { useState } from "react";

function App() {
  const knapsack = new Knapsack();
  const [ball1, setBall1] = useState(5);
  const [ball2, setBall2] = useState(5);
  const [ball3, setBall3] = useState(5);

  return (
    <>
      <Flex bgGradient="radial(gray.300,yellow.300,blue.400)" height="100vh">
        <HStack>
          <VStack mt="10%" spacing={10}>
            <VStack>
              <img src={cannon} />
              <HStack spacing={6}>
                <Text fontWeight="bold" fontSize="xl">
                  Força
                </Text>
                <Text fontWeight="bold" fontSize="xl">
                  Quantidade
                </Text>
                <Text fontWeight="bold" fontSize="xl">
                  Peso
                </Text>
              </HStack>
              <SimpleGrid columns={3}>
                <VStack>
                  <Center pl="30px" h="40px" w="50px">
                    <Text>50</Text>
                  </Center>
                  <Center pl="30px" h="40px" w="50px">
                    <Text>50</Text>
                  </Center>
                  <Center pl="30px" h="40px" w="50px">
                    <Text>50</Text>
                  </Center>
                </VStack>
                <VStack>
                  <ChooseQuantity value={ball1} setValue={setBall1} />
                  <ChooseQuantity value={ball2} setValue={setBall2} />
                  <ChooseQuantity value={ball3} setValue={setBall3} />
                </VStack>
                <VStack>
                  <Center pr="20px" h="40px" w="50px">
                    <Text>50</Text>
                  </Center>
                  <Center pr="20px" h="40px" w="50px">
                    <Text>50</Text>
                  </Center>
                  <Center pr="20px" h="40px" w="50px">
                    <Text>50</Text>
                  </Center>
                </VStack>
              </SimpleGrid>
            </VStack>
            <HStack>
              <Button
                bg="green.500"
                color="white"
                onClick={() => console.log(knapsack.getAnswer())}
                borderRadius="20px"
                size="lg"
              >
                LANÇAR
              </Button>
              <Button
                bg="red.500"
                color="white"
                onClick={() => console.log(knapsack.getAnswer())}
                borderRadius="20px"
                size="lg"
              >
                RESETAR
              </Button>
            </HStack>
          </VStack>
          <Center
            d="flex"
            flexDirection="row-reverse"
            flex="1"
            height="70vh"
            margin="1rem"
            bgGradient="linear(to-t, blue.500,green.300,)"
            borderRadius="10px"
          >
            <img src={ship3} height="20%" width="20%" />
            <img src={ship2} height="30%" width="30%" />
            <img src={ship1} height="40%" width="40%" />
          </Center>
        </HStack>
      </Flex>
    </>
  );
}

export default App;
