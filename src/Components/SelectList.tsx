import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select   from '@mui/material/Select';
import { SelectType } from '../Types/inputTypes';



 const SelectList=(props:SelectType)=> {
  

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{props.displayName}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={props.value?props.value:"select"}
          label={props.displayName}
          fullWidth
          onChange={(e)=>props.handleChange(props.name,e.target.value)}
        >
          <MenuItem value={'select'}>Select</MenuItem>
          {
            props.list.map((item:any,index)=>(
                 <MenuItem key={index} value={props.selectable==="own"?item:item[props.selectable]}>{props.selectable==="own"?item:item[props.selectable]}</MenuItem>  
            ))
          }
          
        </Select>
      </FormControl>
    </Box>
  );
}

export default SelectList