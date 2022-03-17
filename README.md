# Ejemplo de Api rest para guardar imágenes

### Paquetes usados:
    * "cors": "^2.8.5",
    * "dotenv": "^16.0.0",
    * "express": "^4.17.3",
    * "express-validator": "^6.14.0",
    * "multer": "^1.4.4",
    * "mysql2": "^2.3.3",
    * "sequelize": "^6.17.0"

### Ruta de la Api User:

* http://localhost:3000/api/user

Verbos:

GET  http://localhost:3000/api/user  Obtener todos los usuarios

GET  http://localhost:3000/api/user/:id   Obtener un solo usuario poor Id

POST http://localhost:3000/api/user  Crear un usuario

    Campos:
        * fullname [string]
        * email [string]
        * cedula [number]
        * imagen [file < 1mb]
        *  Se debe crear en la raiz del proyecto la carpeta public/users
        
PUT http://localhost:3000/api/user/:id  Actualizar datos de usuario

    Campos:
        * fullname [string]
        * email [string]
        * cedula [number]
        * estado [boolean]
        * imagen [file < 1mb]
        
PUT http://localhost:3000/api/user/softdelete/:id Eliminar un usuario por cambio de "estado" por medio del id

DELETE http://localhost:3000/api/user/:id  Eliminar un usuario

## scripts
* npm start
* npm run dev
