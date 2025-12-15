const mockProducts = [
	// --- LINGERIE ---
	{
		_id: 'prod_L001',
		name: 'The Midnight Slip',
		category: 'Lingerie',
		image: '/images/lingerie/midnight-slip.jpg', // Placeholder image path
		description: 'A luxurious silk slip with delicate lace trim, perfect for a special evening.',
		price: 79.99,
		rating: 4.8,
		details: {
			material: '100% Charmeuse Silk',
			color: 'Black, Sapphire Blue',
			sizes: ['XS', 'S', 'M', 'L', 'XL'],
			care: 'Hand wash cold',
		},
	},
	{
		_id: 'prod_L002',
		name: 'Floral Lace Teddy',
		category: 'Lingerie',
		image: '/images/lingerie/floral-teddy.jpg',
		description: 'All-over floral lace teddy with adjustable straps and snap closure at the gusset.',
		price: 55.00,
		rating: 4.5,
		details: {
			material: 'Nylon/Spandex Blend',
			color: 'Red, White, Rose Pink',
			sizes: ['S', 'M', 'L', 'XL'],
			care: 'Machine wash delicate',
		},
	},

	// --- BRAS ---
	{
		_id: 'prod_B001',
		name: 'Everyday Comfort Bra',
		category: 'Bras',
		image: '/images/bras/comfort-bra.jpg',
		description: 'A seamless, wire-free bra providing all-day comfort and light support.',
		price: 45.00,
		rating: 4.7,
		details: {
			type: 'T-Shirt Bra, Wire-Free',
			color: 'Nude, Black, Heather Grey',
			sizes: ['32A', '34B', '36C', '38D'],
			features: ['Seamless cups', 'Adjustable straps'],
		},
	},
	{
		_id: 'prod_B002',
		name: 'Seduction Push-Up',
		category: 'Bras',
		category: 'Best',
		image: '/images/bras/pushup-bra.jpg',
		description: 'Extreme lift push-up bra with memory foam cups and rhinestone embellishment.',
		price: 65.00,
		rating: 4.9,
		details: {
			type: 'Push-Up, Underwire',
			color: 'Scarlet Red, Black',
			sizes: ['32B', '34C', '36D', '38DD'],
			features: ['Memory foam padding', 'Front closure'],
		},
	},

	// --- PANTIES ---
	{
		_id: 'prod_P001',
		name: 'Invisible Thong Set',
		category: 'Panties',
		category: 'Best',
		image: '/images/panties/thong-set.jpg',
		description: 'Set of three laser-cut thongs for a completely smooth, invisible look under clothes.',
		price: 35.00,
		rating: 4.6,
		details: {
			style: 'Thong',
			color: 'Assorted Nudes',
			sizes: ['S', 'M', 'L'],
			features: ['No-show edges', 'Cotton gusset'],
		},
	},
	{
		_id: 'prod_P002',
		name: 'Classic Hipster Brief',
		category: 'Panties',
		image: '/images/panties/hipster-brief.jpg',
		description: 'Soft cotton hipster brief offering medium coverage and exceptional breathability.',
		price: 15.00,
		rating: 4.4,
		details: {
			style: 'Hipster Brief',
			color: 'White, Black, Blue',
			sizes: ['S', 'M', 'L', 'XL'],
			material: '95% Cotton, 5% Spandex',
		},
	},

	// --- HOSIERY ---
	{
		_id: 'prod_H001',
		name: 'Sheer Control Top Tights',
		category: 'Hosiery',
		image: '/images/hosiery/tights.jpg',
		description: 'Ultra sheer tights with a gentle control top for a smooth silhouette.',
		price: 22.00,
		rating: 4.3,
		details: {
			denier: 15,
			color: 'Nude, Coffee, Black',
			sizes: ['A', 'B', 'C', 'D'],
			type: 'Control Top',
		},
	},
	{
		_id: 'prod_H002',
		name: 'Over-the-Knee Silk Stockings',
		category: 'Hosiery',
		category: 'Best',
		image: '/images/hosiery/stockings.jpg',
		description: 'Elegant thigh-high silk stockings with a reinforced heel and toe.',
		price: 39.00,
		rating: 4.8,
		details: {
			denier: 50,
			color: 'Black, Burgundy',
			sizes: ['S/M', 'L/XL'],
			type: 'Thigh-High',
		},
	},

	// --- SHOES ---
	{
		_id: 'prod_S001',
		name: 'Stiletto Pump - Patent',
		category: 'Shoes',
		image: '/images/shoes/stiletto-pump.jpg',
		description: 'A classic 4-inch stiletto pump in glossy patent leather.',
		price: 120.00,
		rating: 4.7,
		details: {
			heel: '4 inches',
			color: 'Black, Nude',
			sizes: [5, 6, 7, 8, 9, 10],
			material: 'Patent Leather',
		},
	},
	{
		_id: 'prod_S002',
		name: 'Lace Bridal Heels',
		category: 'Shoes',
		image: '/images/shoes/bridal-heels.jpg',
		description: 'Delicate lace-covered peep-toe heels perfect for wedding events.',
		price: 150.00,
		rating: 4.6,
		details: {
			heel: '3 inches',
			color: 'Ivory',
			sizes: [5, 6, 7, 8, 9, 10],
			material: 'Satin and Lace',
		},
	},

	// --- ACTIVEWEAR ---
	{
		_id: 'prod_A001',
		name: 'High-Waist Yoga Leggings',
		category: 'Activewear',
		category: 'Best',
		image: '/images/activewear/leggings.jpg',
		description: 'Buttery soft, sweat-wicking leggings with a supportive high waistband and side pocket.',
		price: 59.99,
		rating: 4.9,
		details: {
			material: 'Nylon/Lycra Performance Fabric',
			color: 'Forest Green, Navy, Black',
			sizes: ['XS', 'S', 'M', 'L'],
			features: ['Squat-proof', 'Hidden key pocket'],
		},
	},
	{
		_id: 'prod_A002',
		name: 'V-Neck Sports Bra',
		category: 'Activewear',
		image: '/images/activewear/sports-bra.jpg',
		description: 'Medium-impact sports bra with a flattering V-neck cut and cross-back straps.',
		price: 39.99,
		rating: 4.5,
		details: {
			support: 'Medium Impact',
			color: 'Coral, Charcoal, White',
			sizes: ['XS', 'S', 'M', 'L'],
			features: ['Removable padding', 'Moisture-wicking'],
		},
	},
];

export default mockProducts;
