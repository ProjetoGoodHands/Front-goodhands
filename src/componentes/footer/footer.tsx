import React from 'react';
import './footer.css'

import { Typography, Grid } from '@material-ui/core';
import { Box } from '@mui/material';


function Footer() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" >
                
                <Grid alignItems="center" item xs={12}>

                    
                  
                    <Box className="color-footer" >

                        <Box paddingTop={1}>
                            <Typography variant="subtitle2" align="center" gutterBottom style={{ color: "white" }} >© 2023 Copyright:</Typography>
                        </Box>
                        <Box>

                            <Typography variant="subtitle2" gutterBottom style={{ color: "white" }} align="center">goodhandsprojetogeneration@gmail.com</Typography>

                        </Box>

                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default Footer;