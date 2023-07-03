import { useNavigate, useParams } from 'react-router-dom'
import React, { ChangeEvent, useEffect, useState } from 'react'
import { busca, buscaId, post, put } from '../../../services/Service';
import { Container, Typography, TextField, Button, Select, InputLabel, MenuItem, FormControl, FormHelperText, Grid, Box } from "@material-ui/core"
import Tema from '../../../models/Tema';
import Postagem from '../../../models/Postagem';
import './CadastroPostagem.css';
import { toast } from 'react-toastify';
import imgCadastroPost from '../../../assets/img/New entries-rafiki.png'
import ListaPostagem from '../listapostagem/ListaPostagem';
import TermoDeUso from './termosDeUso/TermosDeUso'
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';

function CadastroPostagem() {

    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const [temas, setTemas] = useState<Tema[]>([])

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    useEffect(() => {
        if (token == "") {
            toast.error('voce precisa estar logado', {
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

    const [tema, setTema] = useState<Tema>(
        {
            id: 0,
            causa: '',
            metaArrecadacao: 0,

        })
    const [postagem, setPostagem] = useState<Postagem>({

        id: 0,
        imagem: '',
        titulo: '',
        descricao: '',
        arrecadacao: 0,
        temapostagem: null

    })

    useEffect(() => {
        setPostagem({
            ...postagem,
            temapostagem: tema
        })
    }, [tema])

    useEffect(() => {
        getTemas()
        if (id !== undefined) {
            findByIdPostagem(id)
        }
    }, [id])

    async function getTemas() {
        await busca("/temas", setTemas, {
            headers: {
                'Authorization': token
            }
        })
    }

    async function findByIdPostagem(id: string) {
        await buscaId(`postagens/${id}`, setPostagem, {
            headers: {
                'Authorization': token
            }
        })
    }

    function updatedPostagem(e: ChangeEvent<HTMLInputElement>) {

        setPostagem({
            ...postagem,
            [e.target.name]: e.target.value,
            temapostagem: tema
        })

    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()

        if (id !== undefined) {
            put(`/postagens`, postagem, setPostagem, {
                headers: {
                    'Authorization': token
                }
            })
            toast.success('Postagem atualizada com sucesso', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
        } else {
            post(`/postagens`, postagem, setPostagem, {
                headers: {
                    'Authorization': token
                }
            })
            toast.success('Postagem criada com sucesso', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
        }
        back()

    }

    function back() {
        navigate('/posts')
    }

    return (

        <Grid container >
            <Grid item md={8} className='container-cadastrarPost'>
                <Box className='alinha-info-cadastroPost'>
                    <Box className='alinha-titulo-postagem'>
                        <Typography className='titulo-postagem' variant="h3" color="textSecondary" component="h1" align="center"> Crie uma nova Postagem e<span> ajude a</span></Typography>
                        <Typography className='titulo-postagem' variant="h3" color="textSecondary" component="h1" align="center"><span>salvar uma vida!!</span> </Typography>
                    </Box>
                    <Box className='alinha-img-cadastroPost'>
                        <img className='imgCadastroPost' src={imgCadastroPost} alt="" />
                    </Box>

                </Box>

            </Grid>
            <Grid item md={4} className='container-cadastrarPost'>
                <Container maxWidth="sm" className="topo">
                    <Box className='box-cadastroPost'>

                    <form onSubmit={onSubmit}>
                        <p className='tema-post'>imagem</p>
                        <TextField value={postagem.imagem} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)} id="imagem" label="url da imagem
                 " variant="outlined" name="imagem" margin="normal" fullWidth />
                        <p className='tema-post'>Titulo</p>
                        <TextField value={postagem.titulo} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)} id="titulo" label="Digite um título para a sua postagem" variant="outlined" name="titulo" margin="normal" fullWidth />
                        <p className='tema-post'>Descrição</p>
                        <TextField value={postagem.descricao} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)} id="descricao" label="Descreva o Objetivo da sua postagem" name="descricao" variant="outlined" margin="normal" fullWidth />
                        <p className='tema-post'>Valor arrecadado</p>
                        <TextField value={postagem.arrecadacao} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)}id='arrecadacao' label='Digite um valor ' variant='outlined' name='arrecadacao' margin='normal' fullWidth type='number'/>
                       

                        <FormControl >
                            <InputLabel id="demo-simple-select-helper-label">Tema</InputLabel>
                            <Select
                                labelId="demo-simple-select-helper-label"
                                id="demo-simple-select-helper"
                                onChange={(e) => buscaId(`/temas/${e.target.value}`, setTema, {
                                    headers: {
                                        'Authorization': token
                                    }
                                })}>
                                {
                                    temas.map(tema => (
                                        <MenuItem value={tema.id}>{tema.causa}</MenuItem>
                                    ))
                                }
                            </Select>
                            <FormHelperText>Escolha um causa para a postagem</FormHelperText>
                            <hr />
                            <Button  className="button-finalizar" type="submit" variant="contained" color="primary">
                                Finalizar
                            </Button>
                            <hr />
                        </FormControl>
                    </form>
                    </Box>
                </Container>
            </Grid>
            <Grid item container md={12}>
                <TermoDeUso />
            </Grid>
        </Grid>

    )
}
export default CadastroPostagem;