import React, { useState } from 'react'

import { coffees } from '../../coffeeDetails';
import { Container, Grid } from '@mui/material';
import PickCoffeeCard from './PickCoffeeCard';
const PickYourCoffee = () => {
    const [addonPrdt,setAddonPrdt]=useState([])
    const [value,setValue]=useState('')
    return(
       
        
         <Container>
        <Grid container>
        {coffees.map(item=>{
            return (
                <Grid key={item.id}  item xs={12} md={4}
                sx={{display:'flex',justifyContent:'center',alignItems:'center',padding:'1rem'}}
                >
                <PickCoffeeCard 
                product={item.name}
                addonPrdt={addonPrdt}
                value={value}
                setAddonPrdt={setAddonPrdt}
                setValue={setValue}
                />
            </Grid>
            )
        })}

        
        </Grid>
        </Container>
        
    )
}

export default PickYourCoffee