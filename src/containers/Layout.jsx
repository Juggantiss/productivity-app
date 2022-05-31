import { Box, Toolbar } from "@mui/material";
import SideBar from "../components/Sidebar/SideBar";
import SideBarMobile from "../components/Sidebar/SideBarMobile";
import AppBarNav from "../components/AppBar/AppBarNav";

const Layout = ({ children }) => (
  <Box sx={{ display: "flex" }}>
    <AppBarNav />
    <Box
      component="nav"
      sx={{ width: { sm: 240 }, flexShrink: { sm: 0 } }}
      aria-label="mailbox folders"
    >
      <SideBarMobile />
      <SideBar />
    </Box>
    <Box
      component="main"
      sx={{
        display: "flex",
        flexGrow: 1,
        marginTop: 10,
        width: { sm: `calc(100% - ${240}px)` },
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <Toolbar />
      {children}
    </Box>
  </Box>
);

export default Layout;
