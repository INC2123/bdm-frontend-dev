import React from 'react';
import { Typography, Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import { makeStyles } from '@mui/styles';

const useStyles =  makeStyles((theme) => ({
categoryText:{
    color: '#424242',
    fontFamily:'Roboto',
    fontStyle:'normal',
    fontWeight:400,
    fontSize:'15px',
    lineHeight:'17.58px',
    marginLeft:'15px',
    display:"flex",
    alignItems:"center",
},
}));


const Category = ({category})=>{
    const classes = useStyles();
    return(
        <Box display="flex" alignItems="center">
        <CategoryOutlinedIcon style={{color:" #9CA3AE"}}/>
        <Typography className='classes.categoryText'>
          {category}
        </Typography>
      </Box>
    );

}

export default Category;