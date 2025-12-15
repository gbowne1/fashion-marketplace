import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Button, Toolbar, Typography, IconButton, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function Navbar() {
	return (
		<AppBar style={{ background: '#ff4f8f' }} position="fixed">
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
				{/* Title/Home Link */}
				<Typography
					variant="h6"
					component={Link}
					to="/"
					sx={{ 
						flexGrow: 1, 
						textAlign: 'left',
						color: 'inherit',
						textDecoration: 'none'
					}}
				>
					Silky Dreams Lingerie
				</Typography>
				
				{/* Navigation Links */}
				<Box sx={{ display: { xs: 'none', md: 'flex' } }}>
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
				</Box>

				{/* Shopping Cart Icon */}
				<IconButton
					component={Link}
					to="/cart"
					color="inherit"
					sx={{ ml: 2 }}
				>
					<ShoppingCartIcon />
				</IconButton>
			</Toolbar>
		</AppBar>
	);
}
