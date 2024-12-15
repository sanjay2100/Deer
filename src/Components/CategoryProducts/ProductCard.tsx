import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import './ProductCard.css'
type img = {
  path: string,
  filename: string,
  mimetype: string,

}

type Props = {
  name: string,
  price: number,
  images: img[]
}

const ProductCard = (props: Props) => {
  const url: string = import.meta.env.VITE_AUTH_URL

  return (
    <Box className='card-outer' sx={{ backgroundColor: 'whitesmoke', borderRadius: '10px', border: '0.8px solid #ebebeb' }}>
      <Stack>

        <Box sx={{ borderRadius: '10px 10px 0px 0px', overflow: 'hidden' }}>
          <img className='card-image' src={`${url}/image/${props.images[0].filename}`} alt={props.name} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
        </Box>
        <Box padding={3}>
          <Stack sx={{ textAlign: 'left' }}>
            <Typography variant='h4' sx={{ fontSize: '18px', fontWeight: 650 }}>{props.name}</Typography>
            <Typography variant='h6' sx={{ fontSize: '14px', color: 'green', fontWeight: 650 }}>₹
              {props.price}</Typography>
          </Stack>
        </Box>
      </Stack>
    </Box>
  )
}

export default ProductCard