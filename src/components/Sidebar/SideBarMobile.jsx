import { Drawer } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { handleDrawerToggleMobile } from "../../redux/actions/ui";
import ListSideBar from "./ListSideBar";

const SideBarMobile = () => {
  const ui = useSelector((state) => state.ui);
  const dispatch = useDispatch();

  const handleClick = () => dispatch(handleDrawerToggleMobile());

  return (
    <Drawer
      variant="temporary"
      open={ui.mobileOpen}
      onClose={handleClick}
      ModalProps={{
        keepMounted: true // Better open performance on mobile.
      }}
      sx={{
        display: { xs: "block", sm: "none" },
        "& .MuiDrawer-paper": { boxSizing: "border-box", width: 240 }
      }}
    >
      <ListSideBar />
    </Drawer>
  );
};

export default SideBarMobile;
