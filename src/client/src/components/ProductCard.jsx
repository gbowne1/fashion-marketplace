import React from 'react'
import {Card, CardMedia, CardContent, CardActions, Typography, Button} from '@mui/material'
import {Rating} from '@mui/material'

function ProductCard(props) {
    const {product} = props

    return (
        <Card sx={{maxWidth: 345}}>
            <CardMedia component='img' height='140' image={product.image} alt={product.name} />
            <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                    {product.name}
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                    {product.description}
                </Typography>
                <Typography variant='h6' color='text.secondary'>
                    {product.price}
                </Typography>
                <Rating name='product-rating' value={product.rating} readOnly />
            </CardContent>
            <CardActions>
                <Button size='small' color='primary'>
                    Add to cart
                </Button>
                <Button size='small' color='secondary'>
                    Favorite
                </Button>
                <Button size='small' color='primary'>
                    Learn More
                </Button>
            </CardActions>
        </Card>
    )
}

export default ProductCard
