import { TextField } from "@mui/material";
import React from "react";

function Search(props) {
  const { onChange, value } = props;
  return (
    <TextField type="search" value={value} onChange={onChange} label="search" />
  );
}

export default Search;
