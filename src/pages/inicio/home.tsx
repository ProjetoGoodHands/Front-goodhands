import { Button, Grid,Typography } from '@material-ui/core'
import { Box } from "@mui/material";
import './Home.css';

function Home() {
    return (
        <>
        <Grid xs={9} style={{
                backgroundImage: `url(https://stories.freepiklabs.com/api/vectors/holding-hands/bro/render?color=&background=complete&hide=) `,
                backgroundRepeat: 'no-repeat'
            }} id="img1">
                     <Typography id="welcome" >Seja bem vinde!</Typography >
                     <Box display="flex" justifyContent="center">
                        <Box >
                        </Box>
                        <Button variant="outlined" id="botaoconta"><a href="http://localhost:5173/postagem">Criar uma Postagem</a></Button>
                    </Box>
            </Grid>
           
        </>
    );
}


export default Home;