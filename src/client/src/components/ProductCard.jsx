import {
	Card,
	CardHeader,
	CardMedia,
	CardContent,
	Typography,
} from '@mui/material';

function ProductCard() {
	return (
		<Card>
			<CardHeader title="Product Name" subheader="Product Category" />
			<CardMedia
				component="img"
				image="product-image.jpg"
				alt="Product Image"
			/>
			<CardContent>
				<Typography variant="body1" color="text.secondary">
					Product Description
				</Typography>
			</CardContent>
		</Card>
	);
}

export default ProductCard;
