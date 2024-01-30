import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AppBar, Button, Toolbar, Typography, IconButton } from '@mui/material';
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
import TermsAndCondition from './pages/TermsAndCondition';
import PrivacyPolicy from './pages/PrivacyPolicy';

function App() {
	return (
		<Router>
			<div className="App">
				<AppBar style={{ background: '#ff4f8f' }}>
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
						<Button
							component={Link}
							to="/bras"
							sx={{ color: 'inherit', margin: '0 10px' }}
						>
							Bras
						</Button>
						<Button
							component={Link}
							to="/panties"
							sx={{ color: 'inherit', margin: '0 10px' }}
						>
							Panties
						</Button>
						<Button
							component={Link}
							to="/lingerie"
							sx={{ color: 'inherit', margin: '0 10px' }}
						>
							Lingerie
						</Button>
						<Button
							component={Link}
							to="/hosiery"
							sx={{ color: 'inherit', margin: '0 10px' }}
						>
							Hosiery
						</Button>
						<Button
							component={Link}
							to="/shoes"
							sx={{ color: 'inherit', margin: '0 10px' }}
						>
							Shoes
						</Button>
						<Button
							component={Link}
							to="/activewear"
							sx={{ color: 'inherit', margin: '0 10px' }}
						>
							Activewear
						</Button>
						<Button
							component={Link}
							to="/best"
							sx={{ color: 'inherit', margin: '0 10px' }}
						>
							Best Sellers
						</Button>
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
						<Route path="/terms" element={<TermsAndCondition />} />
						<Route
							path="/privacypolicy"
							element={<PrivacyPolicy />}
						/>
					</Routes>
				</main>
				<Footer className="footer" />
			</div>
		</Router>
	);
}

export default App;
