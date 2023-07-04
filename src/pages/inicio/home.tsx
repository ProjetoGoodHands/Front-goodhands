import { Button, Grid, Typography } from '@material-ui/core'
import { Box } from "@mui/material";
import './Home.css';
import TabPostagem from '../../componentes/postagens/tabpostagem/TabPostagem'
import { TokenState } from '../../store/tokens/tokensReducer';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

function Home() {
    let navigate = useNavigate();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    useEffect(() => {
        if (token == "") {
            toast.error('Voce precisa estar logado', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
            navigate("/login")

        }
    }, [token])
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className='caixa'>
                <Grid alignItems="center" item xs={9}>
                    <Box>
                        <Typography variant="h1" gutterBottom color="textPrimary" component="h1" align="center" className='titulo'>Seja bem vindo (a)!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className='titulo'>Junte-se aqui na luta contra a pobreza!</Typography>
                    </Box>

                </Grid>
                <Grid item xs={6} >
                    <Box display='flex' justifyContent="center" alignItems="center">
                        <img src="https://cdn.discordapp.com/attachments/1087794407052419213/1122272937945342052/tela_home_1.gif" alt="" width="5000px" />
                    </Box>
                </Grid>
                <Grid xs={12} className='postagens'>
                </Grid>
                <TabPostagem />
            </Grid>


        </>
    );
}


export default Home;