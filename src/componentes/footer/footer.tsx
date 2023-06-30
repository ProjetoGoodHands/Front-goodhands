import './footer.css'
import { Typography, Grid } from '@material-ui/core';
import { Box } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import { useSelector } from 'react-redux';
import { TokenState } from '../../store/tokens/tokensReducer';

function Footer() {
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    var footerComponent;

    if (token !== ""){footerComponent =<><Grid container direction="row" justifyContent="center" alignItems="center" className='conteiner-footer'>
        <Grid>
            <Box display="Flex" flexDirection="row" className='seguirgoodhands'>
                <Box>
                    <Typography variant="h5" align="center" gutterBottom className='texto1'>Siga nas redes sociais </Typography>
                </Box>
                <Box display="flex" alignItems="center" justifyContent="center">
                    <a href="https://www.facebook.com/ramon.siqueira80/" target="_blank">
                        <FacebookIcon className='redes' />
                    </a>
                    <a href="https://www.instagram.com/ramon_as80/" target="_blank">
                        <InstagramIcon className='redes' />
                    </a>
                    <a href="https://www.linkedin.com/in/ramonsiqueira80/" target="_blank">
                        <GitHubIcon className='redes' />
                    </a>
                </Box>
            </Box>
        </Grid>
        <Grid>
        </Grid>
        <Grid alignItems="center" item xs={12}>
            <Box className="conteiner-info-footer" >

                <Box display="flex" justifyContent="center">
                    <img id="imggoodhandsfooter" src="https://cdn.discordapp.com/attachments/1087794407052419213/1120330501115367504/NomeLogoPNG.png" alt="" />
                </Box>
                <Box>
                    <Typography className='texto2footer' variant='subtitle2' gutterBottom align="center" > Todas as marcas registro e mencionadas são de propriedade de seus respectivos donos.</Typography>
                </Box>
                <Box>
                    <Typography className='texto2footer' variant='subtitle2' gutterBottom align="center" > Privacidade | legal | Termos | Cookings</Typography>
                </Box>
            </Box>
        </Grid>
        </Grid>
        <Grid id="copyright" md={12}>
        <Box>
            <Typography className='texto2footer' variant="subtitle2" align="center" >© 2023 Copyright:</Typography>
        </Box>
    </Grid></>}
        

    return (
        <>
            {footerComponent}
        </>
    )
}

export default Footer;