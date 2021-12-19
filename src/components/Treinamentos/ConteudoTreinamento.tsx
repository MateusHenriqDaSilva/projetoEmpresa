import { useState } from "react";
import estilo from '../../styles/ConteudoTreinamento.module.css'

export default function ConteudoTreinamento() {

    const treinamentosConteudo = [
        { title: "Cadastro de usuário", numero: "l" },
        { title: "Cadastro de usuário HelpDesk", numero: "2" },
        { title: "Apresentação Youtube", numero: "3" },
        { title: "Apresentação FAQ", numero: "4" },
        { title: "Cadastro Produto", numero: "5" },
        { title: "Cadastro Fabricante", numero: "6" },
        { title: "Cadastro de Fornecedor", numero: "7" },
        { title: "Cadastro de Tipo/Categoria", numero: "8" },
        { title: "Cadastro de Grade X e Y", numero: "9" },
        { title: "Cadastro de Cliente", numero: "l0" },
        { title: "Dicionário de Dados", numero: "11" },
        { title: "Centro de Alteração de Dados", numero: "12" },
    ];
    const [hover0, setHover0] = useState(false);
    const [hover1, setHover1] = useState(false);
    const [hover2, setHover2] = useState(false);
    const [hover3, setHover3] = useState(false);
    const [hover4, setHover4] = useState(false);
    const [hover5, setHover5] = useState(false);
    const [hover6, setHover6] = useState(false);
    const [hover7, setHover7] = useState(false);
    const [hover8, setHover8] = useState(false);
    const [hover9, setHover9] = useState(false);

    const onHover0 = () => {
        setHover0(!hover0);
    };

    const onHover1 = () => {
        setHover1(!hover1);
    };
    const onHover2 = () => {
        setHover2(!hover2);
    };
    const onHover3 = () => {
        setHover3(!hover3);
    };
    const onHover4 = () => {
        setHover4(!hover4);
    };
    const onHover5 = () => {
        setHover5(!hover5);
    };
    const onHover6 = () => {
        setHover6(!hover6);
    };
    const onHover7 = () => {
        setHover7(!hover7);
    };
    const onHover8 = () => {
        setHover8(!hover8);
    };
    const onHover9 = () => {
        setHover9(!hover9);
    };
    return (
        <div className={estilo.treinamentos}>
            <div className={estilo.conteudoInicio}>
                <h1>Inicio</h1>
            </div>
            {hover0 && <h1 className={estilo.AoPassarMouse}>{treinamentosConteudo[0].title}</h1>}
            <div className={estilo.conteudoTreinamento} onMouseEnter={onHover0} onMouseLeave={onHover0}>
                <h3>Cadastro de usuário</h3>
            </div>
            {hover1 && <h1 className={estilo.AoPassarMouse}>{treinamentosConteudo[1].title}</h1>}
            <div className={estilo.conteudoTreinamento} onMouseEnter={onHover1} onMouseLeave={onHover1}>
                <h3>Cadastro de usuário - HelDesk</h3>
            </div>
            {hover2 && <h1 className={estilo.AoPassarMouse}>{treinamentosConteudo[2].title}</h1>}
            <div className={estilo.conteudoTreinamento} onMouseEnter={onHover2} onMouseLeave={onHover2}>
                <h3>Apresentação Youtube</h3>
            </div>
            {hover3 && <h1 className={estilo.AoPassarMouse}>{treinamentosConteudo[3].title}</h1>}
            <div className={estilo.conteudoTreinamento} onMouseEnter={onHover3} onMouseLeave={onHover3}>
                <h3>Apresentação FAQ</h3>
            </div>
            {hover4 && <h1 className={estilo.AoPassarMouse}>{treinamentosConteudo[4].title}</h1>}
            <div className={estilo.conteudoTreinamento} onMouseEnter={onHover4} onMouseLeave={onHover4}>
                <h3>Cadastro Produto</h3>
            </div>
            {hover5 && <h1 className={estilo.AoPassarMouse}>{treinamentosConteudo[5].title}</h1>}
            <div className={estilo.conteudoTreinamento} onMouseEnter={onHover5} onMouseLeave={onHover5}>
                <h3>Cadastro Fabricante</h3>
            </div>
            {hover6 && <h1 className={estilo.AoPassarMouse}>{treinamentosConteudo[6].title}</h1>}
            <div className={estilo.conteudoTreinamento} onMouseEnter={onHover6} onMouseLeave={onHover6}>
                <h3>Cadastro de Fornecedor</h3>
            </div>
            {hover7 && <h1 className={estilo.AoPassarMouse}>{treinamentosConteudo[7].title}</h1>}
            <div className={estilo.conteudoTreinamento} onMouseEnter={onHover7} onMouseLeave={onHover7}>
                <h3>Cadastro de Tipo/Categoria</h3>
            </div>
            {hover8 && <h1 className={estilo.AoPassarMouse}>{treinamentosConteudo[8].title}</h1>}
            <div className={estilo.conteudoTreinamento} onMouseEnter={onHover8} onMouseLeave={onHover8}>
                <h3>Cadastro de Grade X e Y</h3>
            </div>
            {hover9 && <h1 className={estilo.AoPassarMouse}>{treinamentosConteudo[9].title}</h1>}
            <div className={estilo.conteudoTreinamento} onMouseEnter={onHover9} onMouseLeave={onHover9}>
                <h3>Cadastro de Cliente</h3>
            </div>
        </div>
    );
}


