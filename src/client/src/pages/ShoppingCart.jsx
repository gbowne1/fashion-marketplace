import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const ShoppingCart = ({ cartItems, removeFromCart, updateQuantity }) => {
	return (
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
					{cartItems.reduce((total, item) => total + item.price, 0)}
				</strong>
			</footer>
		</aside>
	);
};

export default ShoppingCart;
