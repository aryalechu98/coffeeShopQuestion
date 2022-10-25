import { Box, Button, FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import { addon,coffeeDetails } from '../../coffeeDetails'

const PickCoffeeCard = ({product}) => {
  
    const [addonPrdt,setAddonPrdt]=useState([])
    const [value,setValue]=useState('')
    const handleChange = (event) => {
        setAddonPrdt(event.target.value);
      };
      
      const orderHandler = () =>{
        setValue(addonPrdt)
      }
  return (
    <Box sx={{padding:'1rem 2rem',width:{xs:'60%',md:'100%'},border:'1px solid #ed7207',borderRadius:'1.5rem'}}>
        <h2 style={{marginBottom:'2rem'}}>{product}</h2>
        <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Choose add on</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={addonPrdt}
          label="Choose add on"
          onChange={handleChange}
        >
            {addon.map(item=>{
                return (
                    <MenuItem key={item.id} value={item.name}>{item.name}</MenuItem>
                )
            })}
         
        </Select>
      </FormControl>
      <Button variant='contained'
      sx={{marginTop:'2rem',width:'100%',
    background:'#ed7207'
    }}
      onClick={orderHandler}>Order</Button>
      <Box>
        {coffeeDetails.filter(item=>item.name.includes(product)).map(item=>{
        let price;
          if(item.addon === value ){
            price=item.price
          }
        return (
          <div>{price &&  <p>Total Price is <span style={{color:'#ed7207'}}><b>${price}</b></span></p>}</div>
         
        );
          
  })}
      </Box>
    </Box>
  )
}

export default PickCoffeeCard