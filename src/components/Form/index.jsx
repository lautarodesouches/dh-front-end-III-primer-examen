import { useState } from 'react'
import Input from '../Input'
import Card from '../Card'

export default function Form() {
    const [nombre, setNombre] = useState('')
    const [color, setColor] = useState('')
    const [error, setError] = useState(false)
    const [formularioOk, setFormularioOk] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()

        if (nombre.length < 3 || color.length < 6) return setError(true)

        setError(false)
        setFormularioOk(true)
    }

    return (
        <>
            <form action="">
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
                <div>
                    <button type="submit" onClick={handleSubmit}>
                        ENVIAR
                    </button>
                </div>
            </form>
            {error && (
                <h2>Por favor chequea que la información sea correcta</h2>
            )}
            {formularioOk && <Card nombre={nombre} color={color} />}
        </>
    )
}
