import { useEffect, useState } from 'react'
import estilo from '../../styles/SubCabecalhoTutorial.module.css'
import Kit from './listasDeCategoriaConteudo/Kit';
import Estoque from './listasDeCategoriaConteudo/Estoque';
import HelpDesk from './listasDeCategoriaConteudo/HelpDesk';
import Fiscal from './listasDeCategoriaConteudo/Fiscal';
import CadastroBase from './listasDeCategoriaConteudo/CadastroBase';
import Administrador from './listasDeCategoriaConteudo/Administrador';
import Relatorio from './listasDeCategoriaConteudo/Relatorio';
import Dados from './listasDeCategoriaConteudo/Dados';
import Site from './listasDeCategoriaConteudo/Site';
import Financeiro from './listasDeCategoriaConteudo/Financeiro';
import Compra from './listasDeCategoriaConteudo/Compra';
import Transportadora from './listasDeCategoriaConteudo/Transportadora';
import Etiquetas from './listasDeCategoriaConteudo/Etiquetas';
import Todos from './listasDeCategoriaConteudo/Todos';
import Pdv from './listasDeCategoriaConteudo/Pdv';

interface ISubMenuCabecalho {
    categorias: string[]
    itemsPorPagina: number
}

export default function ConteudoPorSelecao(props: ISubMenuCabecalho) {
    const [selecionado, setSelecionado] = useState(0)

    function trocarCategoria(evento) {
        setSelecionado(evento.target.value)
    }

    return (
        <div className={estilo.container}>
            <div className={estilo.subCabecalho}>
                {props.categorias.map((elemento, index) => {
                    return (
                        <li key={index} className={estilo.link} onClick={trocarCategoria} value={index}>{elemento}</li>
                    )
                })}
            </div>
            <div className={estilo.conteudo}>
                {selecionado == 0 ?
                    <Todos itemsPorPagina={10} />
                    : false}
                {selecionado == 1 ?
                    <Kit itemsPorPagina={10} />
                    : false}
                {selecionado == 2 ?
                    <Estoque itemsPorPagina={10} />
                    : false}
                {selecionado == 3 ?
                    <HelpDesk itemsPorPagina={10} />
                    : false}
                {selecionado == 4 ?
                    <Fiscal itemsPorPagina={10} />
                    : false}
                {selecionado == 5 ?
                    <CadastroBase itemsPorPagina={10} />
                    : false}
                {selecionado == 6 ?
                    <Administrador itemsPorPagina={10} />
                    : false}
                {selecionado == 7 ?
                    <Relatorio itemsPorPagina={10} />
                    : false}
                {selecionado == 8 ?
                    <Dados itemsPorPagina={10} />
                    : false}
                {selecionado == 9 ?
                    <Pdv itemsPorPagina={10} />
                    : false}
                {selecionado == 10 ?
                    <Site itemsPorPagina={10} />
                    : false}
                {selecionado == 11 ?
                    <Financeiro itemsPorPagina={10} />
                    : false}
                {selecionado == 12 ?
                    <Compra itemsPorPagina={10} />
                    : false}
                {selecionado == 13 ?
                    <Transportadora itemsPorPagina={10} />
                    : false}
                {selecionado == 14 ?
                    <Etiquetas itemsPorPagina={10} />
                    : false}
            </div>
        </div>
    )
}