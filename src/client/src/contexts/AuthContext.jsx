import React, { createContext, useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
// import axios from 'axios'; // For real API calls

export const AuthContext = createContext();

export const useAuth = () => {
	return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(null);
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		// In a real application, you'd check for a token/session in localStorage
		// or hit a server endpoint (e.g., /api/current_user)
		const token = localStorage.getItem('authToken');
		if (token) {
			// **MOCK: Assuming a valid token means user is logged in**
			// A real app would decode the token or verify it with the server.
			setCurrentUser({ id: 'user_123', email: 'test@example.com', name: 'Guest User' });
			setIsAuthenticated(true);
		}
		setLoading(false);
	}, []);

	const login = async (email, password) => {
		// Replace this with your actual API call to the server
		// const response = await axios.post('/api/login', { email, password });
		// localStorage.setItem('authToken', response.data.token);
		
		// **MOCK SUCCESS**
		if (email === 'test@example.com' && password === 'password123') {
			setCurrentUser({ id: 'user_123', email, name: 'Test User' });
			setIsAuthenticated(true);
			localStorage.setItem('authToken', 'mock_token_123');
			return { success: true };
		} else {
			throw new Error('Invalid credentials');
		}
	};

	const logout = () => {
		localStorage.removeItem('authToken');
		setCurrentUser(null);
		setIsAuthenticated(false);
	};

	const value = {
		currentUser,
		isAuthenticated,
		loading,
		login,
		logout,
	};

	return (
		<AuthContext.Provider value={value}>
			{!loading && children}
		</AuthContext.Provider>
	);
};

AuthProvider.propTypes = {
	children: PropTypes.node.isRequired,
};
