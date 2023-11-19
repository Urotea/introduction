import {
  Box,
  IconButton,
  AppBar as MUIAppBar,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const AppBar: React.FC = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <MUIAppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            自己紹介
          </Typography>
        </Toolbar>
      </MUIAppBar>
    </Box>
  );
};

/** @package */
export default AppBar;
