import { useState } from 'react'
import SubCabecalhoSelecao from '../sessaoSuporte/SubCabecalhoSelecao'
import Teste from '../teste/Teste'
import ConteudoTreinamento from '../Treinamentos/ConteudoTreinamento'
import estilo from './../../styles/SelecaoEspecifica.module.css'

interface ISelecaoEspecifica {
    categoria: string[]
}

export default function SelecaoEspecifica(props: ISelecaoEspecifica) {
    const [selecionado, setSelecionado] = useState(props.categoria[0])

    function alterarSelecao(evento) {
        setSelecionado(evento.target.value)
    }

    return (
        <div className={estilo.selecaoEspecifica}>
            <select name="Categorias de Suporte" id="suporte" className={estilo.selecao} onChange={alterarSelecao} >
                {props.categoria.map((elemento, key) => {
                    return (
                        <option key={key} className={estilo.selecaoComponente} value={elemento} > {elemento}</option>
                    )
                })}
            </select>
            {
                selecionado == props.categoria[0] ?
                    <SubCabecalhoSelecao />
                    : false
            }
            {
                selecionado == props.categoria[1] ?
                    <ConteudoTreinamento />
                    : false
            }
            {
                selecionado == props.categoria[2] ?
                    <Teste />
                    : false
            }
            {
                selecionado == props.categoria[3] ?
                    <h1>Bem Vindo 4</h1>
                    : false
            }
        </div >
    )
}