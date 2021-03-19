import { Button, Text, HStack  } from "@chakra-ui/react";

function ChooseQuantity({value, setValue}) {
  const inc = () => {
    if (value > 0) setValue(value - 1);
  };
  const dec = () => {
    if (value < 10) setValue(value + 1);
  };

  return (
    <HStack maxW="200px">
      <Button onClick={() => inc()}>-</Button>
      <Text>{value}</Text>
      <Button onClick={() => dec()}>+</Button>
    </HStack>
  );
}

export default ChooseQuantity;
