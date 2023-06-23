import * as React from 'react'
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";

const pages = [
    { name: "About", path: "/about" },
    { name: "Directory", path: "/directory" }
]

function NavBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    {/* <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton> */}
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        TransHealth
                    </Typography>
                    <Button color="inherit" href="/About">About</Button>
                    <Button color="inherit" href="/Login">Login</Button>
                    <Button color="inherit" href="/SignUp">Sign Up</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default NavBar