-- Base de datos para guardar los clientes de la aplicacion (SQL Server)

CREATE DATABASE RegistroClientes;
GO

USE RegistroClientes;
GO

CREATE TABLE Clientes (
    IdCliente     INT IDENTITY(1,1) PRIMARY KEY,
    Nombre        VARCHAR(50)  NOT NULL,
    Apellido      VARCHAR(50)  NOT NULL,
    Correo        VARCHAR(100) NOT NULL UNIQUE,
    Telefono      VARCHAR(15)  NOT NULL,
    FechaRegistro DATETIME     NOT NULL DEFAULT GETDATE()
);
GO

-- Datos de ejemplo
INSERT INTO Clientes (Nombre, Apellido, Correo, Telefono)
VALUES
    ('Ana', 'Lopez', 'ana.lopez@correo.com', '5555-1234'),
    ('Carlos', 'Perez', 'carlos.perez@correo.com', '5555-5678'),
    ('Maria', 'Garcia', 'maria.garcia@correo.com', '5555-9012');
GO

-- Listado de clientes
SELECT IdCliente, Nombre, Apellido, Correo, Telefono FROM Clientes;
GO
