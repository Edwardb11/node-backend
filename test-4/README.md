# 🔗 Objectivos -  Modelado de bases de datos
___Imagina que estás construyendo un sistema de gestión de vídeos. Diseña un modelo de base de datos que incluya tablas para vídeos, autores, colaboradores, comentarios, reviews y usuarios. Asegúrate de incluir las claves  primarias, las claves foráneas y las restricciones de integridad necesarias para que el sistema funcione correctamente___


```bash
Table: users
- user_id (Primary Key)
- username
- email
- password
- created_at
- updated_at

Table: authors
- author_id (Primary Key)
- user_id (Foreign Key referencing users)
- name
- bio
- created_at
- updated_at

Table: videos
- video_id (Primary Key)
- author_id (Foreign Key referencing authors)
- title
- description
- upload_date
- duration
- created_at
- updated_at

Table: Collaborators
- collaborator_id (Primary Key)
- video_id (Foreign Key referencing videos)
- author_id (Foreign Key referencing authors)
- created_at
- updated_at

Table: Comments
- comment_id (Primary Key)
- video_id (Foreign Key referencing videos)
- user_id (Foreign Key referencing users)
- content
- publication_date
- updated_at

Table: Reviews
- review_id (Primary Key)
- video_id (Foreign Key referencing videos)
- user_id (Foreign Key referencing users)
- rating
- comment
- publication_date
- updated_at

```