import {
  AppBar,
  Box,
  IconButton,
  InputAdornment,
  Stack,
  Toolbar,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../utils/logo.svg";
import SearchIcon from "@mui/icons-material/Search";
import { SearchBar } from "./SearchBar";

const Navbar = () => {
  return (
    <AppBar sx={{ backgroundColor: "#000" }}>
      <Toolbar>
        <Stack
          direction="row"
          alignItems="center"
          p={2}
          justifyContent="space-between"
          sx={{ width: "100%" }}
        >
          <Link to="/" style={{ display: "flex", alignItems: "center" }}>
            <img src={logo} alt="logo" height={50} />
          </Link>
          <Box component="form" onSubmit={() => {}}>
            <SearchBar
              value=""
              onChange={() => {}}
              size="small"
              placeholder="Search..."
              inputProps={{
                sx: {
                  "&::placeholder": {
                    color: "grey",
                  },
                  color: "grey",
                },
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton type="submit">
                      <SearchIcon sx={{ color: "red" }} />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Box>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
