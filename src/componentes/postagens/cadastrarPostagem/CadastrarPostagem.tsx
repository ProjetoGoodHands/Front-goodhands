import { useNavigate, useParams } from 'react-router-dom'
import React, { ChangeEvent, useEffect, useState } from 'react'
import { busca, buscaId, post, put } from '../../../services/Service';
import { Container, Typography, TextField, Button, Select, InputLabel, MenuItem, FormControl, FormHelperText, Grid, Box } from "@material-ui/core"
import Tema from '../../../models/Tema';
import useLocalStorage from 'react-use-localstorage';
import Postagem from '../../../models/Postagem';
import './CadastroPostagem.css';

function CadastroPostagem() {

    let navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const [temas, setTemas] = useState<Tema[]>([])
    const [token, setToken] = useLocalStorage('token');

    useEffect(() => {
        if (token == "") {
            alert("Você precisa estar logado")
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
        imagem:'',
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
        await busca("/tema", setTemas, {
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
            alert('Postagem atualizada com sucesso');
        } else {
            post(`/postagens`, postagem, setPostagem, {
                headers: {
                    'Authorization': token
                }
            })
            alert('Postagem cadastrada com sucesso');
        }
        back()

    }

    function back() {
        navigate('/posts')
    }

    return (

        <Container maxWidth="sm" className="topo">


            <form onSubmit={onSubmit}><hr />
                <Typography variant="h3" color="textSecondary" component="h1" align="center">Crie uma nova Postagem e ajude a salvar uma vida!!</Typography>
                <p>imagem</p>
                <TextField value={postagem.imagem} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)} id="imagem" label="url da imagem
                 " variant="outlined" name="imagem" margin="normal" fullWidth /> <br /><br />
                <p>Titulo</p>
                <TextField value={postagem.titulo} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)} id="titulo" label="Digite um título para a sua postagem" variant="outlined" name="titulo" margin="normal" fullWidth /> <br /><br />
                <p>Descrição</p>
                <TextField value={postagem.descricao} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)} id="descricao" label="Descreva o Objetivo da sua postagem" name="descricao" variant="outlined" margin="normal" fullWidth /> <br /><br />
                <p>Meta de Arrecadação</p>
                <TextField label='Digite um valor ' variant='outlined' name='meta' margin='normal' fullWidth />
                <br /><br />

                <FormControl >
                    <InputLabel id="demo-simple-select-helper-label">Tema</InputLabel>
                    <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        onChange={(e) => buscaId(`/tema/${e.target.value}`, setTema, {
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
                    <Button type="submit" variant="contained" color="primary">
                        Finalizar
                    </Button>
                    <hr />
                </FormControl>
            </form>
        </Container>
    )
}
export default CadastroPostagem;