import { dadosCartao } from '../../components/conteudo/ConteudoLista'
import { useRouter } from 'next/router'
import FiltrarCartoes from '../../components/conteudo/FiltrarCartoes'
import estilo from '../../styles/CategoriaPorId.module.css'


export default function Tutorial() {
    const router = useRouter()
    const { id } = router.query

    return (
        <div className={estilo.CategoriaPorId}>
            {
                dadosCartao.map((elemento) => {
                    if (elemento.id == +id) {
                        return (
                            <FiltrarCartoes id={elemento.id} nome={elemento.nome} passos={elemento.passos} imagensVinculadas={elemento.imagensVinculadas} />
                        )
                    }
                })
            }
        </div>
    )
}