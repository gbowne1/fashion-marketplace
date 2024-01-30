import React from 'react';
import { Box, Container, Grid, Typography, Link } from '@mui/material';
import { Facebook, Twitter, Instagram } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';

export default function Footer() {
	return (
		<Box
			sx={{
				mt: 5,
				display: 'flex',
				justifyContent: 'center',
				position: 'fixed',
				bottom: 0,
				width: '100%',
				bgcolor: '#ff4f8f',
				p: 6,
			}}
		>
			<Container>
				<Grid container spacing={5}>
					{/* Store Locations */}
					<Grid item xs={12} sm={4}>
						<Typography
							variant="h6"
							color="text.primary"
							gutterBottom
						>
							Store Locations
						</Typography>
						{/* Add your store locations here */}
					</Grid>

					{/* Store Hours */}
					<Grid item xs={12} sm={4}>
						<Typography
							variant="h6"
							color="text.primary"
							gutterBottom
						>
							Store Hours
						</Typography>
						{/* Add your store hours here */}
					</Grid>

					{/* Contact Information */}
					<Grid item xs={12} sm={4}>
						<Typography
							variant="h6"
							color="text.primary"
							gutterBottom
						>
							Contact Us
						</Typography>
						{/* Add your contact information here */}
					</Grid>

					{/* Follow Us Section */}
					<Grid item xs={12}>
						<Typography
							variant="h6"
							color="text.primary"
							gutterBottom
						>
							Follow us on
						</Typography>
						<Box
							sx={{
								mt: 1,
								display: 'flex',
								justifyContent: 'center',
							}}
						>
							<Link href="https://facebook.com" color="inherit">
								<Facebook />
							</Link>
							<Link href="https://twitter.com" color="inherit">
								<Twitter />
							</Link>
							<Link href="https://instagram.com" color="inherit">
								<Instagram />
							</Link>
						</Box>
					</Grid>

					{/* Google Map */}

					{/* Newsletter Subscription Form */}
					<Grid item xs={12}>
						{/* Add your subscription form here */}
					</Grid>

					{/* Column of Links */}
					<Grid item xs={12}>
						{/* Add your links here */}
						<Link
							component={RouterLink}
							to="/terms"
							color="inherit"
							style={{ marginRight: '20px' }}
						>
							Terms and Conditions
						</Link>
						<Link
							component={RouterLink}
							to="/privacypolicy"
							color="inherit"
						>
							Privacy Policy
						</Link>
					</Grid>

					{/* Copyright Information */}
					<Grid item xs={12}>
						<Typography
							variant="body2"
							color="text.secondary"
							align="center"
						>
							{'Copyright © '}
							<Link
								color="inherit"
								href="https://your-website.com/"
							>
								Your Website
							</Link>{' '}
							{new Date().getFullYear()}
							{'.'}
						</Typography>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
}
