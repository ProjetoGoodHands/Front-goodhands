import React, { useState, useEffect, ChangeEvent } from 'react';
import './Login.css';
import useLocalStorage from 'react-use-localstorage';
import { Grid, Box, Typography, TextField, Button } from "@material-ui/core";
import { Link, useNavigate } from 'react-router-dom';
import UserLogin from '../../models/UserLogin';
import { login } from '../../services/Service';
import { toast } from 'react-toastify';

function Login() {
    let navigate = useNavigate();
    const [token, setToken] = useLocalStorage('token');
    const [userLogin, setUserLogin] = useState<UserLogin>(
        {
            id: 0,
            usuario: '',
            senha: '',
            token: ''
        }
    )

    function updatedModel(e: ChangeEvent<HTMLInputElement>) {

        setUserLogin({
            ...userLogin,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        if (token != '') {
            navigate('/home')
        }
    }, [token])

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            await login(`/usuarios/logar`, userLogin, setToken)


            toast.success('Usuario logado com sucesso', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
        } catch (error) {
            toast.error('Dados do usuário inconsistentes. Erro ao logar!', {
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
    }

    return (
        <Grid container direction='row' justifyContent='center' alignItems='center'>
        <Grid xs={7}>
            <Box className='informacoes-login'>
                <img className="img-login" src="https://cdn.discordapp.com/attachments/1087794407052419213/1122272181120946216/tela_de_login_2_1.png" alt="" />
            </Box>
        </Grid>
        <Grid xs={5}  style={{ display: 'grid', placeItems: 'center', height: '100%' }}>
            <div className='container' >
                <div className='container-info'>
                <form onSubmit={onSubmit}>
                    <Typography variant='h3' gutterBottom className='textos1'>Login</Typography>
                    <Typography className='text-info'>Usuario</Typography>

                    <TextField value={userLogin.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuario' label='usuário' variant='standard' name='usuario' margin='normal' fullWidth />
                    <Typography className='text-info'>Senha</Typography>
                    <TextField value={userLogin.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='senha' variant='standard' name='senha' margin='normal' type='password' fullWidth />

                    <Box marginTop={2} textAlign='center'>
                        <Button  className='button' type='submit' variant='contained' color='primary'>
                            Entrar
                        </Button>
                    </Box>
                </form>
                   
                   
                
                </div>
                <Box display='flex' justifyContent='center' marginTop={2}>
                    <Box marginRight={1}>
                        <Typography variant='subtitle1' gutterBottom align='center'
                            className='cadastre-se'>Não tem uma conta?</Typography>
                    </Box>

                    <Link to='/cadastro' className="text-decorator-none">
                         <Typography id='cadastra' variant='subtitle1' gutterBottom align='center' className='cadastre-se'>Cadastre-se</Typography>
                        
                    </Link>
                </Box>
            </div>
        </Grid>
    </Grid>

    );
}

export default Login;