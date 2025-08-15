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

interface LoginForm {
  email: string;
  password: string;
}

const LoginPage: React.FC = () => {
  const [form, setForm] = useState<LoginForm>({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      console.log("Login data:", form);
      setLoading(false);
    }, 1000);
  };

  return (
    <Flex align="center" justify="center" height="100vh" bg="gray.50">
      <Box bg="white" p={8} rounded="lg" shadow="md" w="sm">
        <Heading mb={6} textAlign="center" size="lg" color="teal.500">
          Login
        </Heading>
        <VStack spacing={4}>
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
            Login
          </Button>

          <Text fontSize="sm">
            New here?{" "}
            <Link as={RouterLink} to="/register" color="teal.500">
              Create an account
            </Link>
          </Text>
        </VStack>
      </Box>
    </Flex>
  );
};

export default LoginPage;
