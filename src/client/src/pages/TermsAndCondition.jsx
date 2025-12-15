import React from 'react';
import { Typography, Container, Box } from '@mui/material';

export default function TermsAndCondition() {
	return (
		<Container>
			<Box sx={{ my: 4 }}>
				<Typography variant="h4" component="h2" gutterBottom>
					Terms and Conditions
				</Typography>
				<Typography variant="body1" align="left">
					**1. Acceptance of Terms:** By accessing and using this website, you accept and agree to be bound by the terms and provisions of this agreement.
					<br /><br />
					**2. Modification of Terms:** We reserve the right to change or modify any of the terms and conditions contained in the Terms of Use at any time.
					<br /><br />
					**3. Privacy Policy:** Please review our Privacy Policy, which also governs your visit to our website.
					{/* Add more legal text here */}
				</Typography>
			</Box>
		</Container>
	);
}
