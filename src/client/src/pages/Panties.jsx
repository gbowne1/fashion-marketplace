import React from 'react';
import { Typography, Container, Box } from '@mui/material';

export default function Panties() {
	return (
		<Container>
			<Box sx={{ my: 4 }}>
				<Typography variant="h4" component="h2" gutterBottom>
					Panties
				</Typography>
				<Typography variant="body1">
					From thongs to briefs, comfort meets elegance.
				</Typography>
			</Box>
		</Container>
	);
}
