import { Box, Skeleton, Stack, Typography } from '@mui/material'
import React from 'react'

type img = {
  path: string,
  filename: string,
  mimetype: string,

}



const ProductCardSkeleton = () => {

  return (
    <Box sx={{ backgroundColor: 'whitesmoke', borderRadius: '10px', border: '0.8px solid #ebebeb' }}>
      <Stack>

        <Box sx={{ borderRadius: '10px 10px 0px 0px', overflow: 'hidden' }}>
          <Skeleton variant='rectangular' animation="wave" height="20vh"/>
        </Box>
        <Box padding={3}>
          <Stack sx={{ textAlign: 'left' }} gap={1}>
            <Skeleton variant='rectangular' animation="wave"/> 
            <Skeleton variant='rectangular' animation="wave"/>           
          </Stack>
        </Box>
      </Stack>
    </Box>
  )
}

export default ProductCardSkeleton