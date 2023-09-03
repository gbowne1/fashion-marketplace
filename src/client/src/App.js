import { AppBar, Toolbar, IconButton, Switch } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import Home from './pages/Home';
import Product from './pages/Product';

function App() {
	return (
		<div>
			<BrowserRouter>
				<AppBar position="static">
					<Toolbar>
						<IconButton
							edge="start"
							color="inherit"
							aria-label="menu"
						>
							<MenuIcon />
						</IconButton>
						{/* Add other components to the toolbar */}
						<Switch />
					</Toolbar>
				</AppBar>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/products/:id" element={<Product />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
