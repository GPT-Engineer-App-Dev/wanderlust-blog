import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Box, Flex, Spacer, IconButton, useColorMode } from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";
import Index from "./pages/Index.jsx";
import NewPost from "./pages/NewPost.jsx";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Router>
      <Box>
        <Flex as="nav" bg="gray.100" p={4} mb={8} alignItems="center">
          <Heading size="md">My Blog</Heading>
          <Spacer />
          <IconButton
            aria-label="Toggle dark mode"
            icon={colorMode === "light" ? <FaMoon /> : <FaSun />}
            onClick={toggleColorMode}
          />
        </Flex>
        <Routes>
          <Route exact path="/" element={<Index />} />
          <Route path="/new-post" element={<NewPost />} />
        </Routes>
      </Box>
    </Router>
  );
}

export default App;
