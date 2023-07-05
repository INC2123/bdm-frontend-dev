import React from 'react';
import { Stack,Typography } from '@mui/material';
import Header from '../AppHeader/Header';
import SideBar from '../SideNavBar/SideBar';
import MainComponent from './MainComponent';



const Workspace = () => {
    return (
      <Stack direction="column" spacing={2}>
        <Header/>
        {/* <Stack direction="row"> */}
          <SideBar/>
          {/* <MainComponent/> */}
        {/* </Stack> */}
      </Stack>
    );
  };
  
  export default Workspace;

  
  
  
  
  
  
  