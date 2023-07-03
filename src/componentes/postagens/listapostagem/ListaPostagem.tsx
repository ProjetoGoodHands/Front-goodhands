import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Postagem from '../../../models/Postagem';
import { busca } from '../../../services/Service';
import { Card, CardActions, CardContent, Button, Typography, LinearProgress } from '@material-ui/core';
import { Box } from '@mui/material';
import './ListaPostagem.css';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';

function ListaPostagem() {
  const [posts, setPosts] = useState<Postagem[]>([]);
  let navigate = useNavigate();
  const token = useSelector<TokenState, TokenState['tokens']>((state) => state.tokens);

  useEffect(() => {
    if (token === '') {
      alert('Você precisa estar logado');
      navigate('/login');
    }
  }, [token]);

  async function getPost() {
    await busca('/postagens', setPosts, {
      headers: {
        Authorization: token,
      },
    });
  }

  useEffect(() => {
    getPost();
  }, [posts.length]);

  const calculateProgress = (arrecadacao: number, metaArrecadacao: number) => {
    return (arrecadacao / metaArrecadacao) * 100;
  };

  return (
    <>
  
      {posts.map((post) => (
        <Box className="boxcard2" m={2} key={post.id}>
          <Card className="CardContent" variant="outlined">
            <CardContent>
              <Box id='container-box-card2'>
                <Box>
                  <Typography color="textSecondary" gutterBottom>
                    Postagens
                  </Typography>
                  
                    <img className="ajustarimg" src={post.imagem} alt="" />
            
                  <Typography variant="h5" component="h2">
                    {post.titulo}
                  </Typography>
                  <br />
                  <Typography className="ajustardescricao" variant="body2" component="p">
                    {post.descricao}
                  </Typography>
                  <br />
                </Box>
                <Box className='infor-meta'>
                  <hr />
                  <Typography variant="body2" component="p">
                    Valor arrecadado: {post.arrecadacao}
                  </Typography>
                  <br />
                  <Typography variant="body2" component="p">
                    {post.temapostagem?.causa}
                  </Typography>
                  <br />
                  <Typography variant="body2" component="p">
                    Meta para arrecadação: {post.temapostagem?.metaArrecadacao}
                  </Typography>
                  <br />
                  <LinearProgress
                    variant="determinate"
                    value={calculateProgress(post.arrecadacao, post.temapostagem?.metaArrecadacao || 1)}
                  />
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Box>
      ))}
    </>
  );
}

export default ListaPostagem;
