import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Home from './pages/Home';
import Lingerie from './pages/Lingerie';
import Bras from './pages/Bras';
import Panties from './pages/Panties';
import Hosiery from './pages/Hosiery';
import Shoes from './pages/Shoes';
import Best from './pages/Best';
import Activewear from './pages/Activewear';
import ShoppingCart from './pages/ShoppingCart';
import Footer from './components/Footer';

function App() {
	return (
		<Router>
			<div className="App">
				<AppBar style={{ background: '#ff00ff' }}>
					<Toolbar>
						<IconButton
							size="medium"
							edge="start"
							color="inherit"
							aria-label="menu"
							sx={{ mr: 2 }}
						>
							<MenuIcon />
						</IconButton>
						<Typography align={'center'}>
							Silky Dreams Lingerie
						</Typography>
						<Link to="/bras" color="inherit">
							Bras
						</Link>
						<Link to="/panties" color="inherit">
							Panties
						</Link>
						<Link to="/lingerie" color="inherit">
							Lingerie
						</Link>
						<Link to="/hosiery" color="inherit">
							Hosiery
						</Link>
						<Link to="/shoes" color="inherit">
							Shoes
						</Link>
						<Link to="/activewear" color="inherit">
							Activewear
						</Link>
						<Link to="/best" color="inherit">
							Best Sellers
						</Link>
					</Toolbar>
				</AppBar>

				<main className="App-main">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/lingerie" element={<Lingerie />} />
						<Route path="/bras" element={<Bras />} />
						<Route path="/panties" element={<Panties />} />
						<Route path="/hosiery" element={<Hosiery />} />
						<Route path="/shoes" element={<Shoes />} />
						<Route path="/best" element={<Best />} />
						<Route path="/activewear" element={<Activewear />} />
						<Route path="/cart" element={<ShoppingCart />} />
					</Routes>
				</main>
				<Footer className="footer" />
			</div>
		</Router>
	);
}

export default App;
