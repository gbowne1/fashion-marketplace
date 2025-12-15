import React from 'react';
import { Typography, Container, Box } from '@mui/material';

export default function PrivacyPolicy() {
	return (
		<Container>
			<Box sx={{ my: 4 }}>
				<Typography variant="h4" component="h2" gutterBottom>
					Privacy Policy
				</Typography>
				<Typography variant="body1" align="left">
					**1. Information We Collect:** We collect information you provide directly to us, such as your name, email address, and payment information when you make a purchase.
					<br /><br />
					**2. How We Use Information:** We use the information we collect to process transactions, send you marketing communications, and improve our services.
					<br /><br />
					**3. Data Security:** We implement various security measures to maintain the safety of your personal information.
					{/* Add more legal text here */}
				</Typography>
			</Box>
		</Container>
	);
}
