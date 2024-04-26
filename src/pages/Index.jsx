import { Box, Button, Container, Flex, Heading, Image, Input, Stack, Text, Textarea, useToast } from "@chakra-ui/react";
import { FaEdit, FaSave, FaTrash } from "react-icons/fa";

const Index = () => {
  const toast = useToast();

  const handleSave = () => {
    toast({
      title: "Changes Saved",
      description: "Your modifications have been saved successfully.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  const handleDelete = () => {
    toast({
      title: "Content Deleted",
      description: "The content has been deleted.",
      status: "error",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Container maxW="container.xl" py={10}>
      <Flex justifyContent="space-between" alignItems="center" mb={6}>
        <Heading as="h1" size="xl">
          Home Remodeling Co.
        </Heading>
        <Button leftIcon={<FaEdit />} colorScheme="blue">
          Edit Site
        </Button>
      </Flex>
      <Stack spacing={5}>
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <Flex justifyContent="space-between" alignItems="center">
            <Heading fontSize="xl">Welcome to Our Home Remodeling Service</Heading>
            <Button size="sm" leftIcon={<FaSave />} colorScheme="green" onClick={handleSave}>
              Save
            </Button>
          </Flex>
          <Text mt={4}>We provide top-notch remodeling services for your home. From kitchens to bathrooms, we cover it all!</Text>
          <Textarea defaultValue="We provide top-notch remodeling services for your home. From kitchens to bathrooms, we cover it all!" />
          <Button mt={2} leftIcon={<FaTrash />} colorScheme="red" onClick={handleDelete}>
            Delete
          </Button>
        </Box>
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <Flex justifyContent="space-between" alignItems="center">
            <Heading fontSize="xl">Our Projects</Heading>
            <Button size="sm" leftIcon={<FaSave />} colorScheme="green" onClick={handleSave}>
              Save
            </Button>
          </Flex>
          <Text mt={4}>Check out some of our most recent projects and see the quality of our work for yourself!</Text>
          <Textarea defaultValue="Check out some of our most recent projects and see the quality of our work for yourself!" />
          <Button mt={2} leftIcon={<FaTrash />} colorScheme="red" onClick={handleDelete}>
            Delete
          </Button>
        </Box>
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <Flex justifyContent="space-between" alignItems="center">
            <Heading fontSize="xl">Contact Us</Heading>
            <Button size="sm" leftIcon={<FaSave />} colorScheme="green" onClick={handleSave}>
              Save
            </Button>
          </Flex>
          <Text mt={4}>Have any questions? Reach out to us through any of the platforms below.</Text>
          <Textarea defaultValue="Have any questions? Reach out to us through any of the platforms below." />
          <Button mt={2} leftIcon={<FaTrash />} colorScheme="red" onClick={handleDelete}>
            Delete
          </Button>
        </Box>
      </Stack>
    </Container>
  );
};

export default Index;
