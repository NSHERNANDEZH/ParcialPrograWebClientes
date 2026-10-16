function ClienteLista({ clientes }) {
  return (
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Correo</th>
          <th>Telefono</th>
        </tr>
      </thead>
      <tbody>
        {clientes.map((c) => (
          <tr key={c.idCliente}>
            <td>{c.idCliente}</td>
            <td>{c.nombre}</td>
            <td>{c.apellido}</td>
            <td>{c.correo}</td>
            <td>{c.telefono}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default ClienteLista
