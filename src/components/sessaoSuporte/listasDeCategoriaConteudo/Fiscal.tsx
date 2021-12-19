import { useEffect, useState } from "react";
import { dadosCartao } from "../../conteudo/ConteudoLista"
import ReactPaginate from 'react-paginate';
import Cartao from "../../conteudo/Cartao";
import estilo from "../../../styles/Paginacao.module.css"

export default function Fiscal({ itemsPorPagina }) {
    const listaDeFiscal: any[] = []
    const [currentItems, setCurrentItems] = useState(null);
    const [paginasContadas, setPaginasContadas] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);

    dadosCartao.map((elemento) => {
        elemento.categoria.map((categoria) => {
            if (categoria == 'fiscal') {
                listaDeFiscal.push(elemento)
            }
        })
    })

    useEffect(() => {
        const endOffset = itemOffset + itemsPorPagina;
        console.log(`Loading items from ${itemOffset} to ${endOffset}`);
        setCurrentItems(listaDeFiscal.slice(itemOffset, endOffset));
        setPaginasContadas(Math.ceil(listaDeFiscal.length / itemsPorPagina));
    }, [itemOffset, itemsPorPagina]);

    const paginasPorClick = (evento) => {
        const newOffset = (evento.selected * itemsPorPagina) % listaDeFiscal.length;
        console.log(
            `User requested page number ${evento.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };


    return (
        <>
            <div className={estilo.conteudoLista2}>
                {currentItems &&
                    currentItems.map((elemento, key) => {
                            return (
                                <>
                                    <Cartao key={key} id={elemento.id} imagem={elemento.imagem} nome={elemento.nome} />
                                </>
                            )
                    })}
            </div>
                <ReactPaginate
                    breakLabel="*"
                    nextLabel="next >"
                    onPageChange={paginasPorClick}
                    pageRangeDisplayed={5}
                    pageCount={paginasContadas}
                    previousLabel="< Antes"
                    renderOnZeroPageCount={null}
                    containerClassName={"pagination"}
                    previousLinkClassName={"pagination__link"}
                    nextLinkClassName={"pagination__link"}
                    disabledClassName={"pagination__link--disabled"}
                    activeClassName={"pagination__link--active"}
                />
        </>
    )
}