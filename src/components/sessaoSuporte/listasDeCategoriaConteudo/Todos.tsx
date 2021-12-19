import { useEffect, useState } from "react";
import { dadosCartao } from "../../conteudo/ConteudoLista"
import ReactPaginate from 'react-paginate';
import Cartao from "../../conteudo/Cartao";
import estilo from "../../../styles/Paginacao.module.css"

export default function Todos({ itemsPorPagina }) {
    const listaDeTodos: any[] = []
    const [currentItems, setCurrentItems] = useState(null);
    const [paginasContadas, setPaginasContadas] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);

    let [filtro, setFiltro] = useState('')

    useEffect(() => {
        const endOffset = itemOffset + itemsPorPagina;
        console.log(`Loading items from ${itemOffset} to ${endOffset}`);
        setCurrentItems(listaDeTodos.slice(itemOffset, endOffset));
        setPaginasContadas(Math.ceil(listaDeTodos.length / itemsPorPagina));
    }, [itemOffset, itemsPorPagina]);

    function paginasPorClick(evento) {
        const newOffset = (evento.selected * itemsPorPagina) % listaDeTodos.length;
        console.log(
            `User requested page number ${evento.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };

    dadosCartao.filter((elemento) => elemento.nome.includes(filtro)).map((nomeFiltrado) => {
        listaDeTodos.push(nomeFiltrado)
    })

    function filtragem(e) {
        setFiltro(e.target.value)
        const endOffset = itemOffset + itemsPorPagina;
        console.log(`Loading items from ${itemOffset} to ${endOffset}`);
        setCurrentItems(listaDeTodos.slice(itemOffset, endOffset));
        setPaginasContadas(Math.ceil(listaDeTodos.length / itemsPorPagina));
    }

    return (
        <>
            <div className={estilo.conteudoLista}>
                <input type="text" name="name" placeholder="pesquise o tutorial" className={estilo.filtro} value={filtro} onChange={filtragem} />
                <div className={estilo.filtracao}>
                    {currentItems &&
                        currentItems.filter((elemento) => elemento.nome.includes(filtro)).map((nomeFiltrado, key) => {
                            return (
                                <Cartao key={key} id={nomeFiltrado.id} imagem={nomeFiltrado.imagem} nome={nomeFiltrado.nome} />
                            )
                        })}
                    <ReactPaginate
                        className={estilo.paginas}
                        breakLabel="*"
                        nextLabel="Proximo >"
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
                </div>
            </div>
        </>
    )
}