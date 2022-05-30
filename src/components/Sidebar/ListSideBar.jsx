import {
  Box,
  Toolbar,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText
} from "@mui/material";

import { items } from "../../utils/itemsMenu";

const ListSideBar = () => (
  <Box sx={{ overflow: "auto" }}>
    <Toolbar />
    <Divider />
    <List>
      {items.map((item) => (
        <ListItem key={item.id} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <item.Icon />
            </ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  </Box>
);

export default ListSideBar;
