import { Drawer } from "@mui/material";
import ListSideBar from "./ListSideBar";

const SideBarMobile = ({ container, open, handle }) => (
  <Drawer
    container={container}
    variant="temporary"
    open={open}
    onClose={handle}
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

export default SideBarMobile;
