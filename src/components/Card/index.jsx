import style from './style.module.css'

export default function Card({ data }) {
    return (
        <div className={style.card}>
            <h2 className={style.text}>Hola {data.nombre}!</h2>
            <h3 className={style.text}>Sabemos que tu color favorito es:</h3>
            <div
                className={style.color}
                style={{ backgroundColor: `#${data.color}` }}
            >
                <p className={style.colorText}>{data.color}</p>
            </div>
        </div>
    )
}
