import style from './styles.module.css'
import imagemFormatura from './graduation-hat-alt-2-svgrepo-com.svg'
import Titulo from '../Titulo';

const AboutMe = () => {

    return (
        <>
            <Titulo>
                Lorem ipsum
            </Titulo>
            <section className={style.secao}>
                <div className={style.div}>
                    <img src={imagemFormatura} className={style.imagem} />
                    <p className={style.paragrafo}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu venenatis neque. Nullam quis erat congue, hendrerit nulla sed, facilisis ligula. Cras a lectus eros.</p>
                </div>
                <div className={style.div}>
                    <img src={imagemFormatura} className={style.imagem} />
                    <p className={style.paragrafo}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu venenatis neque. Nullam quis erat congue, hendrerit nulla sed, facilisis ligula. Cras a lectus eros.</p>
                </div>
                <div className={style.div}>
                    <img src={imagemFormatura} className={style.imagem} />
                    <p className={style.paragrafo}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu venenatis neque. Nullam quis erat congue, hendrerit nulla sed, facilisis ligula. Cras a lectus eros.</p>
                </div>
            </section>
        </>
    )
}

export default AboutMe;