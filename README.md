# API de Mascotas Virtuales

Esta es una API REST básica construida con **Node.js**, **Express.js** y **MongoDB** (usando Mongoose) para administrar un sistema de mascotas virtuales. Permite realizar operaciones CRUD (Crear, Leer, Actualizar y Eliminar) sobre una base de datos local.

## 📋 Características

- Servidor web con Express.
- Conexión a base de datos MongoDB.
- Modelo de datos para Mascotas (Nombre, Especie, Ánimo, Edad).
- Endpoints estructurados para la gestión completa de recursos.
- Manejo de errores y validaciones básicas.

## 🛠️ Tecnologías utilizadas

- **Node.js**: Entorno de ejecución para JavaScript.
- **Express.js**: Framework para el desarrollo web.
- **MongoDB**: Base de datos NoSQL.
- **Mongoose**: ODM para modelado de objetos en MongoDB.
- **Nodemon**: Herramienta de desarrollo para reinicio automático del servidor.

## 🚀 Instalación y Configuración

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/sergiosebastiansc/api-mascotas-virtuales.git
   cd api-mascotas-virtuales
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Configurar MongoDB:**
   Asegúrate de tener una instancia de MongoDB corriendo localmente en `mongodb://localhost:27017/mascotasdb`.

4. **Iniciar el servidor:**
   - Para desarrollo (con nodemon):
     ```bash
     npm run dev
     ```
   - Para producción:
     ```bash
     npm start
     ```

El servidor estará disponible en `http://localhost:3000`.

## 🛣️ Endpoints de la API

| Método | Endpoint | Descripción |
| :--- | :--- | :--- |
| **GET** | `/` | Mensaje de bienvenida. |
| **GET** | `/pets` | Obtener todas las mascotas. |
| **GET** | `/pets/:id` | Obtener una mascota específica por ID. |
| **POST** | `/pets` | Crear una nueva mascota. |
| **PUT** | `/pets/:id` | Actualizar los datos de una mascota. |
| **DELETE** | `/pets/:id` | Eliminar una mascota del sistema. |

## 🧪 Guía de Pruebas (Thunder Client)

1. Abrir el proyecto en **Visual Studio Code**.
2. Instalar las dependencias con:

```bash
npm install
```

3. Levantar el servidor con:

```bash
npm run dev
```

4. Abrir la extensión **Thunder Client** en VS Code.
5. Crear una nueva request.
6. Seleccionar el método HTTP correspondiente.
7. Escribir la URL completa, por ejemplo:

```txt
http://localhost:3000/
```
---
### Registro de Nueva Mascota

* **POST**
*   **URL:** `http://localhost:3000/pets`
*   **Cuerpo (JSON):**

```json
{
  "nombre": "Firulais",
  "especie": "Perro",
  "animo": "Feliz",
  "edad": 3
}
```
![mascota creada](./docs/imgs/crear%20mascota.png)
![mascota creada mongo](./docs/imgs/crear%20mascota%20mongodb.png)

### Resultado esperado

- **Status:** `201 Created`
- **Respuesta:** arreglo JSON con el mensaje "Mascota creada correctamente" junto al objeto de la mascota creada.
---

### Prueba Get: Obtener todas las mascotas
Para comprobar que la API devuelve correctamente la lista de mascotas.

* **GET**
*   **URL:** `http://localhost:3000/pets`

![mascotas](./docs/imgs/get%20pets.png)

### Resultado esperado

- **Status:** `200 OK`
- **Respuesta:** arreglo JSON con las mascotas disponibles.
---

### Actualizar una Mascota

* **PUT**
*   **URL:** `http://localhost:3000/pets/id`
*   **Cuerpo (JSON):**

```json
{
  "nombre": "Firulais",
  "especie": "Perro",
  "animo": "Asustado",
  "edad": 3
}
```
![mascota actualizada](./docs/imgs/mascota%20actualizada.png)
![mascota actualizada](./docs/imgs/mascota%20actualizada%20mongodb.png)

### Resultado esperado

- **Status:** `200 OK`
- **Respuesta:** mensaje: "Mascota actualizada correctamente" junto a objeto JSON con los datos de la mascota actualizada
---

### Eliminar una Mascota

* **DELETE**
*   **URL:** `http://localhost:3000/pets/id`

![mascota eliminada](./docs/imgs/mascota%20eliminada.png)
![mascota eliminada mongodb](./docs/imgs/mascota%20eliminada%20mongodb.png)

### Resultado esperado

- **Status:** `200 OK`
- **Respuesta:** mensaje: "Mascota eliminada correctamente" junto a eliminación de objeto JSON con los datos de la mascota





## 📁 Estructura del Proyecto

El proyecto sigue una arquitectura modular para separar las responsabilidades de la aplicación:

```text
├── index.js           # Punto de entrada. Configura Express y la conexión a la base de datos.
├── models/            # Definición de los modelos de datos (Mongoose Schemas).
│   └── Pet.js         # Define la estructura de las mascotas en la base de datos.
├── controllers/       # Lógica de negocio. Procesa las peticiones y genera respuestas.
│   └── petController.js # Contiene las funciones CRUD (obtener, crear, actualizar, eliminar).
├── routes/            # Definición de los endpoints.
│   └── petRoutes.js   # Mapea las rutas URL a las funciones del controlador.
└── package.json       # Archivo de configuración de NPM y dependencias.
```



