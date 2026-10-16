import { useEffect, useState } from 'react'
import ClienteLista from './components/ClienteLista'

function App() {
  const [clientes, setClientes] = useState([])
  const [error, setError] = useState('')

  // Peticion GET para obtener el listado de clientes
  useEffect(() => {
    fetch('/clientes.json')
      .then((respuesta) => respuesta.json())
      .then((datos) => setClientes(datos))
      .catch(() => setError('No se pudo cargar el listado de clientes'))
  }, [])

  return (
    <main>
      <h1>Listado de clientes</h1>
      {error ? <p>{error}</p> : <ClienteLista clientes={clientes} />}
    </main>
  )
}

export default App
