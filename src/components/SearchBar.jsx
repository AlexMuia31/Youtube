import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";

export const SearchBar = styled(TextField)({
  "& label.Mui-focused": {
    color: "green",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "green",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "grey",
    },
    "&:hover fieldset": {
      borderColor: "red",
    },
    "&.Mui-focused fieldset": {
      borderColor: "red",
    },
  },
  ".MuiInputBase-root": {
    backgroundColor: "#fff",
    borderRadius: "20px",
  },
});
