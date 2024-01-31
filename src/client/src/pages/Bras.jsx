import React, { useEffect, useState } from 'react';
import axios from 'axios'; // or use fetch API
import ProductCard from '../components/ProductCard';

function Bras() {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		axios
			.get('/api/products/bras') // replace with your API endpoint
			.then((response) => {
				setProducts(response.data);
			})
			.catch((error) => {
				console.error('Error fetching products: ', error);
			});
	}, []);

	return (
		<div className="products-container">
			{products.map((product) => (
				<ProductCard key={product._id} product={product} />
			))}
		</div>
	);
}

export default Bras;
