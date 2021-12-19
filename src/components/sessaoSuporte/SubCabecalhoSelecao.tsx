import { dadosCartao } from "../conteudo/ConteudoLista"
import ConteudoPorSelecao from "./ConteudoPorSelecao"

export default function SubCabecalhoSelecao() {
    const categoriasFiltrada: string[] = []
    dadosCartao.map((elemento) => {
        elemento.categoria.map((valor) => {
            if (!categoriasFiltrada.includes(valor)) {
                return categoriasFiltrada.push(valor)
            }
        })
    })
    return (
        <ConteudoPorSelecao categorias={categoriasFiltrada} itemsPorPagina={10} />
    )
}