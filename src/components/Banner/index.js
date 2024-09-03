import style from './styles.module.css'
import fotoAmanda from './fotoAmanda.png'
import Titulo from '../Titulo';

const Banner = () => {
    return (
        <>
            <div className={style.banner}>
                <p className={style.paragrafo}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <img className={style.imagem} src={fotoAmanda} alt='Foto da Amanda' />
            </div>
        </>
    )
}

export default Banner;