import { Box, Grid, Typography } from '@material-ui/core';
import React from 'react';
import "./sobrenos.css"
import kaique from '../../assets/img/kaique.jpg'
import gustavo from '../../assets/img/gustavo.jpg'
import roger from '../../assets/img/roger.jpg'
import ramon from '../../assets/img/ramon.jpg'
import img from '../../assets/img/Design team-amico.png'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

function Sobrenos() {
    return (
        <>
            <Grid md={12} container id='sobre-nos-apresentacao' >
                
                    <Box className='texto-primeiro'>
                        <Typography className='descubra-quem-somos' variant="subtitle1" gutterBottom>
                            buscamos <span className='decoracao-texto-sobre'>soluções criativas</span> .
                        </Typography>
                        <Typography className='descubra-quem-somos' variant="subtitle1" gutterBottom>
                            Valorizamos a colaboração e
                        </Typography>
                        <Typography className='descubra-quem-somos' variant="subtitle1" gutterBottom>
                            o <span className='decoracao-texto-sobre'>impacto positivo no mundo.</span>
                        </Typography>

                        <button className='button-tela-sobre'>saiba mais</button>
                    </Box>
                    <Box>
                        <img className='ft-equipe' src={img} alt="" />
                    </Box>
                
            </Grid>

            <Grid md={12} container justifyContent="center" alignItems="center" className='apresentacao-goodhands-1'>
                    
                <Grid alignItems="center" item md={6}>
                    <Box>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h3" align="center" className='devscard2' >Good Hands</Typography>
                        <Typography variant="body1" gutterBottom color="textPrimary" component="h5" align="center" className='quem-somos' >
                            O Good Hands é uma organização não governamental com o objetivo de ajudar e dar suporte para a divulgação de ações sustentáveis, com foco na erradicação da pobresa,
                            nosso projeto está disponível para a divulgação das mais diversas causas sociais que precisarem do nosso apoio. Dentro da nossa plataforma, você poderá
                            criar uma causa social que queira divulgar, definir uma meta de quanto precisará para realiza-la e apresentar um descritivo sobre o que se trata esse projeto e a
                            importância da sua existência e realização.
                        </Typography>
                    </Box>
                </Grid>

                <Grid item md={6}>
                    <Box  textAlign={'center'}>
                        <img className="goodHands-sobre-nos" src="https://cdn.discordapp.com/attachments/1087794407052419213/1120330267660390530/LogoUnicaPNG.png" referrerPolicy="no-referrer" />
                    </Box>
                </Grid>
            </Grid>

            <Grid md={12} container direction="row" justifyContent="center" alignItems="center" className='apresentacao-goodhands-2' >
                <Grid item md={6}>
                    <Box paddingX={5} textAlign={'center'}>
                        <img src="https://cdn-icons-png.flaticon.com/256/7582/7582626.png" referrerPolicy="no-referrer" />
                    </Box>
                </Grid>
                <Grid alignItems="center" item md={6}>
                    <Box>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h3" align="center" className='titulomissao'>Pelo que lutamos</Typography>
                        <Typography variant="body1" gutterBottom color="textPrimary" component="h5" align="center" className='quem-somos'>  Nosso projeto tem como meta principal, que todo e qualquer causa criada pelos nossos usuários tenha o maior nível de alcance possível, sendo assim, nos comprometemos
                        em criar um ambiente no qual seja simples e de fácil navegação tanto para um usuário quanto para quem visitar nosso site. Criado como um projeto 100% não governamental, o Good Hands tem como valores respeito ao próximo, trablaho em equipe, diversidade, foco no crescimento e desenvolvimento social, entre outros, tendo como missão se tornar uma ONG de nível nacional, alcançando um público em torno do país e auxiliando no combate á pobresa e a desigualdade social através da ajuda coletiva entre as pessoas, insentivando solidariedade, boas interações, respeito e diversidade entre elas.</Typography>
                    </Box>
                </Grid>
            </Grid>

            

            <Grid container alignItems="center">
                <Grid xs={12} >

                    <Box className='container-informacos-dev' display='flex' justifyContent='center'>
                        <Typography className='quem-somos-h3' variant="h3" gutterBottom> Conheça nosso time</Typography>
                    </Box>

                    <Box className='todo-time'>

                        <Box className='container-info-develop'>
                            <Box className='img-sobre-develop'>
                                <img className='ft-time' src={kaique} alt="foto do desenvolvedor kaique" />
                            </Box>

                            <Box className='container-desenvolvedor'>
                                <Typography className='nome-develop' variant="h4" gutterBottom> João kaique da silva</Typography>

                                <Typography className='sobre-mim' variant="subtitle1" gutterBottom>Tenho 23 anos e moro em São Paulo. Recentemente, concluí o Bootcamp de Java FullStack e estou empolgado com minha formação e as oportunidades que surgem a partir dela. Sou apaixonado por esportes e tecnologia, e estou sempre em busca de novas oportunidades de aprendizado.</Typography>

                                <Typography variant="subtitle1" gutterBottom>
                                    <a className='decoration-none' href="https://github.com/kaiquesilvadev"> <GitHubIcon /></a>
                                    <a className='decoration-none' href="https://www.linkedin.com/in/joaokaique/"> <LinkedInIcon /></a></Typography>
                            </Box>
                        </Box>

                        <Box className='container-info-develop-2'>

                            <Box className='container-desenvolvedor'>
                                <Typography className='nome-develop' variant="h4" gutterBottom> Roger Ramos</Typography>

                                <Typography className='sobre-mim' variant="subtitle1" gutterBottom> Nascido e criado em São Paulo, possuo formação técnica em informática e recentemente concluí o boot camp de Java FullStack da Generation Brasil. Sou um entusiasta da tecnologia desde a minha infância. Tenho uma paixão por games, futebol e dedico uma parte do meu tempo a musica estudando guitarra.</Typography>

                                <Typography variant="subtitle1" gutterBottom>
                                    <a className='decoration-none' href="https://github.com/custicol"><GitHubIcon /></a>
                                    <a className='decoration-none' href="https://www.linkedin.com/in/roger-ramos-0b43361b6/"><LinkedInIcon /></a></Typography>
                            </Box>
                            <Box className='img-sobre-develop'>
                                <img className='ft-time' src={roger} alt="" />
                            </Box>
                        </Box>

                        <Box className='container-info-develop'>
                            <Box className='img-sobre-develop'>
                                <img className='ft-time' src={ramon} alt="" />
                            </Box>

                            <Box className='container-desenvolvedor'>
                                <Typography className='nome-develop' variant="h4" gutterBottom> Ramon siqueira</Typography>

                                <Typography className='sobre-mim' variant="subtitle1" gutterBottom>Formado no Bootcamp da Generation Brasil e Cursando Big data e Inteligência na Anhembi Morumbi. Um entusiasta da programação apaixonado por transformar ideias em soluções inovadoras.</Typography>

                                <Typography variant="subtitle1" gutterBottom>
                                    <a className='decoration-none' href="https://github.com/Ramon-Siqueira"><GitHubIcon /></a>
                                    <a className='decoration-none' href="https://www.linkedin.com/in/ramonsiqueira80"> <LinkedInIcon /> </a></Typography>
                            </Box>
                        </Box>

                        <Box className='container-info-develop-2'>

                            <Box className='container-desenvolvedor'>
                                <Typography className='nome-develop' variant="h4" gutterBottom>Gustavo Santos</Typography>

                                <Typography className='sobre-mim' variant="subtitle1" gutterBottom>28 anos, moro em São Paulo, atualmente recém formado no Bootcamp de Java FullStack pela Generation Brasil, tem um cachorro chamado Lebron James, leitor de livros e critico de cinema.</Typography>

                                <Typography variant="subtitle1" gutterBottom>
                                    <a className='decoration-none' href="https://github.com/GustavoZambonSantos"><GitHubIcon /></a>
                                    <a className='decoration-none' href="https://www.linkedin.com/in/gustavo-santos-2a3505118/"> <LinkedInIcon /></a></Typography>
                            </Box>
                            <Box className='img-sobre-develop'>
                                <img className='ft-time' src={gustavo} alt="" />
                            </Box>
                        </Box>

                        <Box className='container-info-develop'>
                            <Box className='img-sobre-develop'>
                                <img className='ft-time' src={kaique} alt="" />
                            </Box>

                            <Box className='container-desenvolvedor'>
                                <Typography className='nome-develop' variant="h4" gutterBottom> nome do individuo</Typography>

                                <Typography className='sobre-mim' variant="subtitle1" gutterBottom> Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque ut reiciendis dicta sunt porro voluptates quis ea quaerat vero ex eveniet at voluptas praesentium magnam cupiditate harum, natus fugiat? Quae.</Typography>

                                <Typography variant="subtitle1" gutterBottom> <GitHubIcon /> <LinkedInIcon /> <WhatsAppIcon /></Typography>
                            </Box>
                        </Box>

                        <Box className='container-info-develop-2'>

                            <Box className='container-desenvolvedor'>
                                <Typography className='nome-develop' variant="h4" gutterBottom> nome do individuo</Typography>

                                <Typography className='sobre-mim' variant="subtitle1" gutterBottom> Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque ut reiciendis dicta sunt porro voluptates quis ea quaerat vero ex eveniet at voluptas praesentium magnam cupiditate harum, natus fugiat? Quae.</Typography>

                                <Typography variant="subtitle1" gutterBottom> <GitHubIcon /> <LinkedInIcon /> <WhatsAppIcon /> </Typography>
                            </Box>
                            <Box className='img-sobre-develop'>
                                <img className='ft-time' src={kaique} alt="" />
                            </Box>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default Sobrenos;