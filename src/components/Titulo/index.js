import style from './styles.module.css'

const Titulo = ({children}) => {
    return (
        <div className={style.titulo}>
            {children}
        </div>
    )
}

export default Titulo;