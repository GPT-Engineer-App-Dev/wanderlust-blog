import { Box, Container, Flex, Heading, Link, Text, VStack, HStack, Spacer, IconButton, Button } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

const Index = () => {
  const [posts, setPosts] = useState([
    { title: "Post Title 1", content: "This is a summary of the blog post..." },
    { title: "Post Title 2", content: "This is a summary of the blog post..." },
  ]);

  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    setPosts(savedPosts);
  }, []);

  return (
    <Container maxW="container.xl">
      {/* Navigation Bar */}
      <Flex as="nav" bg="gray.100" p={4} mb={8} alignItems="center">
        <Heading size="md">My Blog</Heading>
        <Spacer />
        <HStack spacing={4}>
          <Link as={RouterLink} to="/">Home</Link>
          <Link as={RouterLink} to="/about">About</Link>
          <Link as={RouterLink} to="/blog">Blog</Link>
          <Link as={RouterLink} to="/contact">Contact</Link>
        </HStack>
      </Flex>

      {/* Main Content */}
      <Flex direction={{ base: "column", md: "row" }} mb={8}>
        {/* Blog Posts Section */}
        <Box flex="3" mr={{ md: 8 }}>
          <Flex justify="space-between" align="center" mb={4}>
            <Heading size="lg">Blog Posts</Heading>
            <Button as={RouterLink} to="/new-post" colorScheme="teal">Add New Post</Button>
          </Flex>
          <VStack spacing={4} align="stretch">
            {posts.map((post, index) => (
              <Box key={index} p={5} shadow="md" borderWidth="1px">
                <Heading fontSize="xl">{post.title}</Heading>
                <Text mt={4}>{post.content}</Text>
              </Box>
            ))}
          </VStack>
        </Box>

        {/* Sidebar */}
        <Box flex="1" mt={{ base: 8, md: 0 }}>
          <Heading size="lg" mb={4}>Recent Posts</Heading>
          <VStack spacing={4} align="stretch">
            {posts.slice(0, 2).map((post, index) => (
              <Box key={index} p={5} shadow="md" borderWidth="1px">
                <Heading fontSize="md">{post.title}</Heading>
              </Box>
            ))}
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