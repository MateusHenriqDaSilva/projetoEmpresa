import estilo from '../../styles/ConteudoCartao.module.css'
import SubCabecalhoSelecao from '../sessaoSuporte/SubCabecalhoSelecao'
import Cartao from './Cartao'
import { dadosCartao } from './ConteudoLista'

export default function ConteudoCartao() {
    return (
        <div className={estilo.conteudo}>
            <SubCabecalhoSelecao />
            {dadosCartao.map((elemento, key) => {
                key = elemento.id
                return (
                    <Cartao key={elemento.id} id={elemento.id} imagem={elemento.imagem} nome={elemento.nome} />
                )
            })}
        </div>
    )
}