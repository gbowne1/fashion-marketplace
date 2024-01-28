import React from 'react';
import { AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import DeleteIcon from '@mui/icons-material/Delete';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PropTypes from 'prop-types';

function ShoppingCart({ cartItems, removeFromCart }) {
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
			<aside>
				<header>
					<h2>Your Shopping Cart</h2>
					<ShoppingCartIcon />
				</header>
				<section>
					<List>
						{cartItems.map((item) => (
							<ListItem key={item.id}>
								<ListItemText
									primary={item.name}
									secondary={`$${item.price}`}
								/>
								<ListItemSecondaryAction>
									<IconButton
										edge="end"
										aria-label="delete"
										onClick={() => removeFromCart(item)}
									>
										<DeleteIcon />
									</IconButton>
								</ListItemSecondaryAction>
							</ListItem>
						))}
					</List>
				</section>
				<footer>
					<strong>
						Total: $
						{cartItems.reduce(
							(total, item) => total + item.price,
							0
						)}
					</strong>
				</footer>
			</aside>
		</div>
	);
}

ShoppingCart.propTypes = {
	cartItems: PropTypes.arrayOf(PropTypes.object).isRequired,
	removeFromCart: PropTypes.func.isRequired,
};

export default ShoppingCart;
