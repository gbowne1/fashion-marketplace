import { render, screen } from '@testing-library/react';
import App from './App';

// Mock the components used in App.js for simpler testing
jest.mock('./pages/Home', () => () => <div data-testid="home-page">Home Page</div>);
jest.mock('./pages/Lingerie', () => () => <div data-testid="lingerie-page">Lingerie Page</div>);
jest.mock('./pages/Bras', () => () => <div data-testid="bras-page">Bras Page</div>);
jest.mock('./pages/Panties', () => () => <div data-testid="panties-page">Panties Page</div>);
jest.mock('./pages/Hosiery', () => () => <div data-testid="hosiery-page">Hosiery Page</div>);
jest.mock('./pages/Shoes', () => () => <div data-testid="shoes-page">Shoes Page</div>);
jest.mock('./pages/Best', () => () => <div data-testid="best-page">Best Sellers Page</div>);
jest.mock('./pages/Activewear', () => () => <div data-testid="activewear-page">Activewear Page</div>);
jest.mock('./pages/ShoppingCart', () => () => <div data-testid="cart-page">Shopping Cart Page</div>);
jest.mock('./pages/TermsAndCondition', () => () => <div data-testid="terms-page">Terms Page</div>);
jest.mock('./pages/PrivacyPolicy', () => () => <div data-testid="privacy-page">Privacy Page</div>);
jest.mock('./components/Footer', () => () => <div data-testid="footer-component">Footer</div>);

// Mock the CartContext Provider for the component tree
jest.mock('./contexts/CartContext', () => ({
  CartContext: {
    Consumer: ({ children }) => children({ cartItems: [], addToCart: jest.fn(), removeFromCart: jest.fn() }),
  },
}));

describe('App Component', () => {
	test('renders the main app title', () => {
		render(<App />);
		const titleElement = screen.getByText(/Silky Dreams Lingerie/i);
		expect(titleElement).toBeInTheDocument();
	});

	test('renders the navigation links', () => {
		render(<App />);
		expect(screen.getByRole('link', { name: /Bras/i })).toBeInTheDocument();
		expect(screen.getByRole('link', { name: /Panties/i })).toBeInTheDocument();
		expect(screen.getByRole('link', { name: /Lingerie/i })).toBeInTheDocument();
		expect(screen.getByRole('link', { name: /Hosiery/i })).toBeInTheDocument();
		expect(screen.getByRole('link', { name: /Shoes/i })).toBeInTheDocument();
		expect(screen.getByRole('link', { name: /Activewear/i })).toBeInTheDocument();
		expect(screen.getByRole('link', { name: /Best Sellers/i })).toBeInTheDocument();
	});

	test('renders the Footer component', () => {
		render(<App />);
		const footerElement = screen.getByTestId('footer-component');
		expect(footerElement).toBeInTheDocument();
	});
});
