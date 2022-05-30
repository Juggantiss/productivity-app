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
import { Link } from "react-router-dom";

import { items } from "../../utils/itemsMenu";

const ListSideBar = () => (
  <Box sx={{ overflow: "auto" }}>
    <Toolbar />
    <Divider />
    <List>
      {items.map((item) => (
        <Link
          key={item.id}
          to={item.route}
          style={{ textDecoration: "none", color: "rgba(0, 0, 0, 0.54)" }}
        >
          <ListItem
            key={item.id}
            disablePadding
            onClick={() => console.log(item.route)}
          >
            <ListItemButton>
              <ListItemIcon>
                <item.Icon />
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        </Link>
      ))}
    </List>
  </Box>
);

export default ListSideBar;
