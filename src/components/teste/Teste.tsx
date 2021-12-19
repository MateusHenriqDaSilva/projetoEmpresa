import { useEffect, useState } from "react";
import api from "../../pages/api/conexao";

export default function Teste() {
    const [produtoRecebido, setProdutoRecebido] = useState([]);

    useEffect(() => {
        api
            .get("/produto")
            .then((resposta) => setProdutoRecebido(resposta.data.produto))
            .catch((erro) => {
                console.error("ops! ocorreu um erro" + erro);
            });
    }, []);

    // console.log(produtoRecebido?.produto[0].Codigo)

    return (
        <div style={{ padding: '30px' }}>
            <h1>Buscando na API do Master os Produtos:</h1>
            {
                produtoRecebido.map((elemento, key) => {
                    return (
                        <div key={key} style={{ background: 'black', color: 'white', padding: '20px', borderRadius: '10px', width: '400px', margin: '20px' }}>
                            <h2>nome: {elemento.Nome}</h2>
                            <h4>estoque atual: {elemento.EstoqueAtual}</h4>
                        </div>
                    )
                })
            }
        </div>
    )
}

