import React from 'react';
import { ChakraProvider, defaultSystem, Button, Text, Box, Stack, Input } from '@chakra-ui/react';

const MyChakraComponent = () => {
  return (
    <ChakraProvider value={defaultSystem}>
      <Box textAlign="center" padding="20px">
        <Text fontSize="2xl" marginBottom="8px">
          Welcome to Codux with Chakra UI!
        </Text>
        
        <Stack marginY="20px">
          <Button colorPalette="teal" size="lg">
            Click Me
          </Button>
          <Button colorPalette="pink" size="md">
            Another Button
          </Button>
          <Input placeholder="Enter your text here" size="md" />
        </Stack>

        <Box borderRadius="md" boxShadow="lg" padding="20px" marginTop="20px" backgroundColor="gray.50">
          <Text fontSize="xl" fontWeight="bold" marginBottom="4">
            Card Header
          </Text>
          <Text>
            This is some content inside the card. Chakra UI makes it easy to create responsive and stylish UI components.
          </Text>
        </Box>
      </Box>
    </ChakraProvider>
  );
};

export default MyChakraComponent;
