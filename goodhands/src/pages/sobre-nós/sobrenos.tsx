import { Box, Grid, Typography } from '@material-ui/core';
import React from 'react';

function Sobrenos() {
    return (
        <>
        <Grid alignItems="center" item xs={6}>
                    <Box  paddingX={20}>
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" >Quem Somos!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" >Um pouco sobre quem somos e qual nosso objetivo</Typography>
                    </Box>
                  <Box>
                <Typography>
                    <p>O Good Hands é uma organização não governamental com o objetivo de ddfasjnsdjfnsdjfnsdjfsnd aisjdsidjsidjsaidjas dsidjasidjsaida dasdasidjsaidjasidjsa
                        asdjiasdjsaidjasidi <br />aidjsaidjsaidjasidjsasidjsaidjasidjsaidjasisdijasidjasidjsaidjsiadjsidjsidjsaidjasidjasidjasidjsaidjaasdsjdnasjdnasjjasdnsajdnasjadsjdnasjdnsadsadjn
                    </p>
                </Typography>

                  </Box>
                </Grid>
        </>
    )
}

export default Sobrenos;