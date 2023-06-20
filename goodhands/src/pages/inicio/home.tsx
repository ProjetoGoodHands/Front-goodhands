import React from "react";

import { Button, Grid,Typography } from '@material-ui/core'
import { Box } from "@mui/material";
import './Home.css';

function Home() {
    return (
        <>
        <Grid xs={10} style={{
                backgroundImage: `url(https://stories.freepiklabs.com/api/vectors/holding-hands/bro/render?color=&background=complete&hide=) `,
                backgroundRepeat: 'no-repeat', width: '100vh', minHeight: '100vh', backgroundSize: 'cover', backgroundPosition: 'center', 
            }} id="img1">
                     <Typography id="welcome" >Seja bem vindo(a)!</Typography >
                     <br /><br />
                     <Box display="flex" justifyContent="center">
                        <Box marginRight={12}>
                        </Box>
                        <Button variant="outlined" id="botaoconta">Criar uma conta</Button>
                    </Box>
            </Grid>
           
        </>
    );
}


export default Home;