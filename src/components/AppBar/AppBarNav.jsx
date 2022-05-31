import { AppBar, Toolbar } from "@mui/material";
import Typography from "@mui/material/Typography";
import IconBar from "./IconBar";

const AppBarNav = () => (
  <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
    <Toolbar>
      <IconBar />
      <Typography variant="h6" noWrap component="div">
        Aplicación Productiva
      </Typography>
    </Toolbar>
  </AppBar>
);

export default AppBarNav;
