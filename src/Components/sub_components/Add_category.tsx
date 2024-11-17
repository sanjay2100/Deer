import { Box, Button, FormHelperText, Grid, Stack, TextField, Typography } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import BackdropLoader from '../Loader';
import AlertSnackBar from '../Alert';
import { AddCategory, GetCategories } from '../../Api/Categories';
import { TbCameraUp } from "react-icons/tb";
import { styled } from '@mui/material/styles';
import { IoCloseCircle } from "react-icons/io5";
import { useForm, SubmitHandler } from "react-hook-form"
import { useDispatch, useSelector } from 'react-redux';
import { AddProduct } from '../../Api/VendorApi';

type Props = {}

type Inputs = {
    name: string
    images: File|null
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

export default function Add_Category({ }: Props) {
    const [PostData, setPostData] = useState<Inputs>({ name: '', images: null })
    const [AlertMessage, setAlertMessage] = useState<null | string>(null)
    const [AlertType, setAlertType] = useState<null | string>(null)
    const [AlertOpen, setAlertOpen] = useState<boolean>(false)
    const [loading, setLoading] = useState(false)
    const dispatch=useDispatch()
    const [categories, setCategories] = useState([])
    const selectref=useRef<HTMLSelectElement|string>("")
    const state=useSelector((state:any)=>state.user_info)

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm<Inputs>()
      const onSubmit: SubmitHandler<Inputs> = (data) => {
        if(!PostData.images){
            handleAlertOpen("Please upload images", "error")
            return
        }
        else{
            // console.log({...data,"images":PostData.images});
            AddCategory({...data,"file":PostData.images},setLoading,handleAlertOpen,reset)
            setPostData({...PostData,images:null})
            
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

    const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            const image: File | null = event.target.files[0] as File
            // newImages[index] = image
            setPostData({ ...PostData, images: image })
        }

    }

    const handleImageRemove = () => {
        
        setPostData({...PostData, images: null })
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
    <Grid container spacing={2} justifyContent="flex-start" alignItems="flex-start">
        <BackdropLoader open={loading} />
        <AlertSnackBar open={AlertOpen} message={AlertMessage} severity={AlertType} handleClose={handleAlertClose} />

        <Grid item xl={4} lg={4} sm={12} xs={12}>
            <Typography variant='h6' sx={{ fontSize: '14px', fontWeight: 600 }}>Name</Typography>
            <TextField
                size='small'
                fullWidth
                error={!!errors.name}
                helperText={errors.name?.message}
                sx={{ backgroundColor: '#fff' }}
                FormHelperTextProps={{ sx: { color: 'red' } }}
                {...register("name", { required: "Name is required" })}
            />
        </Grid>

        <Grid container ml={1} mt={1}>
            {[...Array(1)].map((item, index) => (
                PostData.images ?
                    <Grid key={index} item xl={1} lg={1} md={2} sm={2} xs={2}>
                        <Box sx={{ position: 'relative', aspectRatio: 1, border: '0.8px solid #dedcd7', borderRadius: '3px' }}>
                            <Box
                                sx={{ position: 'absolute', top: '-10px', right: '-10px', cursor: 'pointer', color: '#e81207' }}
                                onClick={() => handleImageRemove()}
                            >
                                <IoCloseCircle size={18} />
                            </Box>
                            <Stack sx={{ objectFit: "contain" }} height="100%" justifyContent="stretch" alignItems="stretch">
                                <img
                                    src={URL.createObjectURL(PostData.images)}
                                    alt="Product Image"
                                    style={{ width: '100%', height: '100%', objectFit: "cover" }}
                                />
                            </Stack>
                        </Box>
                    </Grid>
                    :
                    <Grid key={index} item xl={1} lg={1} md={1} sm={2} xs={2}>
                        <Box sx={{ aspectRatio: 1, border: '0.8px solid #dedcd7', borderRadius: '3px', backgroundColor: "#fff" }}>
                            <Stack height="100%" justifyContent="stretch" alignItems="stretch">
                                <Button
                                    component="label"
                                    role={undefined}
                                    tabIndex={-1}
                                    sx={{ height: '100%', color: "#553eed", fontSize: "30px", width: "100%" }}
                                >
                                    <TbCameraUp />
                                    <VisuallyHiddenInput
                                        type="file"
                                        onChange={(event) => handleFileUpload(event)}
                                        multiple
                                    />
                                </Button>
                            </Stack>
                        </Box>
                    </Grid>
            ))}
        </Grid>

        <Grid container alignItems="flex-end" justifyContent="center" mt={1}>
            <Grid item md={2} xs={12}>
                <Button
                    fullWidth
                    sx={{ borderRadius: '10px', padding: 0.8, fontWeight: 650 }}
                    color='primary'
                    type='submit'
                    variant='contained'
                >
                    Add Category
                </Button>
            </Grid>
        </Grid>
    </Grid>
</form>

    )
}