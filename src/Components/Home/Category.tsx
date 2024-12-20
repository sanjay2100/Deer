import { Avatar, Box, Grid, Skeleton, Stack, Typography } from '@mui/material'
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
    <Grid paddingInline={5} textAlign='left' mb={10}>
      <Typography variant='h5' sx={{fontWeight:500,mb:2}}>Category</Typography>
    <Grid container  gap={5} justifyContent={Array.isArray(props.menues)&&props.menues.length>=5?"space-between":"flex-start"}>
      {
        props.menues?
        props.menues && props.menues.slice(props.menues.length - 5, props.menues.length).map((item, index) => (
          // <Stack justifyContent="center" alignItems="center" key={index}>
          //     <Avatar sx={{ width: 100, height: 100 }} alt={"null"} src={arrayBufferToBlobUrl(item.image, 'image/jpeg')} />
          //     <Typography variant="h6">{item.name}</Typography>
          // </Stack>
          <Grid item xl={1.5} lg={1.5} md={2} xs={2} key={index} display="flex" flexDirection="column" alignItems="center" justifyContent="center" onClick={() => Nav(`/categories/${item._id}`)}>
            <Box sx={{
              borderRadius: '50%',
              width: '50%',
              background: `url(${url}/image/${item.image[0].filename})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
              cursor: 'pointer',
              aspectRatio:1/1
            }}>
           
            </Box>
            <Typography mt={1} textAlign={"center"} color="#252525" sx={{ opacity: '150%', fontSize: '18px' }}>{item.name}</Typography>

          </Grid>
        ))
        :
        [...Array(5)].map((item,index)=>(
          <Grid item xl={1} lg={1} md={2} xs={2} key={index}>
              <Stack justifyContent="center" alignItems="center" gap={1}>
                <Skeleton animation="wave" variant='circular' height={100} width={100}/>
                <Skeleton animation="wave" variant='rectangular' height={15} width="100%"/>
              </Stack>
          </Grid>
        ))

      }


    </Grid>
    </Grid>
  )
}


export default Category