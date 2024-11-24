import { Box, Grid, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import { getProductsByCategory } from '../Api/Products'
import { useParams } from 'react-router'
import BackdropLoader from '../Components/Loader'
import ProductCard from '../Components/CategoryProducts/ProductCard'
import Pagination from '@mui/material/Pagination';
import { useNavigate } from 'react-router-dom'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { grey, orange } from '@mui/material/colors'

type Props = {}

interface categoryProduct {
  category_name: string,
  products: object[],
  total: number
}

const CategoryProducts = ({ }: Props) => {
  const [Data, setData] = useState<null | categoryProduct>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [Page, setPage] = useState<number>(1)
  const itemsperpage = 10;
  const params = useParams()
  const[SortingOption,setSortingOption]=useState("name")

  console.log("data", Data);
  const Nav = useNavigate()

  useEffect(() => {
    getProductsByCategory(params.id as string, setData, setIsLoading, Page)
  }, [])

  const handleChangeSorting=(value:string)=>{
    setSortingOption(value)
  }

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <Grid container>
      <BackdropLoader open={isLoading} />
      <Grid item xs={12}>
        <Header />
      </Grid>
      <Grid container >
        <Grid item xl={2} lg={2} md={2} xs={0} height='92vh' >
          <Stack sx={{ backgroundColor: 'whitesmoke', height: '100%' }} padding={2}>
            <Typography variant='h5' sx={{ fontSize: '18px' ,fontWeight:650}}>Sort by</Typography>
            <Box ml={2}>
              <FormControl sx={{
                    color: grey[800],
                    '&.Mui-checked': {
                      color: grey[600],
                    },
                  }}>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="name"
                  name="radio-buttons-group"
                  value={SortingOption}
                  onChange={(e)=>handleChangeSorting(e.target.value)}
                  sx={{
                    color: grey[800],
                    '&.Mui-checked': {
                      color: grey[600],
                    },
                  }}
                >
                  <FormControlLabel value="name" control={<Radio sx={{
                    color: orange[600],
                    '&.Mui-checked': {
                      color: orange[800],
                    },
                  }}/>} label="Name" />
                  <FormControlLabel value="price" control={<Radio sx={{
                    color: orange[600],
                    '&.Mui-checked': {
                      color: orange[800],
                    },
                  }}/>} label="Price" />
                </RadioGroup>
              </FormControl>
            </Box>
          </Stack>
        </Grid>
        <Grid item xl={10} lg={10} md={10} xs={12} padding={3}>

          <Stack justifyContent="space-between" height="100%">
            <Grid container gap={5}>
              {
                Data && Array.isArray(Data.products) &&
                Data.products.sort((a:any,b:any)=>{
                 return SortingOption==="price"?
                    a.price-b.price
                    :
                    a.name.localeCompare(b.name)
                }).map((product: any, index: number) => (
                  <Grid item key={index} xl={2} lg={3} md={4} xs={12} sx={{ cursor: 'pointer' }} onClick={() => Nav(`/product`, { state: { product_id: product._id } })}>
                    <ProductCard name={product.name} price={product.price} images={product.images} />
                  </Grid>
                ))
              }

            </Grid>
            <Pagination count={Data ? Math.ceil(Data.total / itemsperpage) : 0} page={Page} onChange={handleChange} />

          </Stack>
        </Grid>

      </Grid>
    </Grid>
  )
}


export default CategoryProducts