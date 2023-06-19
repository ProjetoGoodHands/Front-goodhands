import React from "react";

import { Button, Grid, Paper, Typography } from '@material-ui/core'
import { Box } from "@mui/material";
import './Home.css';

function Home() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" style={{ backgroundColor: "#59D3A5" }}>
                <Grid alignItems="center" item xs={8} >
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" style={{ color: "white",  fontWeight: "bold"}}>Seja bem vindo(a)!</Typography >
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        </Box>
                        <Button variant="outlined" style={{borderColor: "black", backgroundColor: "white", color: "black" }}>Criar uma conta</Button>
                    </Box>
                </Grid>
                
                
            </Grid>
        </>
    );
}


export default Home;