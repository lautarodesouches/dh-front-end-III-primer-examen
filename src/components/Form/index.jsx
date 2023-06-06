import { useState } from 'react'
import Input from '../Input'
import style from './style.module.css'

export default function Form({ setData }) {
    const [nombre, setNombre] = useState('')
    const [color, setColor] = useState('')
    const [error, setError] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()

        if (nombre.length < 3 || color.length < 6) {
            setData(null)
            return setError('Por favor chequea que la información sea correcta')
        }

        setError(false)
        setData({
            nombre,
            color,
        })
    }

    return (
        <>
            <form action="" className={style.form} onSubmit={handleSubmit}>
                <Input
                    placeholder="Ingresa tu nombre"
                    handleChange={(e) => {
                        setNombre(e.target.value.trim())
                    }}
                    value={nombre}
                    required
                />
                <Input
                    placeholder="Ingresa tu color favorito (formato HEX)"
                    handleChange={(e) => {
                        setColor(e.target.value)
                    }}
                    value={color}
                    required
                />
                <button className={style.button}>ENVIAR</button>
            </form>
            {error && <h2 className={style.error}>{error}</h2>}
        </>
    )
}
