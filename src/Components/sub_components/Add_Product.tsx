import { Box, Button, FormHelperText, Grid, Stack, TextField, Typography } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import BackdropLoader from '../Loader';
import AlertSnackBar from '../Alert';
import { GetCategories } from '../../Api/Categories';
import { TbCameraUp } from "react-icons/tb";
import { styled } from '@mui/material/styles';
import { IoCloseCircle } from "react-icons/io5";
import { useForm, SubmitHandler } from "react-hook-form"
import { useDispatch, useSelector } from 'react-redux';
import { AddProduct } from '../../Api/VendorApi';

type Props = {}

type Inputs = {
    name: string
    price: number,
    description: string,
    category: string,
    quantity: number,
    images: File[]
  }

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

export default function Add_Product({ }: Props) {
    const [PostData, setPostData] = useState({ name: '', price: "", description: "", category: "", quantity: "", images: [] })
    const [AlertMessage, setAlertMessage] = useState<null | string>(null)
    const [AlertType, setAlertType] = useState<null | string>(null)
    const [AlertOpen, setAlertOpen] = useState<boolean>(false)
    const [loading, setLoading] = useState(false)
    const [categories, setCategories] = useState([])
    const selectref=useRef<HTMLSelectElement|string>("")
    const state=useSelector((state:any)=>state.user_info)
    const dispatch=useDispatch()

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm<Inputs>()
      const onSubmit: SubmitHandler<Inputs> = (data) => {
        if(PostData.images.length<5){
            handleAlertOpen("Please upload at least 5 images", "error")
            return
        }
        else{
            // console.log({...data,"images":PostData.images});
            AddProduct({...data,"images":PostData.images},setLoading,handleAlertOpen,reset)
            setPostData({...PostData,images:[]})
            
        }
      }

   

    console.log("errors",errors);
    

    const handleAlertClose = () => {
        setAlertOpen(false)
    }

    const handleAlertOpen = (message: string, type: string) => {
        setAlertMessage(message)
        setAlertType(type)
        setAlertOpen(true)
    }

    useEffect(() => {
        GetCategories(setLoading, setCategories, handleAlertOpen,dispatch)
    }, [])

    const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
        if (event.target.files) {
            const image: File | null = event.target.files[0] as File
            const newImages: any = [...PostData.images]
            newImages[index] = image
            setPostData({ ...PostData, images: newImages })
        }

    }

    const handleImageRemove = (index:number) => {
        const newImages: any = [...PostData.images]
        newImages.splice(index, 1)
        setPostData({...PostData, images: newImages })
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container gap={2} >
            <BackdropLoader open={loading} />
            <AlertSnackBar open={AlertOpen} message={AlertMessage} severity={AlertType} handleClose={handleAlertClose} />
            <Grid container>
                <Grid item xl={3} lg={3} sm={12} xs={12}>
                <Typography variant='h6' sx={{fontSize:'14px',fontWeight:600}}>Category</Typography>
                    <FormControl fullWidth error={errors.category?true:false} size='small'>
                        <Select
                            labelId="demo-simple-select-label"
                            {...register("category",{required:"Category is required"})}
                            sx={{backgroundColor:'#fff'}}
                            ref={selectref}
                        >
                            {
                                categories ?
                                    categories.map((category: any) => (
                                        <MenuItem key={category._id} value={category._id}>{category.name}</MenuItem>
                                    ))
                                    :
                                    <MenuItem value={0}>Loading...</MenuItem>
                            }
                            
                        </Select>
                        <FormHelperText>
                            {errors.category?.message}
                        </FormHelperText>
                    </FormControl>
                </Grid>
            </Grid>
            <Grid item xl={3} lg={3} sm={12} xs={12}>
                <Typography variant='h6' sx={{fontSize:'14px',fontWeight:600}}>Name</Typography>
                <TextField
                    size='small'
                    fullWidth
                    error={errors.name?true:false}
                    helperText={errors.name?.message}
                    sx={{backgroundColor:'#fff'}}
                    FormHelperTextProps={{
                        sx: { color: 'red' }  // Change the color to your desired value
                    }}
                    {...register("name",{required:"Name is required"})}
                />
            </Grid>
            <Grid item xl={3} lg={3} sm={12} xs={12}>
                <Typography variant='h6' sx={{fontSize:'14px',fontWeight:600}}>Price</Typography>
                <TextField
                    size='small'
                    fullWidth
                    sx={{backgroundColor:'#fff'}}
                    error={errors.price?true:false}
                    helperText={errors.price?.message}
                    FormHelperTextProps={{
                        sx: { color: 'red' }  // Change the color to your desired value
                    }}
                    {...register("price",{required:"Price is required",pattern:{ value:/^[0-9]+$/i,message:"price must be a number" }})}
                />
            </Grid>
            <Grid item xl={3} lg={3} sm={12} xs={12}>
                <Typography variant='h6' sx={{fontSize:'14px',fontWeight:600}}>Quantity</Typography>
                <TextField
                    size='small'
                    fullWidth
                    sx={{backgroundColor:'#fff'}}
                    error={errors.quantity?true:false}
                    helperText={errors.quantity?.message}
                    FormHelperTextProps={{
                        sx: { color: 'red' }  // Change the color to your desired value
                    }}
                    {...register("quantity",{required:"Quantity is required",pattern:{ value:/^[0-9]+$/i,message:"Quantity must be a number" }} )}
                />
            </Grid>
            <Grid item xl={9.4} lg={9.4} sm={12} xs={12}>
                <Typography variant='h6' sx={{fontSize:'14px',fontWeight:600}}>Description</Typography>
                <TextField
                    size='small'
                    fullWidth
                    sx={{backgroundColor:'#fff'}}
                    error={errors.description?true:false}
                    helperText={errors.description?.message}
                    FormHelperTextProps={{
                        sx: { color: 'red' }  // Change the color to your desired value
                    }}
                    {...register("description",{required:"Description is required"})}
                />
            </Grid>
            <Grid container gap={1.5} mt={1}>
                {

                    [...Array(5)].map((item, index: number) => {
                        return (PostData.images[index] ?
                            <Grid item xl={1} lg={1} md={2} sm={2} xs={2}>
                                <Box sx={{ position: 'relative',aspectRatio: 1, border: '0.8px solid #dedcd7', borderRadius: '3px' }}>
                                    <Box sx={{ position: 'absolute', top: '-10px', right: '-10px', cursor: 'pointer' ,color:'#e81207'}} onClick={()=>handleImageRemove(index)}>
                                        <IoCloseCircle size={18} />
                                    </Box>
                                    <Stack sx={{objectFit:"contain"}} height="100%" justifyContent="stretch" alignItems="stretch">
                                        <img
                                            src={URL.createObjectURL(PostData.images[index])}
                                            alt="Product Image"
                                            style={{ width: '100%', height: '100%' ,objectFit:"cover"}}
                                        />
                                    </Stack>
                                </Box>
                            </Grid>
                            :
                            <Grid item xl={1} lg={1} md={2} sm={2} xs={2}>
                                <Box sx={{ aspectRatio: 1, border: '0.8px solid #dedcd7', borderRadius: '3px' ,backgroundColor:"#fff"}}>
                                    <Stack height="100%" justifyContent="stretch" alignItems="stretch">
                                        <Button
                                            component="label"
                                            role={undefined}
                                            tabIndex={-1}
                                            sx={{ height: '100%', color: "#553eed" ,fontSize:"30px"}}

                                        >
                                            <TbCameraUp />
                                            <VisuallyHiddenInput
                                                type="file"
                                                onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleFileUpload(event, index)}
                                                multiple
                                            />
                                        </Button>
                                    </Stack>
                                </Box>
                            </Grid>)
                    }

                    )
                }
                <Grid container alignItems="flex-end" justifyContent="center" mt={1}>
                <Grid item md={2} xs={12}>
                    <Button
                        fullWidth
                        sx={{borderRadius:'10px',padding:0.8,fontWeight:650}} 
                        color='primary'
                        type='submit'
                        variant='contained'
                    >
                        Add Product
                    </Button>
                </Grid>
                </Grid>
            </Grid>

        </Grid>
        </form>
    )
}