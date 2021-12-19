import Menu from "../templateDaPagina/Menu";
import SelecaoEspecifica from "./SelecaoEspecifica";
import estilo from '../../styles/MenuSelecao.module.css'

export default function MenuSelecao() {
    const categorias: string[] = ['Tutoriais', 'Treinamentos', 'Reuniao', 'Tarefas']

    return (
        <div className={estilo.menuSelecao}>
                <SelecaoEspecifica categoria={categorias} />
        </div>
    )
}