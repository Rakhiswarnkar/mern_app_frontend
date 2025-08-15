import React from "react";
import { Box, Button, Flex, Heading, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Flex
      align="center"
      justify="center"
      height="100vh"
      bg="gray.50"
      textAlign="center"
    >
      <Box p={8} bg="white" rounded="lg" shadow="md" w="sm">
        <Heading mb={8} size="lg" color="teal.500">
          User and Subject Management
        </Heading>

        <VStack spacing={4}>
          <Button
            colorScheme="teal"
            width="full"
            onClick={() => navigate("/login")}
          >
            Login
          </Button>
          <Button
            colorScheme="blue"
            width="full"
            onClick={() => navigate("/register")}
          >
            Register
          </Button>
        </VStack>
      </Box>
    </Flex>
  );
};

export default LandingPage;
