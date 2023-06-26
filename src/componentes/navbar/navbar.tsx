import React from 'react';
import { AppBar, Toolbar, colors, } from '@material-ui/core';
import { Typography } from '@mui/material'
import { Box } from '@mui/material';
import './navbar.css'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import useLocalStorage from 'react-use-localstorage';


function Navbar() {

    const [token, setToken] = useLocalStorage('token');
    let navigate = useNavigate();

    function goLogout() {
        setToken('')
        alert("Usuário deslogado")
        navigate('/login')
    }
    return (
        <>
            <AppBar className='appBar' position="static">
                <Toolbar className='direcao-navbar' variant="dense">
                    <Box className='cursor' display="flex" flexDirection='row'>
                        <Typography variant="h5" color="inherit">
                            <img src="https://cdn.discordapp.com/attachments/1087794407052419213/1120330267660390530/LogoUnicaPNG.png" alt="" width='60px' />
                        </Typography>
                        <Box mx={1} className='cursor' >
                            <Link to="/home" className='Link-logar' >
                                <Box mx={1} className='cursor'>
                                    <Typography variant="h6" color="inherit">
                                        home
                                    </Typography>
                                </Box>
                            </Link>
                        </Box>

                        <Link to="/posts" className='Link-logar'>
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit">
                                    postagens
                                </Typography>
                            </Box>
                        </Link>
                        <Link to="/sobre" className='Link-logar'>
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit">
                                    sobre
                                </Typography>
                            </Box>
                        </Link>
                        <Link to="/cadastro" className='Link-logar'>
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit">
                                    cadastrar
                                </Typography>

                            </Box>
                        </Link>
                    </Box>

                    <Box display="flex" justifyContent="space-between" >
                        <Box mx={1} className='cursor' onClick={goLogout} >
                            <Typography variant="h6" color="inherit">
                                logout
                            </Typography>
                        </Box>
                    </Box>

                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;