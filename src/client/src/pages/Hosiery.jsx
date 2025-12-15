import React from 'react';
import { Typography, Container, Box } from '@mui/material';

export default function Hosiery() {
	return (
		<Container>
			<Box sx={{ my: 4 }}>
				<Typography variant="h4" component="h2" gutterBottom>
					Hosiery & Stockings
				</Typography>
				<Typography variant="body1">
					Complete your look with our selection of tights, socks, and stockings.
				</Typography>
			</Box>
		</Container>
	);
}
