import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Postagem from '../../../models/Postagem';
import { busca } from '../../../services/Service';
import { Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import './UpdateDeletePost.css';
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';

function UpdateDeletePost() {
    const [posts, setPosts] = useState<Postagem[]>([])
    let navigate = useNavigate();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    useEffect(() => {
        if (token == "") {
            alert("Você precisa estar logado")
            navigate("/login")

        }
    }, [token])

    async function getPost() {
        await busca("/postagens", setPosts, {
            headers: {
                'Authorization': token
            }
        })
    }

    useEffect(() => {

        getPost()

    }, [posts.length])

    return (
        <>
            {
                posts.map(post => (
                    <Box className='boxcard' m={2} >
                        <Card className='CardContent' variant="outlined">
                            <CardContent>
                                <Typography color="textSecondary" gutterBottom>
                                    Postagens
                                </Typography>
                                <Typography color="textSecondary" gutterBottom>
                                    <img className='ajustarimg' src={post.imagem} alt="" />
                                </Typography>
                                <Typography variant="h5" component="h2">
                                    {post.titulo}
                                </Typography> <br />
                                <Typography className='ajustardescricao' variant="body2" component="p">
                                    {post.descricao}
                                </Typography> <br />
                                <Typography variant="body2" component="p">
                                    Valor arrecadado: {post.arrecadacao}
                                </Typography> <br />
                                <Typography variant="body2" component="p">
                                    {post.temapostagem?.causa}
                                </Typography> <br />
                                <Typography variant="body2" component="p">
                                    Meta para arrecadacao: {post.temapostagem?.metaArrecadacao}
                                </Typography> <br />
                            </CardContent>
                            <CardActions>
                                <Box display="flex" justifyContent="center" mb={1.5}>

                                    <Link to={`/formularioPostagem/${post.id}`} className="text-decorator-none" >
                                        <Box mx={1}>
                                            <Button variant="contained" className="marginLeft" size='small' color="primary" >
                                                atualizar
                                            </Button>
                                        </Box>
                                    </Link>
                                    <Link to={`/deletarPostagem/${post.id}`} className="text-decorator-none">
                                        <Box mx={1}>
                                            <Button variant="contained" size='small' color="secondary">
                                                deletar
                                            </Button>
                                        </Box>
                                    </Link>
                                </Box>
                            </CardActions>
                        </Card>
                    </Box>
                ))
            }
        </>
    )
}

export default UpdateDeletePost;