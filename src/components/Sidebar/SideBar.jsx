import { Drawer } from "@mui/material";
import ListSideBar from "./ListSideBar";

const SideBar = () => (
  <Drawer
    open
    variant="permanent"
    sx={{
      display: { xs: "none", sm: "block" },
      "& .MuiDrawer-paper": { boxSizing: "border-box", width: 240 }
    }}
  >
    <ListSideBar />
  </Drawer>
);

export default SideBar;
