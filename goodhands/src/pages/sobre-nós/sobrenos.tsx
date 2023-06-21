import { Box, Grid, Typography } from '@material-ui/core';
import React from 'react';

function Sobrenos() {
    return (
        <>
        <Grid alignItems="center" item xs={12}>
                    <Box  paddingX={20}>
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" >Quem Somos!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" >Um pouco sobre quem somos e qual nosso objetivo</Typography>
                    </Box>
                  <Box>
                <Typography>
                    <p>O Good Hands é uma organização não governamental com o objetivo de ajudar e dar suporte para a divulgação de ações sustentáveis, com foco na erradicação da fome, 
                        entretanto, nosso projeto está disponível para a divulgação das mais diversas causas sociais que precisarem do nosso apoio. Dentro da nossa plataforma, você poderá
                        criar uma causa social que queira divulgar, definir uma meta de quanto precisará para realiza-la e apresentar um descritivo sobre o que se trata esse projeto e a 
                        importância da sua existência e realização.
                        <p>
                            Nosso projeto tem como meta principal, que todo e qualquer causa criada pelos nossos usuários tenha o maior nível de alcance possível, sendo assim, nos comprometemos
                            em criar um ambiente no qual seja simples e de fácil navegação tanto para um usuário quanto para quem visitar nosso site.
                            <p>
                            Criado como um projeto 100% não governamental, o Good Hands tem como valores respeito ao próximo, trablaho em equipe, diversidade, foco no crescimento e desenvolvimento social, entre outros, tendo como missão se tornar uma ONG de nível nacional, alcançando um público em torno do país e auxiliando no combate á fome e a desigualdade social através da ajuda coletiva entre as pessoas, insentivando solidariedade, boas interações, respeito e diversidade entre elas.
                            </p>
                                                </p>
                        </p>

                </Typography>

                  </Box>
             <Box  paddingX={20}>
                        
                        <Typography variant="h4" gutterBottom color="textPrimary" component="h3" align="center" >Nosso time nota Mil!!</Typography>
                        
                        
            </Box>
                </Grid>
        </>
    )
}

export default Sobrenos;