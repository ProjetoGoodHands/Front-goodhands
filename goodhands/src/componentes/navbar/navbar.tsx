import React from 'react';
import { AppBar, Toolbar, colors,  } from '@material-ui/core';
import { Typography } from '@mui/material'
import {Box} from '@mui/material';
import './navbar.css'
function Navbar() {
    return (
        <>
            <AppBar id='ola' position="static">
                <Toolbar variant="dense">
                    <Box style={{ cursor: "pointer" }} >
                        <Typography variant="h5" color="inherit">
                         <p>  
                         <img src="https://cdn.discordapp.com/attachments/1087794407052419213/1120330267660390530/LogoUnicaPNG.png" alt="" width='100vh'/> 
                         </p>
                        </Typography>
                    </Box>

                    <Box display="flex" justifyContent="start">
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit">
                                <a href="http://localhost:5173/home">Home</a>
                            </Typography>
                        </Box>
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit">
                           <a href="http://localhost:5173/login">login</a>
                            </Typography>
                        </Box>
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit">
                                Cadastro
                            </Typography>
                        </Box>
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit">
                            <a href="http://localhost:5173/postagem">Postagem</a>
                            </Typography>
                        </Box>
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit">
                                logout
                            </Typography>
                            
                        </Box>
                       
                    </Box>

                </Toolbar>
            </AppBar>
            <hr />
        </>
    )
}

export default Navbar;