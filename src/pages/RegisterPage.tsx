import React, { useState } from "react";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Heading,
  Text,
  Link,
  VStack,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

interface RegisterForm {
  name: string;
  email: string;
  password: string;
}

const RegisterPage: React.FC = () => {
  const [form, setForm] = useState<RegisterForm>({
    name: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      console.log("Registration data:", form);
      setLoading(false);
    }, 1000);
  };

  return (
    <Flex align="center" justify="center" height="100vh" bg="gray.50">
      <Box bg="white" p={8} rounded="lg" shadow="md" w="sm">
        <Heading mb={6} textAlign="center" size="lg" color="teal.500">
          Register
        </Heading>
        <VStack spacing={4}>
          <FormControl id="name" isRequired>
            <FormLabel>Full Name</FormLabel>
            <Input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your name"
            />
          </FormControl>

          <FormControl id="email" isRequired>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
          </FormControl>

          <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Enter your password"
            />
          </FormControl>

          <Button
            colorScheme="teal"
            width="full"
            onClick={handleSubmit}
            isLoading={loading}
          >
            Register
          </Button>

          <Text fontSize="sm">
            Already have an account?{" "}
            <Link as={RouterLink} to="/login" color="teal.500">
              Login
            </Link>
          </Text>
        </VStack>
      </Box>
    </Flex>
  );
};

export default RegisterPage;
