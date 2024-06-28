# Teslo | Shop

## Description
Este proyecto fue contruido siguiendo el curso de [NEXT.js](https://fernando-herrera.com/course/nextjs-framework-react) de [Fernando Herrera](https://x.com/fernando_her85?s=21&t=bQt1-8dfQUCs-CdHxzYpzg ), en el cual aprendi lo siguiente:
1. Manejo de rutas usando App router.
2. Uso de multiples layouts.
3. Manejo de un estado global con [Zustand](https://zustand-demo.pmnd.rs/).
4. Autenticación con [NextAuth](https://next-auth.js.org/).
5. Integración y consumo del API creado en el mismo proyecto.

## Ejecutar proyecto en desarrollo
1. Clonar repositorio.
2. Instalar dependencias ```npm install```.
3. Renombrar el archivo ```.env.template``` a ```.env``` y completar las variables.
4. Levantar la base de datos ```docker compose up -d```.
5. Ejecutar las migraciones de Prisma ```npx prisma migrate dev```.
6. Ejecutar el seed ````npm run seed```.
6. Ejecutar el proyecto ```npm run dev```.