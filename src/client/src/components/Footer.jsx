import * as React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import InstagramIcon from '@mui/icons-material/Instagram'
import '../styles/Footer.css'

export default function Footer() {
    return (
        <Box sx={{bgcolor: 'background.paper', p: 6}} component='footer'>
            <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                <Box>
                    <Typography variant='subtitle1' color='text.secondary'>
                        Silky Dreams Lingerie
                    </Typography>
                    <Link href='#' color='inherit'>
                        Terms of Service
                    </Link>
                    <Link href='#' color='inherit'>
                        Privacy Policy
                    </Link>
                    <Link href='#' color='inherit'>
                        About Us
                    </Link>
                </Box>
                <Box>
                    <Typography variant='subtitle1' color='text.secondary'>
                        Follow us on
                    </Typography>
                    <Box sx={{mt: 1}}>
                        <Link href='#' color='inherit'>
                            <FacebookIcon />
                        </Link>
                        <Link href='#' color='inherit'>
                            <TwitterIcon />
                        </Link>
                        <Link href='#' color='inherit'>
                            <InstagramIcon />
                        </Link>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
