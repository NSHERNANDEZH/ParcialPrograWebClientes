# ParcialPrograWebClientes

Aplicacion pequena en **React + Vite** que muestra el listado de clientes.
Los datos se obtienen con una peticion **GET** y el proyecto incluye el diseno
de una base de datos para almacenarlos mas adelante.

## Tecnologias

- React
- Vite
- Git / GitHub
- SQL Server (diseno de la base de datos)

## Estructura

```
RegistroClientes/
├── database/
│   └── schema.sql            # Diseno de la base de datos
├── public/
│   └── clientes.json         # Datos que devuelve el GET
├── src/
│   ├── components/
│   │   └── ClienteLista.jsx  # Tabla con el listado de clientes
│   ├── App.jsx               # Hace la peticion GET y muestra la lista
│   ├── App.css               # Estilos
│   └── main.jsx              # Punto de entrada de React
├── index.html
└── package.json
```

## Como funciona

1. Al cargar la pagina, `App.jsx` usa `useEffect` para hacer una peticion
   `GET /clientes.json` con `fetch`.
2. La respuesta se guarda en el estado `clientes` con `useState`.
3. `ClienteLista.jsx` recibe la lista y la muestra en una tabla.

## Como ejecutarlo

```bash
npm install
npm run dev
```

Luego abrir http://localhost:5173

## Base de datos

El archivo `database/schema.sql` crea la base `RegistroClientes` con la tabla:

| Campo         | Tipo         | Descripcion                        |
|---------------|--------------|------------------------------------|
| IdCliente     | INT          | Llave primaria, autoincremental    |
| Nombre        | VARCHAR(50)  | Nombre del cliente                 |
| Apellido      | VARCHAR(50)  | Apellido del cliente               |
| Correo        | VARCHAR(100) | Correo electronico, unico          |
| Telefono      | VARCHAR(15)  | Numero de telefono                 |
| FechaRegistro | DATETIME     | Fecha de registro (automatica)     |

Los campos de `clientes.json` coinciden con esta tabla, asi que mas adelante
el GET puede apuntar a una API que lea de la base de datos.
