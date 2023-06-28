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
            <AppBar position="static" color='primary'>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        TransHealth
                    </Typography>
                    <Button color="inherit" href="/list">List</Button>
                    <Button color="inherit" href="/add">Add</Button>
                    {/* <Button color="inherit" href="/about">About</Button>
                    <Button color="inherit" href="/login">Login</Button>
                    <Button color="inherit" href="/signup">Sign Up</Button> */}
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default NavBar