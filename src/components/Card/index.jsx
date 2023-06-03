import style from './style.module.css'

export default function Card({ nombre = 'usuario', color = '#e1e1e1' }) {
    return (
        <div className={style.card}>
            <h2 className={style.text}>Hola {nombre}!</h2>
            <h3 className={style.text}>Sabemos que tu color favorito es:</h3>
            <div
                className={style.color}
                style={{ backgroundColor: `#${color}` }}
            >
                <p className={style.colorText}>{color}</p>
            </div>
        </div>
    )
}
