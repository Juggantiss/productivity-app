import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const IconBar = ({ handle }) => (
  <IconButton
    color="inherit"
    aria-label="open drawer"
    edge="start"
    onClick={handle}
    sx={{ mr: 2, display: { sm: "none" } }}
  >
    <MenuIcon />
  </IconButton>
);

export default IconBar;
