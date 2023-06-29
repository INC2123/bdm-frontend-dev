import React from "react";
import Paper from '@mui/material/Paper';
import { makeStyles } from "@mui/styles";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from "./Card";
import Header from "../AppHeader/Header";
import SideBar from "../SideNavBar/SideBar";
import Typography from "@mui/material/Typography";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useState } from "react";
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import AssignmentIcon from '@mui/icons-material/Assignment';

const useStyles = makeStyles((theme) => {
return{
   text:{
    color:"#000000",
    fontFamily: 'Roboto',
    fontStyle:'normal',
    fontWeight:500,
    fontSize:'24px',
    lineHeight:'28px',
    letterSpacing:'0.03rem',
   },
}});

const Workspace = () => {
const classes = useStyles();
const[selectedTab,setSelectedTab] = useState(null);

const handleTabChange =(event,newValue) => {
   setSelectedTab(newValue);
};
return(
    <Grid container>
        <Grid item lg={12}>
            <Header/>
        </Grid>
        <Grid item lg={1}>
            <SideBar/>
        </Grid>

        <Grid item lg={11}>
            {/* <Grid container> */}
                <Grid item lg={11}>
                    <Typography variant='h6' className={classes.text}>
                        Clause Library
                    </Typography>
                {/* </Grid> */}
        
        <Grid item lg={11}>
            <Tabs
              value={selectedTab}
              onChange={handleTabChange}
              sx={{
                '& .MuiTabs-indicator': {
                  backgroundColor: 'black',
                },
              }}
              textColor="#000000"
              
            >
            <Tab icon={<AssignmentIcon />} iconPosition="start" label="Clauses"/>
            <Tab icon={<PendingActionsIcon />} iconPosition="start" label="Pending Clause"/>  
            </Tabs>
        </Grid>
        <Box>
            <Card/>
        </Box>
        </Grid>
    </Grid>
    </Grid>

)
}
export default Workspace;