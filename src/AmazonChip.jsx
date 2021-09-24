import React from 'react';
import Chip from '@material-ui/core/Chip';


const AmazonChip = () => {
    return(
        <>
        <div className = "chipDiv">
            <Chip 
                 label= 'MongoDB'
                 clickable
            />&nbsp;

            <Chip 
                label='Express.js'
                clickable
            />&nbsp;

            <Chip
                label='React.js'
                clickable
            />&nbsp;
            <Chip
               label='Node.js'
               clickable
            />&nbsp;<br/><br/>
            
    </div>

        </>
    );
};


export default AmazonChip;