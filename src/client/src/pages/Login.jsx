import React, { useState } from 'react';
import {
	Container,
	Typography,
	TextField,
	Button,
	Box,
	CircularProgress,
	Alert,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
// import { useAuth } from '../contexts/AuthContext'; // Placeholder for actual auth context

export default function Login() {
	// const { login } = useAuth(); // If you had an AuthContext
	const navigate = useNavigate();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError(null);
		setIsLoading(true);

		// --- Mock Login Logic ---
		// In a real app, this would be an API call, e.g., axios.post('/api/login')
		if (email === 'test@example.com' && password === 'password123') {
			try {
				// await login(email, password); // Actual call to your auth context
				
				// Simulate API delay
				await new Promise(resolve => setTimeout(resolve, 1000));

				console.log('Login successful for:', email);
				navigate('/'); // Redirect to home page on success
			} catch (err) {
				setError('Failed to log in. Please check your credentials.');
			}
		} else {
			// Simulate API delay
			await new Promise(resolve => setTimeout(resolve, 1000));
			setError('Invalid email or password.');
		}
		
		setIsLoading(false);
		// --- End Mock Login Logic ---
	};

	return (
		<Container maxWidth="xs">
			<Box sx={{ mt: 10, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
				<Typography component="h1" variant="h5" gutterBottom>
					Sign In
				</Typography>
				
				{error && (
					<Alert severity="error" sx={{ width: '100%', mb: 2 }}>
						{error}
					</Alert>
				)}

				<Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
					<TextField
						margin="normal"
						required
						fullWidth
						id="email"
						label="Email Address"
						name="email"
						autoComplete="email"
						autoFocus
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						data-testid="email-input"
					/>
					<TextField
						margin="normal"
						required
						fullWidth
						name="password"
						label="Password"
						type="password"
						id="password"
						autoComplete="current-password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						data-testid="password-input"
					/>
					
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						disabled={isLoading}
						sx={{ mt: 3, mb: 2, bgcolor: '#ff4f8f', '&:hover': { bgcolor: '#e0467c' } }}
						data-testid="login-button"
					>
						{isLoading ? <CircularProgress size={24} color="inherit" /> : 'Log In'}
					</Button>
				</Box>
			</Box>
		</Container>
	);
}
