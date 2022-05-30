import { useState } from "react";
import { Box, Toolbar } from "@mui/material";
import Typography from "@mui/material/Typography";
import SideBar from "../components/Sidebar/SideBar";
import SideBarMobile from "../components/Sidebar/SideBarMobile";
import AppBarNav from "../components/AppBar/AppBarNav";

const Dashboard = ({ window }) => {
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
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${240}px)` }
        }}
      >
        <Toolbar />
        <Typography variant="h2" component="div" gutterBottom>
          Bienvenido que tengas un día productivo
        </Typography>
        <Box sx={{ bgcolor: "#cfe8fc", height: "10vh" }} />
      </Box>
    </Box>
  );
};

export default Dashboard;
