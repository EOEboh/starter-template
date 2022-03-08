import React, { useEffect, useState } from 'react';


// material UI
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { Typography, TextField } from '@mui/material';
import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';




import JoinForm from './components/joinForm/JoinForm';
import MeetingRoom from './components/meeting/MeetingRoom';


// 100ms SDK
import { 
  useHMSActions,
  selectIsConnectedToRoom,
  useHMSStore } from '@100mslive/react-sdk';
// react router
import { Route, Routes, Link, useLocation } from 'react-router-dom';

// material ui
const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

function App() {

  
  return (
    <> 
      
    </>


  )
}


const styles = {
  connected:{
    backgroundColor: '#00aff0',
    width: '50%',
    textAlign: 'center',
    fontSize: '20px',
    padding: '0.5rem',
    margin: 'auto',
    borderRadius: '2px'
  },
  card:{
    width: '50%',
    margin: 'auto'
  },
  joinFormButton:{
    marginTop: '2rem',
    backgroundColor: '#00aff0',
    borderRadius: '90px',
    padding: '15px',
  }
}

export default App;