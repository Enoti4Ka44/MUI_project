import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import React from "react";

function Header(props) {
  return (
    <div>
      <AppBar>
        <Toolbar>
          <Typography sx={{ flexGrow: 1 }}>YouTube</Typography>
          <IconButton color="inherit">
            <AccountCircleIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
