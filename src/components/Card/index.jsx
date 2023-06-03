export default function Card({ nombre = 'usuario', color = '#e1e1e1' }) {
    return (
        <div>
            <h2>Hola {nombre}!</h2>
            <h3>Sabemos que tu color favorito es:</h3>
            <div>
                <p>{color}</p>
            </div>
        </div>
    )
}
