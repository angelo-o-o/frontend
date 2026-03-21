import { AppBar, Toolbar, Button, Box, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import { useTheme } from "../contexts/ThemeContext";

function Navbar() {
  const { mode, toggleTheme } = useTheme();

  return (
    <Box display="flex" justifyContent="center" mt={2}>
      <AppBar
        color="secondary"
        position="static"
        sx={{ width: "80%", borderRadius: 2 }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box display="flex" gap={2}>
            <Button color="inherit" component={Link} to="/">
              Home
            </Button>

            <Button color="inherit" component={Link} to="/users">
              Users
            </Button>
          </Box>

          <IconButton color="inherit" onClick={toggleTheme}>
            {mode === "dark" ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
