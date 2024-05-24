import { Box, Container, Flex, Heading, Link, Text, VStack, HStack, Spacer, IconButton } from "@chakra-ui/react";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl">
      {/* Navigation Bar */}
      <Flex as="nav" bg="gray.100" p={4} mb={8} alignItems="center">
        <Heading size="md">My Blog</Heading>
        <Spacer />
        <HStack spacing={4}>
          <Link href="#">Home</Link>
          <Link href="#">About</Link>
          <Link href="#">Blog</Link>
          <Link href="#">Contact</Link>
        </HStack>
      </Flex>

      {/* Main Content */}
      <Flex direction={{ base: "column", md: "row" }} mb={8}>
        {/* Blog Posts Section */}
        <Box flex="3" mr={{ md: 8 }}>
          <Heading size="lg" mb={4}>Blog Posts</Heading>
          <VStack spacing={4} align="stretch">
            <Box p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">Post Title 1</Heading>
              <Text mt={4}>This is a summary of the blog post...</Text>
            </Box>
            <Box p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">Post Title 2</Heading>
              <Text mt={4}>This is a summary of the blog post...</Text>
            </Box>
          </VStack>
        </Box>

        {/* Sidebar */}
        <Box flex="1" mt={{ base: 8, md: 0 }}>
          <Heading size="lg" mb={4}>Recent Posts</Heading>
          <VStack spacing={4} align="stretch">
            <Box p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="md">Recent Post 1</Heading>
            </Box>
            <Box p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="md">Recent Post 2</Heading>
            </Box>
          </VStack>
        </Box>
      </Flex>

      {/* Footer */}
      <Flex as="footer" bg="gray.100" p={4} mt={8} alignItems="center" justifyContent="center">
        <HStack spacing={4}>
          <IconButton as="a" href="#" aria-label="Twitter" icon={<FaTwitter />} />
          <IconButton as="a" href="#" aria-label="Facebook" icon={<FaFacebook />} />
          <IconButton as="a" href="#" aria-label="Instagram" icon={<FaInstagram />} />
        </HStack>
      </Flex>
    </Container>
  );
};

export default Index;