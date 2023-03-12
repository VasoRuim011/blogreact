import { Grid, TextField, Typography, Button } from '@mui/material';
import Box from '@mui/material/Box';
import React, { ChangeEvent, useEffect, useState } from 'react';
import useLocalStorage from 'react-use-localstorage';
import UsuarioLogin from '../../models/UsuarioLogin';
import './Login.css'
import { fontWeight } from '@mui/system';
import { login } from '../../components/services/Services';
import { Link, useNavigate } from 'react-router-dom';


function Login() {
    let navigate = useNavigate()
    const [token, setToken] = useLocalStorage('token')
    const [userLogin, setUserLogin] = useState<UsuarioLogin>({
        id: 0,
        nome: '',
        usuario: '',
        senha: '',
        foto: '',
        token: ''
    })

    function updateModel(e: ChangeEvent<HTMLInputElement>) {
        setUserLogin({
            ...userLogin,
            [e.target.name]: e.target.value
        })
    }


    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        try {
            await login('/usuarios/logar', userLogin, setToken)
            alert('Usuário logado com sucesso')
        } catch (error) {
            alert('Usuário e/ou senha inválidos')
        }
    }

    useEffect(() => {
        if (token !== '') {
            navigate('/home')
        }
    }, [token])

    function Login() {
        return (
            <Grid container direction='row' justifyContent='center' alignItems='center'>
                <Grid alignItems='center' xs={6}>
                    <Box padding={20}>
                        <form>
                            <Typography variant='h3' gutterBottom color='textPrimary' align='center' style={{ fontWeight: 'bold' }}>Entrar</Typography>
                            <TextField id='usuario' label='usuario' variant='outlined' name='usuario' margin='normal' fullWidth />
                            <TextField id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />
                            <Box marginTop={2} textAlign='center'>
                                <Link to='/home' className='text-decorator-none'>
                                    <Button type='submit' variant='contained' color='primary'>
                                        Logar
                                    </Button>
                                </Link>
                            </Box>
                        </form>
                        <Box display='flex' justifyContent='center' marginTop={2}>
                            <Box marginRight={1}>
                                <Typography variant='subtitle1' gutterBottom align='center'>Não tem uma conta?</Typography>
                            </Box>
                            <Typography variant='subtitle1' gutterBottom align='center' style={{ fontWeight: 'bold' }}>Cadastre-se</Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid xs={6} style={{
                    backgroundImage: `url(https://img.freepik.com/vetores-premium/ilustracao-design-de-fundo-de-casas-coloridas_755165-7.jpg)`,
                    backgroundRepeat: 'no-repeat', width: '100vh', minHeight: '100vh', backgroundSize: 'cover', backgroundPosition: 'center'
                }}>
                </Grid>
            </Grid>
        );
    }

    export default Login;