import {
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
import cannonBall from "./assets/cannonball.png";
import { useState } from "react";

const knapsack = new Knapsack();

function App() {
  const [start, setStart] = useState(false);
  const [ball1, setBall1] = useState(0);
  const [ball2, setBall2] = useState(0);
  const [ball3, setBall3] = useState(0);
  const [total, setTotal] = useState(0);
  const [userScore, setUserScore] = useState(0);
  const [endGame, setEndGame] = useState(false);
  const [userWon, setUserWon] = useState(false);
  const getFinalText = ()=> {
    return userWon? 
      <Text fontWeight="bold" fontSize="5xl" align="center" color="green.500" backgroundColor="white" padding="0.5rem" borderRadius="1rem">
        Parabéns, você ganhou!!
      </Text>
      :
      <>  
        <Text fontWeight="bold" fontSize="5xl" align="center" color="red.500" backgroundColor="white" padding="0.5rem" borderRadius="1rem">
          Que pena, os piratas saquearam sua vila<br/>
        </Text>
        <Text fontWeight="semibold" fontSize="3xl" align="center">
          Você deveria fazer {knapsack.maxValue} pontos mas fez {userScore}
        </Text>
      </>
              
  }

  return (
    <>
      <VStack bgGradient="radial(gray.300,yellow.300,blue.400)" height="100vh">
          <Text fontWeight="bold" fontSize="3xl"> Cannon destroyer </Text>
          <Text align="start" fontSize="md"> Por: Danillo Souza e João Guedes </Text>
          <Text fontWeight="bold" fontSize="xl" align="center" width="70vw" backgroundColor="white" borderRadius="1rem"> O jogo consiste em você derrubar os navios com o canhão utilizando a maior força
            possível sem exceder o peso máximo, após você selecionar quantas bolas irá lançar, basta
            clicar em lançar e o código dirá se você venceu ou não.
          </Text>
        <HStack>
          <VStack mt="10%" spacing={10}>
            <VStack>
              <img src={cannon} />
              <HStack>
                <img src={cannonBall}/>
                  <VStack>
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
                        <Text>{knapsack.values[0]}</Text>
                      </Center>
                      <Center pl="30px" h="40px" w="50px">
                        <Text>{knapsack.values[1]}</Text>
                      </Center>
                      <Center pl="30px" h="40px" w="50px">
                        <Text>{knapsack.values[2]}</Text>
                      </Center>
                    </VStack>
                    <VStack>
                      <ChooseQuantity value={ball1} setValue={setBall1} total={total} setTotal={setTotal} weight={knapsack.weights[0]} max={knapsack.maxWeight}/>
                      <ChooseQuantity value={ball2} setValue={setBall2} total={total} setTotal={setTotal} weight={knapsack.weights[1]} max={knapsack.maxWeight}/>
                      <ChooseQuantity value={ball3} setValue={setBall3} total={total} setTotal={setTotal} weight={knapsack.weights[2]} max={knapsack.maxWeight}/>
                    </VStack>
                    <VStack>
                      <Center pr="20px" h="40px" w="50px">
                        <Text>{knapsack.weights[0]}Kg</Text>
                      </Center>
                      <Center pr="20px" h="40px" w="50px">
                        <Text>{knapsack.weights[1]}Kg</Text>
                      </Center>
                      <Center pr="20px" h="40px" w="50px">
                        <Text>{knapsack.weights[2]}Kg</Text>
                      </Center>
                    </VStack>
                  </SimpleGrid>
                  <HStack>
                    <Text fontWeight="bold" fontSize="xl">
                      Peso Máximo Suportado:
                    </Text>
                    <Text fontSize="xl">{knapsack.maxWeight}</Text>
                  </HStack>
                  <HStack>
                    <Text fontWeight="bold" fontSize="xl">
                      Peso atual:
                    </Text>
                    <Text fontSize="xl">{total}</Text>
                  </HStack>
                </VStack>
              </HStack>
            <HStack>
              <Button
                bg="green.500"
                color="white"
                disabled={start}
                onClick={() => {
                  setStart(true);
                  setEndGame(true);
                  setUserWon(
                    knapsack.values[0]*ball1 + 
                    knapsack.values[1]*ball2 + 
                    knapsack.values[2]*ball3 == 
                    knapsack.getAnswer()
                  );
                  setUserScore(knapsack.values[0]*ball1 + 
                    knapsack.values[1]*ball2 + 
                    knapsack.values[2]*ball3);
                }}
                borderRadius="20px"
                size="lg"
              >
                LANÇAR
              </Button>
              <Button
                bg="red.500"
                color="white"
                onClick={() => window.location.reload()}
                borderRadius="20px"
                size="lg"
              >
                RESETAR
              </Button>
            </HStack>
            </VStack>
          </VStack>
          <VStack
            d="flex"
            flex="1"
            margin="2rem"
            bgGradient="linear(to-t, blue.500,green.300,)"
            borderRadius="10px"
            padding="1rem"
          >
          {endGame?
          getFinalText(): null
          }
          <Center flexDirection="row-reverse">
            <img src={endGame && userWon? ship3Wrecked : ship3} height="20%" width="20%" />
            <img src={endGame && userWon? ship2Wrecked : ship2} height="30%" width="30%" />
            <img src={endGame && userWon? ship1Wrecked : ship1} height="40%" width="40%" />
          </Center>
          </VStack>
        </HStack>
      </VStack>
    </>
  );
}

export default App;
