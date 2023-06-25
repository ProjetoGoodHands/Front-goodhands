import { Button, Grid, Typography } from '@material-ui/core'
import { Box } from "@mui/material";
import './Home.css';
import TabPostagem from '../../componentes/postagens/tabpostagem/TabPostagem'

function Home() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className='caixa'>
                <Grid alignItems="center" item xs={9}>
                    <Box>
                        <Typography variant="h1" gutterBottom color="textPrimary" component="h1" align="center" className='titulo'>Seja bem vinde!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className='titulo'>junte-se aqui na luta contra a pobreza!</Typography>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                    <Box display='flex' justifyContent="center" alignItems="center">
                        <img src="https://cdn.discordapp.com/attachments/1087794407052419213/1122272937945342052/tela_home_1.gif" alt="" width="5000px" />
                    </Box>
                </Grid>
                <Grid xs={12} className='postagens'>
                </Grid>
                <TabPostagem/>
            </Grid>
                   

        </>
    );
}


export default Home;