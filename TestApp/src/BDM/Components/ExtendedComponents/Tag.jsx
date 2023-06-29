import React from 'react';
import { Chip } from '@mui/material';
import randomColor from 'randomcolor';
import {darken} from 'polished';

const Tag =({label})=>{
    const randomBackgroundColor = randomColor({luminosity: 'light',format:'rgba'});
    const randomColorContrast = darken(0.7,randomBackgroundColor);
    return(
        <Chip
        label={label}
        style={{
            backgroundColor:randomBackgroundColor,
            color:randomColorContrast,
            borderRadius:'8px',
            
        }}
        />
    );
};

export default Tag;