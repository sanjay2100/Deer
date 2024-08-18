import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import PrimaryButton from '../Components/Buttons';

type Props = {}

 const Register=({}: Props)=> {
  return (
    <div className="grid grid-cols-12 h-screen">
        <div className="hidden md:block md:col-span-5 bg-gradient-to-br from-emerald-300 to-emerald-700 ">
            <h2>Image</h2>
        </div>
        <div className="grid grid-cols-6 col-span-12 md:col-span-7 bg-zinc-100 p-12" >
            <div className='col-span-6 h-fit'>
                <h3 className='text-2xl font-semibold font-sans'>Register</h3>
                <h4 className='text-sm col-span-6 text-base font-sans text-gray-500'>Register with your data to proceed</h4>
            </div>
            <div className="col-start-1 col-span-5 bg-slate-50  rounded-xl  p-8 h-96">
                <div className='flex flex-col justify-between h-full'>
                    <div className="flex-col space-y-5">
                        <TextField id="outlined-basic" label="Name" variant="standard" fullWidth />
                        <TextField id="outlined-basic" label="Mobile Number" variant="standard" fullWidth />
                        <TextField id="outlined-basic" label="Email" variant="standard" fullWidth />
                    </div>
                    <PrimaryButton value={"SUBMIT"} fullWidth={true} />
                </div>
            </div>
        </div>
    </div>
  )
}


export default Register