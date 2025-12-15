import React from 'react';
import { Typography, Container, Box } from '@mui/material';

export default function Activewear() {
	return (
		<Container>
			<Box sx={{ my: 4 }}>
				<Typography variant="h4" component="h2" gutterBottom>
					Activewear
				</Typography>
				<Typography variant="body1">
					High-performance and fashionable activewear for all your workouts.
				</Typography>
			</Box>
		</Container>
	);
}
