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
                        <img src="https://stories.freepiklabs.com/api/vectors/add-notes/bro/render?color=&background=complete&hide=" alt="" id="iimage"/>   
                             
                    </Grid>
                   
                </Grid>
                <Grid  alignItems="center" item xs={4} id="cadastro">
                    <form>
                    <p id="titulo">Titulo:</p>
                    <TextField id='caixapostagem' label='Digite um título para a sua postagem' variant='outlined' name='titulo' margin='normal' fullWidth />

                    <p id="titulo">Descrição:</p>
                    <TextField id='caixapostagemdesc' label='Descreva o Objetivo da sua postagem' variant='outlined' name='descricao' margin='normal' fullWidth />

                    <p id="titulo">Meta de arrecadação:</p>
                    <TextField id='caixapostagem' label='Digite um valor ' variant='outlined' name='meta' margin='normal' fullWidth />
                    
                    <Button type='submit' variant='contained' id='logbotao' >
                                    Criar Postagem
                                </Button>
                    </form>
                </Grid>
  

            </Grid>
            
            
        </>
    );
}


export default Home;