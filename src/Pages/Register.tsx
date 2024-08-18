import React from 'react'
import TextField from '@mui/material/TextField';

type Props = {}

 const Register=({}: Props)=> {
  return (
    <div className="grid grid-cols-12 h-screen">
        <div className="hidden md:block md:col-span-5 bg-amber-200">
            <h2>Image</h2>
        </div>
        <div className="grid grid-cols-6 col-span-12 md:col-span-7 bg-zinc-100  content-center">
            
            <div className='col-start-2 col-span-4 bg-slate-50 h-fit rounded-md flex-col space-y-2 justify-start p-3 h-96'>
                <h1 className='font-sans font-semibold'>Register</h1>
                <TextField id="outlined-basic" label="Mobile Number" variant="filled" fullWidth size='small'/>
                <TextField id="outlined-basic" label="Password" variant="filled" fullWidth size='small'/>
            </div>
        </div>
    </div>
  )
}


export default Register