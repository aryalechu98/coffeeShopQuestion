
import { Box, Chip, Grid } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'

const Specials = () => {
  return (
    <Container>
    <Box sx={{marginBottom:'2rem',textAlign:'center'}}>
        <h2 >Our Specials</h2>
    <Grid container sx={{display:'flex',justifyContent:'center',alignItems:'center',
     
      }}>
    <Grid item xs={12}    >
      <Chip  sx={{backgroundColor: '#ed7207',
      margin:' 0 0 1rem 1rem',
      padding:'0.5rem',
      color:'white'}} label="Espresso with milk"/>
        <Chip 
        sx={{backgroundColor: '#ed7207',
        margin:' 0 0 1rem 1rem',
        padding:'0.5rem',
        color:'white'}}
        label="Espresso with cream"/>
        <Chip 
        sx={{backgroundColor: '#ed7207',
        margin:' 0 0 1rem 1rem',
        padding:'0.5rem',
        color:'white'}}
        label="Espresso with Latte"/>
        <Chip 
        sx={{backgroundColor: '#ed7207',
        margin:' 0 0 1rem 1rem',
        padding:'0.5rem',
        color:'white'}}
        label="Cappuccino with milk"/>
        <Chip 
        sx={{backgroundColor: '#ed7207',
        margin:' 0 0 1rem 1rem',
        padding:'0.5rem',
        color:'white'}}
        label="Cappuccino with cream"/>
        <Chip 
        sx={{backgroundColor: '#ed7207',
        margin:' 0 0 1rem 1rem',
        padding:'0.5rem',
        color:'white'}}
        label="Cappuccino with Latte"/>
        <Chip 
        sx={{backgroundColor: '#ed7207',
        margin:' 0 0 1rem 1rem',
        padding:'0.5rem',
        color:'white'}}
        label="Latte with milk"/>
        <Chip 
        sx={{backgroundColor: '#ed7207',
        margin:' 0 0 1rem 1rem',
        padding:'0.5rem',
        color:'white'}}
        label="Latte with cream"/>
        <Chip 
        sx={{backgroundColor: '#ed7207',
        margin:' 0 0 1rem 1rem',
        padding:'0.5rem',
        color:'white'}}
        label="Latte"/>
    </Grid>
        </Grid>
        
      </Box>
      </Container>
  )
}

export default Specials