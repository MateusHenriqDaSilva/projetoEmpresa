import estilo from '../../styles/FiltrarCartoes.module.css'
import { useState } from 'react'
import SimpleImageSlider from "react-simple-image-slider";

interface propsfiltrarCartoes {
    id: number
    nome: string
    passos: string[][]
    imagensVinculadas: any
}

export default function FiltrarCartoes(props: propsfiltrarCartoes) {
    const [cor, setCor] = useState('#393e46');
    const clicarNoBotao = (evento) => {
        if (evento.target.value == evento.target.value) {
            evento.target.style = ''
        }
    }

    const filtrado = props.imagensVinculadas

    return (
        <div className={estilo.conteudoTotal}>
            <div className={estilo.conteudoPassos}>
                <div className={estilo.conteudoPorId}>
                    <h1 className={estilo.cabecalhoTitulo}>
                        {props.nome}
                    </h1>
                    <div className={estilo.conteudoTexto}>
                        <div className={estilo.container}>
                            {props.passos.map((elemento, index) => {
                                return (
                                    <button key={index} className={estilo.passos} value={index} style={{ backgroundColor: cor }}
                                        onClick={clicarNoBotao}>
                                        {index + 1}. {elemento}
                                    </button>)
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <div className={estilo.conteudoSlider}>
                <SimpleImageSlider
                    style={{ width: '100%', height: '100vh', color: '#000', background: '#000' }}
                    width={'50%'}
                    height={'80%'}
                    images={filtrado}
                    showBullets={true}
                    showNavs={true}
                    navSize={100}
                    navStyle={2}
                    bgColor={'000'}
                />
            </div>
        </div>
    )
}