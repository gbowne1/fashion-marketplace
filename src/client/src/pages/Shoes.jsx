import React from 'react';
import { Typography, Container, Box } from '@mui/material';

export default function Shoes() {
	return (
		<Container>
			<Box sx={{ my: 4 }}>
				<Typography variant="h4" component="h2" gutterBottom>
					Shoes
				</Typography>
				<Typography variant="body1">
					Step out in style with our curated footwear collection.
				</Typography>
			</Box>
		</Container>
	);
}
