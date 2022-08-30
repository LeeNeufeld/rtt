import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import RTTLogoT from "../images/RTTLogoT.png";

const pages = ["Home", "Service", "Meet Rose", "Contact Us", "FAQ"];

function NavBar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    // <Navbar
    //   className="NavColor"
    //   style={{ backgroundColor: "#AEBDCC" }}
    //   expand="lg"
    //   sticky="top"
    // >
    //   <a className="brand" style={{ zIndex: 3 }} href="/home">
    //     <img style={{ maxWidth: "150px" }} alt="Responsive" src={RTTLogoT} />
    //   </a>
    //   <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //   <Navbar.Collapse id="basic-navbar-nav">
    //     <Nav className="ml-auto">
    //       <Nav.Link
    //         style={{ fontFamily: "Dancing Script, cursive" }}
    //         href="/home"
    //       >
    //         Home
    //       </Nav.Link>
    //       <Nav.Link
    //         style={{ fontFamily: "Dancing Script, cursive" }}
    //         href="/services"
    //       >
    //         Services
    //       </Nav.Link>
    //       <Nav.Link
    //         style={{ fontFamily: "Dancing Script, cursive" }}
    //         href="/meetrose"
    //       >
    //         Meet Rose
    //       </Nav.Link>
    //       <Nav.Link
    //         style={{ fontFamily: "Dancing Script, cursive" }}
    //         href="/contactus"
    //       >
    //         Contact Us
    //       </Nav.Link>
    //       <Nav.Link
    //         style={{ fontFamily: "Dancing Script, cursive" }}
    //         href="/faq"
    //       >
    //         FAQ
    //       </Nav.Link>
    //     </Nav>
    //   </Navbar.Collapse>
    // </Navbar>
  );
}

export default NavBar;
