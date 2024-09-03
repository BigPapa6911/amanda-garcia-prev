import style from './styles.module.css'

const Header = () => {
    return (
        <header className={style.header}>
            <a className={style.link} href='/'>Logo</a>
            <a className={style.link} href='/'>Início</a>
            <a className={style.link} href='/Contato'>Contato</a>
        </header>
    )
}

export default Header