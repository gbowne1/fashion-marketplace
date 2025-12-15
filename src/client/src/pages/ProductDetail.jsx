import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Grid, Typography, Button, Box, Alert } from '@mui/material';
import { CartContext } from '../contexts/CartContext';
import mockProducts from '../mockData/products';

export default function ProductDetail() {
	const { productId } = useParams();
	const { addToCart } = useContext(CartContext);
	
	// Find the product based on the URL parameter (you'd use an API call here)
	const product = mockProducts.find(p => p._id === productId);

	if (!product) {
		return (
			<Container sx={{ mt: 10 }}>
				<Alert severity="error">Product not found.</Alert>
			</Container>
		);
	}

	return (
		<Container sx={{ mt: 5 }}>
			<Grid container spacing={4}>
				{/* Product Image */}
				<Grid item xs={12} md={6}>
					<Box 
						component="img" 
						src={product.image || '/images/placeholder.jpg'} // Use placeholder if image is missing
						alt={product.name}
						sx={{ width: '100%', height: 'auto', borderRadius: 2 }}
					/>
				</Grid>

				{/* Product Details */}
				<Grid item xs={12} md={6}>
					<Typography variant="h3" gutterBottom>{product.name}</Typography>
					
					<Typography variant="h4" color="primary" sx={{ mb: 2 }}>
						${product.price.toFixed(2)}
					</Typography>
					
					<Typography variant="body1" paragraph>{product.description}</Typography>
					
					<Box sx={{ my: 3 }}>
						<Typography variant="h6">Details:</Typography>
						{product.details && Object.entries(product.details).map(([key, value]) => (
							<Typography key={key} variant="body2">
								**{key.charAt(0).toUpperCase() + key.slice(1)}:** {Array.isArray(value) ? value.join(', ') : value}
							</Typography>
						))}
					</Box>

					<Button
						variant="contained"
						size="large"
						onClick={() => addToCart(product)}
						sx={{ mt: 2, bgcolor: '#ff4f8f', '&:hover': { bgcolor: '#e0467c' } }}
					>
						Add to Cart
					</Button>
				</Grid>
			</Grid>
		</Container>
	);
}
