import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import Login from '../src/client/src/pages/Login';

// Mock the entire react-router-dom module to control navigation
// We mock useNavigate to see if it was called on success
const mockedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'),
	useNavigate: () => mockedNavigate,
}));

// A test wrapper component to handle the Router context for Login
const LoginWrapper = () => (
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<div>Home Page</div>} />
			<Route path="/login" element={<Login />} />
		</Routes>
	</BrowserRouter>
);

describe('Login Component', () => {
	const user = userEvent.setup();

	beforeEach(() => {
		// Reset the mock before each test
		mockedNavigate.mockClear();
		// Set the initial route for testing the Login component
		window.history.pushState({}, 'Login Page', '/login');
	});

	test('renders the login form elements correctly', () => {
		render(<LoginWrapper />);
		
		expect(screen.getByRole('heading', { name: /sign in/i })).toBeInTheDocument();
		expect(screen.getByLabelText(/email address/i)).toBeInTheDocument();
		expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
		expect(screen.getByRole('button', { name: /log in/i })).toBeInTheDocument();
	});

	test('updates input fields on user entry', async () => {
		render(<LoginWrapper />);
		const emailInput = screen.getByTestId('email-input');
		const passwordInput = screen.getByTestId('password-input');

		await user.type(emailInput, 'test@user.com');
		await user.type(passwordInput, 'mysecret');

		expect(emailInput).toHaveValue('test@user.com');
		expect(passwordInput).toHaveValue('mysecret');
	});

	// --- Successful Login Test ---
	test('shows loading state and navigates to home on successful login', async () => {
		render(<LoginWrapper />);
		
		const emailInput = screen.getByTestId('email-input');
		const passwordInput = screen.getByTestId('password-input');
		const loginButton = screen.getByTestId('login-button');

		// 1. Enter valid (mocked) credentials
		await user.type(emailInput, 'test@example.com');
		await user.type(passwordInput, 'password123');
		
		// 2. Click submit
		await user.click(loginButton);

		// 3. Check for loading state immediately after clicking
		expect(loginButton).toBeDisabled();
		// Wait for the simulated async action to complete (1000ms delay + processing time)
		await waitFor(() => {
			// 4. Check for success action: navigation
			expect(mockedNavigate).toHaveBeenCalledWith('/');
		}, { timeout: 1500 });
		
		// 5. Ensure button is no longer disabled after completion
		expect(loginButton).not.toBeDisabled();
	});

	// --- Failed Login Test ---
	test('shows error message on failed login attempt', async () => {
		render(<LoginWrapper />);
		
		const emailInput = screen.getByTestId('email-input');
		const passwordInput = screen.getByTestId('password-input');
		const loginButton = screen.getByTestId('login-button');

		// 1. Enter invalid credentials
		await user.type(emailInput, 'wrong@email.com');
		await user.type(passwordInput, 'wrongpassword');
		
		// 2. Click submit
		await user.click(loginButton);

		// 3. Check for loading state
		expect(loginButton).toBeDisabled();

		// Wait for the simulated async action to complete
		await waitFor(() => {
			// 4. Check for error message
			expect(screen.getByRole('alert')).toHaveTextContent('Invalid email or password.');
		}, { timeout: 1500 });
		
		// 5. Ensure button is no longer disabled and navigation was NOT called
		expect(loginButton).not.toBeDisabled();
		expect(mockedNavigate).not.toHaveBeenCalled();
	});
});
