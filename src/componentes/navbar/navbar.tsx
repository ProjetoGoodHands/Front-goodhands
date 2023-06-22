import React from 'react';
import { AppBar, Toolbar, colors,  } from '@material-ui/core';
import { Typography } from '@mui/material'
import {Box} from '@mui/material';
import './navbar.css'
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <>
        <AppBar className='appBar' position="static">
            <Toolbar className='direcao-navbar' variant="dense">
                <Box className='cursor' display="flex" flexDirection='row'>
                    <Typography variant="h5" color="inherit">
                        <img src="https://cdn.discordapp.com/attachments/1087794407052419213/1120330267660390530/LogoUnicaPNG.png" alt="" width='60px' />
                    </Typography>
                    <Box mx={1} className='cursor' >
                    <Link to={'./home'} className='Link-logar'>
                        <Typography  variant="h6" color="inherit">
                            home
                        </Typography>
                    </Link>

                    </Box>

                    <Box mx={1} className='cursor'>
                    <Link to={'./postagem'} className='Link-logar'>
                        <Typography   variant="h6" color="inherit">
                            postagens
                        </Typography>
                    </Link>
                    </Box>
                    <Box mx={1} className='cursor'>
                        <Link to={'./sobre'} className='Link-logar'>
                        <Typography  variant="h6" color="inherit">
                           sobre
                        </Typography>
                        </Link>
                    </Box>
                    <Box mx={1} className='cursor'>
                        <Link to={'./cadastro'} className='Link-logar'>
                            <Typography   variant="h6" color="inherit">
                            cadastrar
                        </Typography>
                        </Link>
                    </Box>
                </Box>

                <Box display="flex" justifyContent="space-between">
                    <Box mx={1} className='cursor'>
                    <Link to='/login'>
                    </Link >
                    <Link to={'./login'} className='Link-logar'>
                        <Typography variant="h6" color="inherit">
                            logout
                        </Typography>
                    </Link>
                    </Box>
                </Box>

            </Toolbar>
        </AppBar>
        </>
    )
}

export default Navbar;