import React from "react";
import { Button, Grid, Link, Paper, TextField, Typography} from '@material-ui/core'
import { Box } from '@mui/material'
import './postagem.css'

function Home() {
    return (
        <>
            <Grid container direction="row" id="ola" style={{ backgroundColor: "#59D3A5" }}>
                <Grid alignItems="center" item xs={6}>
                    <Box  paddingX={10}>
                       
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" style={{ color: "white", fontWeight: "bold" }}>Good Hands</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" style={{ color: "white", fontWeight: "bold" }}>Crie uma nova Postagem e ajude a salvar uma vida!!</Typography>
                    </Box>
                    <Grid>  
                        <img src="https://cdn.discordapp.com/attachments/1087794407052419213/1120330131555225620/LogoUnica.png" alt="" id="iimage"/>           
                    </Grid>
                    
                </Grid>
                <Grid  alignItems="center" item xs={4} id="cadastro">
                    <form>
                    <p id="titulo">Titulo</p>
                    <TextField id='caixapostagem' label='Digite um título para a sua postagem' variant='outlined' name='usuario' margin='normal' fullWidth />

                    <p id="titulo">Descrição</p>
                    <TextField id='caixapostagemdesc' label='Descreva o Objetivo da sua postagem' variant='outlined' name='usuario' margin='normal' fullWidth />

                    <p id="titulo">Meta de arrecadação</p>
                    <TextField id='caixapostagem' label='Digite um valor ' variant='outlined' name='usuario' margin='normal' fullWidth />

                    <input type="button" value="Criar uma Postagem" /><br />
                    </form>
                </Grid>
  

            </Grid>
            
            
        </>
    );
}


export default Home;