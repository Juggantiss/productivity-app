import { IconButton } from "@mui/material";
import { useDispatch } from "react-redux";
import MenuIcon from "@mui/icons-material/Menu";
import { handleDrawerToggleMobile } from "../../redux/actions/ui";

const IconBar = () => {
  const dispatch = useDispatch();

  const handleClick = () => dispatch(handleDrawerToggleMobile());

  return (
    <IconButton
      color="inherit"
      aria-label="open drawer"
      edge="start"
      onClick={handleClick}
      sx={{ mr: 2, display: { sm: "none" } }}
    >
      <MenuIcon />
    </IconButton>
  );
};

export default IconBar;
