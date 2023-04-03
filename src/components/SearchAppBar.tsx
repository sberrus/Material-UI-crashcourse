import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import MenuIcon from "@mui/icons-material/Menu";

const SearchBarApp = () => {
	return (
		<AppBar position="static">
			<Toolbar variant="dense">
				<IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
					<MenuIcon />
				</IconButton>
				<Typography variant="h6" color="inherit" component="div">
					Photos
				</Typography>
			</Toolbar>
		</AppBar>
	);
};

export default SearchBarApp;
