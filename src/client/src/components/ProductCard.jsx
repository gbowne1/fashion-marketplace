import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import {
	Card,
	CardMedia,
	CardContent,
	CardActions,
	Typography,
	Button,
} from '@mui/material';
import { Rating } from '@mui/material';
import { CartContext } from '../contexts/CartContext'; // Import the CartContext

function ProductCard(props) {
	const { product } = props;
	const { addToCart } = useContext(CartContext); // Use the addToCart function from the CartContext

	return (
		<Card sx={{ maxWidth: 345 }}>
			<CardMedia
				component="img"
				height="140"
				image={product.image}
				alt={product.name}
			/>
			<CardContent>
				<Typography gutterBottom variant="h5" component="div">
					{product.name}
				</Typography>
				<Typography variant="body2" color="text.secondary">
					{product.description}
				</Typography>
				<Typography variant="h6" color="text.secondary">
					{product.price}
				</Typography>
				<Rating name="product-rating" value={product.rating} readOnly />
			</CardContent>
			<CardActions>
				<Button
					size="small"
					color="primary"
					onClick={() => addToCart(product)}
				>
					{' '}
					// Pass the product to the addToCart function Add to cart
				</Button>
				<Button size="small" color="secondary">
					Favorite
				</Button>
				<Button size="small" color="primary">
					Learn More
				</Button>
			</CardActions>
		</Card>
	);
}

ProductCard.propTypes = {
	product: PropTypes.shape({
		image: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
		description: PropTypes.string.isRequired,
		price: PropTypes.number.isRequired,
		rating: PropTypes.number.isRequired,
	}).isRequired,
};

export default ProductCard;
