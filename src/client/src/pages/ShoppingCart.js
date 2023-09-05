import { AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

function ShoppingCart() {
	return (
		<div>
			<AppBar position="static">
				<Toolbar>
					<IconButton
						edge="start"
						color="inherit"
						component={Link}
						to="/"
					>
						{/* Add your icon for navigating back to the home page */}
					</IconButton>
					<Typography
						variant="h6"
						component="div"
						sx={{ flexGrow: 1 }}
					>
						Shopping Cart
					</Typography>
				</Toolbar>
			</AppBar>
			{/* Add the content of your shopping cart page */}
		</div>
	);
}

export default ShoppingCart;
