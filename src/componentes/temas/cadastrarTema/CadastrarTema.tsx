import { useNavigate, useParams } from 'react-router-dom'
import React, { useState, useEffect, ChangeEvent } from 'react'
import { buscaId, post, put } from '../../../services/Service';
import { Container, Typography, TextField, Button } from "@material-ui/core"
import Tema from '../../../models/Tema';
import useLocalStorage from 'react-use-localstorage';
import './CadastrarTema.css';


function CadastrarTema() {
    let navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const [token, setToken] = useLocalStorage('token');
    const [tema, setTema] = useState<Tema>({
        id: 0,
        causa: '',
        metaArrecadacao: 0
       
    })

    useEffect(() => {
        if (token == "") {
            alert("Você precisa estar logado")
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
            alert('Tema atualizado com sucesso');
        } else {
            post(`/temas`, tema, setTema, {
                headers: {
                    'Authorization': token
                }
            })
            alert('Tema cadastrado com sucesso');
        }
        back()

    }

    function back() {
        navigate('/temas')
    }

    return (
        <Container maxWidth="sm" className="topo">
            <form onSubmit={onSubmit}>
                <Typography variant="h3" color="textSecondary" component="h1" align="center" >cadastre uma causa</Typography>
                <TextField value={tema.causa} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedTema(e)} id="causa" label="causa" variant="outlined" name="causa" margin="normal" fullWidth />
                <TextField value={tema.metaArrecadacao} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedTema(e)} id="metaArrecadacao" label="digite o valor" variant="outlined" name="metaArrecadacao" margin="normal" fullWidth />
                <Button type="submit" variant="contained" color="primary">
                    Finalizar
                </Button>
            </form>
        </Container>
    )
}

export default CadastrarTema;