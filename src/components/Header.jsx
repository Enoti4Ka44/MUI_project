import {
  AppBar,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import React from "react";
import { Search } from "@mui/icons-material";

function Header(props) {
  const pages = ["Home", "Products", "Shop", "Contact"];
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h5"
            component="a"
            href="/"
            sx={{
              flexGrow: 1,
              textDecoration: "none",
              color: "inherit",
              letterSpacing: "2px",
            }}
          >
            Hekto
          </Typography>
          <Menu>
            {pages.map((p) => {
              <MenuItem key={p}>
                <Typography>{p}</Typography>
              </MenuItem>;
            })}
          </Menu>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
