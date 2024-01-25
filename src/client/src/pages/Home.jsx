import React from 'react';
import ProductCard from '../components/ProductCard';

function Home() {
	// Example product data
	const product = {
		name: 'Sample Product',
		description: 'This is a sample product',
		price: '$9.99',
		rating: 4,
		image: 'sample-image-url.jpg',
	};

	return <ProductCard product={product} />;
}

export default Home;
