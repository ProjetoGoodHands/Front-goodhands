import Tema from './Tema'

interface Postagem {
    id: number,
    imagem: string,
    titulo: string,
    descricao: string,
    arrecadacao: number,
    temapostagem?: Tema | null
}

export default Postagem;