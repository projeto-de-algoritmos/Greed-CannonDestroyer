
import { Box, Button, Center, Flex,Square, Spacer, Text } from "@chakra-ui/react";
import cannon from './assets/cannon.png';
import ship from './assets/ship.png';
function App() {
  return (
    <div>
  <Flex  bgGradient="radial(gray.300,yellow.300,blue.400)" height="100vh" >
  <Center>
    <Center flex="1">
      <img src={cannon}/>
    </Center>
    <Box d="flex" flexDirection="row-reverse" flex="3" height="70vh" margin="1rem" bgGradient="linear(to-t, blue.500,green.200,)" borderRadius="10px">
      <img src={ship} height="40%"  width="40%"/>
    </Box>
    <Center flex="1">
    </Center>
  </Center>
</Flex>
    </div>
  );
}

export default App;
