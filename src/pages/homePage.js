import { Box } from "@mui/material";
import Navbar from "../components/navbar";

function HomePage() {
  return (
    <>
      <Navbar />
      <Box display="flex" justifyContent="center" mt={4}>
        <h1>Hello World</h1>
      </Box>
    </>
  );
}

export default HomePage;
