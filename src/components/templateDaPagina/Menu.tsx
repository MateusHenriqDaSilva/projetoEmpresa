import { AjustesIcon, CasaIcon, ConfigIcons, DevIcon, SuporteIcons } from '../../icons/icones'
import estilo from '../../styles/Menu.module.css'
import MenuItem from './menuItem'

export default function Menu() {
    return (
        <div className={estilo.menu}>
            <div className={estilo.conteudoMenu}>
                <MenuItem titulo="Inicio" caminho="/" icone={CasaIcon} />
                <MenuItem titulo="Suporte" caminho="/suporte" icone={SuporteIcons} />
                <MenuItem titulo="Dev" caminho="/" icone={DevIcon} />
                <MenuItem titulo="Ajustes" caminho="/" icone={AjustesIcon} />
                <MenuItem titulo="Configuracao" caminho="/" icone={ConfigIcons} />
            </div>
        </div>
    )
}