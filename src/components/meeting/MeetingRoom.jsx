import React, { useState } from 'react';
import { useHMSStore, useHMSActions, selectLocalPeer, selectRemotePeers, selectIsLocalScreenShared } from '@100mslive/react-sdk';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';


import Peer from '../peer/Peer';
import LocalPeer from '../peer/LocalPeer';
import ChatContainer from '../chat/ChatContainer';
import Screen from '../peer/Screen';
import StatusBar from '../statusBar/StatusBar';

// material ui components

import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import PersonIcon from '@mui/icons-material/Person';
import { blue } from '@mui/material/colors';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(0),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


const MeetingRoom = () => {
    
return (
       <> 
  
        </>
  );
}

const styles = {
  room :{
    backgroundColor: '#1b394a',
    padding: '0.5rem'
  },
  name: {
    color: '#ffffff'
  }
}

export default MeetingRoom;