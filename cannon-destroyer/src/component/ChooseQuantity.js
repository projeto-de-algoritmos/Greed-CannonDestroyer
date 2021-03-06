import { Button, Text, HStack  } from "@chakra-ui/react";

function ChooseQuantity({value, setValue, total, setTotal, weight, max}) {
  const inc = () => {
    if (value > 0) {
      setTotal( total - weight);
      setValue(value - 1);
    }
  };
  const dec = () => {
    if (weight + total <=max){
      setTotal(weight + total);
      setValue(value + 1); 
      
    
    } 
  };

  return (
    <HStack maxW="200px" bg="gray.300" borderRadius="20px">
      <Button onClick={() => inc()} borderRadius="20px 0px 0px 20px" bg="gray.400">-</Button>
      <Text>{value===10?'': "0"}{value}</Text>
      <Button onClick={() => dec()} borderRadius="0px 20px 20px 0px"bg="gray.400">+</Button>
    </HStack>
  );
}

export default ChooseQuantity;
