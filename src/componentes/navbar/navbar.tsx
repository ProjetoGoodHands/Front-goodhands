import { AppBar, Toolbar, colors, } from '@material-ui/core';
import { Typography } from '@mui/material'
import { Box } from '@mui/material';
import './navbar.css'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { TokenState } from '../../store/tokens/tokensReducer';
import { addToken } from '../../store/tokens/action';


function Navbar() {

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );
    let navigate = useNavigate();
    const dispatch = useDispatch();

    function goLogout() {
        dispatch(addToken(''));
        toast.info('Usuario deslogado', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined,
        });
        navigate('/login')

    }
    var navbarComponent;
    if (token != "") 
        navbarComponent = <AppBar className='appBar' position="static">
            <Toolbar className='direcao-navbar' variant="dense">
                <Box className='cursor' display="flex" flexDirection='row'>
                    <Typography variant="h5" color="inherit">
                        <img src="https://cdn.discordapp.com/attachments/1087794407052419213/1120330267660390530/LogoUnicaPNG.png" alt="" width='60px' />
                    </Typography>
                    <Box mx={1} className='cursor' >
                        <Link to="/home" className='Link-logar' >
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit">
                                    Home
                                </Typography>
                            </Box>
                        </Link>
                    </Box>

                    <Link to="/posts" className='Link-logar'>
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                Postagens
                            </Typography>
                        </Box>
                    </Link>


                    <Link to="/sobre" className='Link-logar'>
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                Sobre
                            </Typography>
                        </Box>
                    </Link>
                    <Link to="/contato" className='Link-logar'>
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                Contato
                            </Typography>

                        </Box>
                    </Link>
                </Box>

                <Box display="flex" justifyContent="space-between" >
                    <Box mx={1} className='cursor' onClick={goLogout} >
                        <Typography variant="h6" color="inherit">
                            Logout
                        </Typography>
                    </Box>
                </Box>

            </Toolbar>
        </AppBar>
    
    return (
        <>
            {navbarComponent}
        </>
    )
}

export default Navbar;