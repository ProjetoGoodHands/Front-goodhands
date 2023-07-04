import { Box, Grid, Typography } from '@material-ui/core';
import './TermosDeUso.css';
import imgTermoDeUso from '../../../../assets/img/Accept terms-pana.png';

function TermosDeUso() {
    return (
        <>
            <Grid container>
                <Grid item md={12} >

                    <Box className='container-box-bem-vindo'>
                        <Typography className='h2-termos-de-uso' variant="h2" color="textSecondary" component="h2" align="center">Termos de Uso para Postagens - Combate à Pobreza</Typography>
                        <Box className='box-bem-vindo'>
                            <p >
                                Bem-vindo ao nosso site dedicado ao combate à pobreza! Antes de começar a fazer suas postagens, é importante que você leia e compreenda os nossos termos de uso. Ao utilizar nosso site e fazer suas postagens, você concorda com os seguintes termos:
                            </p>

                        </Box>
                    </Box>

                </Grid>

                <Grid item md={6} >
                    <Box className='p-termos-de-uso'>

                        <p>
                            <span>1</span> Conteúdo Relacionado ao Combate à Pobreza: Nosso site é exclusivamente voltado para o combate à pobreza e suas questões associadas. Portanto, todas as suas postagens devem estar relacionadas a esse tema. Encorajamos você a compartilhar ideias, histórias inspiradoras, projetos, iniciativas e outros tópicos que promovam soluções para a erradicação da pobreza.
                        </p>
                        <p>
                            <span>2</span> Respeito e Responsabilidade: Exigimos que todos os usuários se comportem de maneira respeitosa e responsável ao interagir em nosso site. Comentários e postagens maldosas, ofensivas, discriminatórias ou que violem os direitos dos outros serão removidos sem aviso prévio. Queremos criar um ambiente seguro e acolhedor para todos os envolvidos na luta contra a pobreza.
                        </p>
                        <p>
                            <span>3</span> Escolha de Temas e Metas de Arrecadação: Os usuários têm a liberdade de escolher entre os temas já existentes no site ou criar um novo. Ao fazer uma postagem, você poderá definir uma meta inicial para a arrecadação de fundos relacionada ao tema escolhido. Essa meta servirá como um incentivo para mobilizar recursos financeiros que contribuam para a redução da pobreza e o apoio a projetos relevantes.
                        </p>
                        <p>
                            <span>4</span> Colaboração e Comunidade: Encorajamos a colaboração entre os usuários do site. Compartilhe suas ideias, experiências e conhecimentos, e esteja disposto a aprender com os outros. Ao criar uma postagem, você se torna parte de uma comunidade comprometida em combater a pobreza, e juntos podemos causar um impacto significativo.
                        </p>
                        <p>
                            <span>5</span> Moderação e Remoção de Conteúdo: Nos reservamos o direito de moderar e remover qualquer conteúdo que não esteja em conformidade com estes termos de uso. Caso uma postagem não esteja de acordo com as diretrizes mencionadas, nos reservamos o direito de apagá-la sem aviso prévio. Fazemos isso para garantir que nosso site mantenha a sua finalidade de combater a pobreza e fornecer um espaço de qualidade para os nossos usuários.

                        </p>
                    </Box>

                </Grid>
                <Grid item md={6}>
                    <img className='imgTermoDeUso' src={imgTermoDeUso} alt="" />
                </Grid>

                <Box className='contaier-termos-de-uso'>


                    <p>
                        Agradecemos por fazer parte da nossa comunidade e por se dedicar ao combate à pobreza. Ao seguir esses termos de uso, você estará contribuindo para a construção de um ambiente positivo e solidário. Juntos, podemos alcançar grandes conquistas na luta contra a pobreza e promover uma mudança significativa na vida das pessoas menos favorecidas.
                    </p>
                    <p>
                        Lembre-se de que esses termos de uso estão sujeitos a alterações, e é responsabilidade do usuário revisá-los periodicamente. Se tiver alguma dúvida, entre em contato conosco. Obrigado por sua compreensão e apoio!
                    </p>
                </Box>
            </Grid>
        </>
    );
}

export default TermosDeUso;