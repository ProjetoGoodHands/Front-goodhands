import { useNavigate, useParams } from 'react-router-dom'
import React, { useState, useEffect, ChangeEvent } from 'react'
import { buscaId, post, put } from '../../../services/Service';
import { Container, Typography, TextField, Button, Grid, Box } from "@material-ui/core"
import Tema from '../../../models/Tema';
import useLocalStorage from 'react-use-localstorage';
import './CadastrarTema.css';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import imgCadastroTema from '../../../assets/img/Mobile login-amico.png'


function CadastrarTema() {
    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );
    const [tema, setTema] = useState<Tema>({
        id: 0,
        causa: '',
        metaArrecadacao: 0

    })

    useEffect(() => {
        if (token == "") {
            toast.error('Voce precisa estar logado', {
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

    useEffect(() => {
        if (id !== undefined) {
            findById(id)
        }
    }, [id])

    async function findById(id: string) {
        buscaId(`/temas/${id}`, setTema, {
            headers: {
                'Authorization': token
            }
        })
    }

    function updatedTema(e: ChangeEvent<HTMLInputElement>) {

        setTema({
            ...tema,
            [e.target.name]: e.target.value,
        })

    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        console.log("tema " + JSON.stringify(tema))

        if (id !== undefined) {
            console.log(tema)
            put(`/temas`, tema, setTema, {
                headers: {
                    'Authorization': token
                }
            })
            toast.success('Causa atualizada com sucesso', {
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
            post(`/temas`, tema, setTema, {
                headers: {
                    'Authorization': token
                }
            })
            toast.success('Causa cadastrada com sucesso', {
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
        navigate('/temas')
    }

    return (
        <Grid container >
            <Grid item md={8} className='container-cadastrarPost2'>
                <Box className='alinha-info-cadastroPost2'>
                    <Box className='alinha-titulo-postagem2'>
                        <Typography className='titulo-postagem' variant="h3" color="textSecondary" component="h1" align="center"> cadastre uma causa </Typography>

                    </Box>
                    <Box className='alinha-img-cadastroPost'>
                        <img className='imgCadastroPost' src={imgCadastroTema} alt="" />
                    </Box>

                </Box>

            </Grid>
            <Grid item md={4} className='container-cadastrarPost'>
                <Container maxWidth="sm" className="topo">
                    <Box className='box-cadastroPost2'>
                        <form onSubmit={onSubmit}>
                            <Typography variant="h3" color="textSecondary" component="h1" align="center" >Digite aqui</Typography>
                            <br />
                            <TextField value={tema.causa} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedTema(e)} id="causa" label="causa" variant="outlined" name="causa" margin="normal" fullWidth />
                            <br /> <br /> <br />
                            <TextField value={tema.metaArrecadacao} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedTema(e)} id="metaArrecadacao" label="digite o valor" variant="outlined" name="metaArrecadacao" margin="normal" fullWidth />
                            <Button className="button-finalizar" type="submit" variant="contained" color="primary">
                                Finalizar
                            </Button>
                        </form>
                    </Box>
                </Container>
            </Grid>
        </Grid>

    )
}

export default CadastrarTema;