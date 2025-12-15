import React from 'react';
import { Typography, Container, Box } from '@mui/material';

export default function Best() {
	return (
		<Container>
			<Box sx={{ my: 4 }}>
				<Typography variant="h4" component="h2" gutterBottom>
					Best Sellers
				</Typography>
				<Typography variant="body1">
					See what everyone is loving this season!
				</Typography>
			</Box>
		</Container>
	);
}
