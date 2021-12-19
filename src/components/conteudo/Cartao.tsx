import estilo from '../../styles/cartao.module.css'
import Link from 'next/link'
import Image from 'next/image'

interface propriedadesDoCartao {
    id: number
    imagem: any
    nome: string
    categoria?: string
}

export default function Cartao(props: propriedadesDoCartao) {
    return (
        <Link href={`/tutorial/${props.id}`} passHref>
            <div className={estilo.cartao}>
                <Image className={estilo.imagem}
                    src={props.imagem}
                    alt="Picture of the author"
                    width={300}
                    height={300}
                />
                <h1 className={estilo.titulo}>{props.nome}</h1>
            </div>
        </Link>
    )
}