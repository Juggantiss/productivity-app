import { useState } from "react";
import { Box, Toolbar } from "@mui/material";
import SideBar from "../components/Sidebar/SideBar";
import SideBarMobile from "../components/Sidebar/SideBarMobile";
import AppBarNav from "../components/AppBar/AppBarNav";

const Layout = ({ window, children }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <AppBarNav handle={handleDrawerToggle} />
      <Box
        component="nav"
        sx={{ width: { sm: 240 }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <SideBarMobile
          container={container}
          open={mobileOpen}
          handle={handleDrawerToggle}
        />
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
};

export default Layout;
