import { Avatar, Box, Grid, Stack, Typography } from '@mui/material'
import React, { useMemo } from 'react'
import { CategoryTypes } from '../../Types/categoryTypes'
import { GetCategoryImage } from '../../Api/Categories'
import { useNavigate } from 'react-router'

interface Props {
  menues: any[] | null
}

const Category = (props: Props) => {

  const url: string = import.meta.env.VITE_AUTH_URL


  const arrayBufferToBlobUrl = (arrayBuffer: any, mimeType: any) => {
    const uint8Array = new Uint8Array(arrayBuffer);
    const blob = new Blob([uint8Array], { type: mimeType });
    return URL.createObjectURL(blob);
  };

  const Nav = useNavigate()



  return (
    <Grid paddingInline={5} textAlign='center'>
      <Typography variant='h4' sx={{fontWeight:550,mb:2}}>Category</Typography>
    <Grid container  gap={5} justifyContent="space-between">
      {
        props.menues && props.menues.slice(props.menues.length - 5, props.menues.length).map((item, index) => (
          // <Stack justifyContent="center" alignItems="center" key={index}>
          //     <Avatar sx={{ width: 100, height: 100 }} alt={"null"} src={arrayBufferToBlobUrl(item.image, 'image/jpeg')} />
          //     <Typography variant="h6">{item.name}</Typography>
          // </Stack>
          <Grid item xl={2} lg={1.4} md={2} xs={12} key={index} onClick={() => Nav(`/categories/${item._id}`)}>
            <Box sx={{
              height: '30vh',
              borderRadius: '20px',
              width: '100%',
              background: `url(${url}/image/${item.image[0].filename})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
              cursor: 'pointer'
            }}>
              <Box sx={{
                textAlign: 'center',
                padding: '8px',
                opacity: '90%',
                background: 'linear-gradient(180deg,#252525,#252525)',
                backgroundBlendMode: 'multiply'
              }}>
                <Typography color="#fff" sx={{ opacity: '150%', fontSize: '18px' }}>{item.name}</Typography>
              </Box>
            </Box>
          </Grid>
        ))

      }


    </Grid>
    </Grid>
  )
}


export default Category