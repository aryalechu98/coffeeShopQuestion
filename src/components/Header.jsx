import { Box } from '@mui/material'
import React from 'react'

const Header = () => {
  return (
    <Box sx={{display:'flex',justifyContent:'center',
    flexDirection:'column',
    alignItems:'center',mt:'1.5rem'}}>
      <h1>CAFE COFFEE</h1>
      <p style={{color:'#ed7207',fontWeight:'bold',marginBottom:'2rem'}}>Welcome to Cafe Coffee </p>

    </Box>
  )
}

export default Header