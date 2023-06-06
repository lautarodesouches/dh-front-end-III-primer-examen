import { useState } from 'react'
import './App.css'
import Form from './components/Form'
import Card from './components/Card'

function App() {
    const [data, setData] = useState(null)

    return (
        <main className="main">
            <h1>Elige un color</h1>
            <Form setData={(data) => setData(data)} />
            {data && <Card data={data} />}
        </main>
    )
}

export default App
