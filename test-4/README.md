# 🔗 Objectivos - Modelado de bases de datos

**_Imagina que estás construyendo un sistema de gestión de vídeos. Diseña un modelo de base de datos que incluya tablas para vídeos, autores, colaboradores, comentarios, reviews y usuarios. Asegúrate de incluir las claves primarias, las claves foráneas y las restricciones de integridad necesarias para que el sistema funcione correctamente_**

## Herramientas Utilizadas

https://dbdiagram.io/

![text](https://github.com/Edwardb11/node-backend/assets/37183622/81c5d3c0-39fb-4e5a-87c1-df15f8dd6768)

## Codigo Ts

```bash
Table users as u {
  user_id INT [pk, increment]
  username VARCHAR(255) [not null]
  email VARCHAR(255) [not null]
  password VARCHAR(255) [not null]
  created_at TIMESTAMP [default: `CURRENT_TIMESTAMP`, not null]
  updated_at TIMESTAMP [default: `CURRENT_TIMESTAMP`, not null]
}

Table authors as a {
  author_id INT [pk, increment]
  user_id INT [not null, ref: - u.user_id]
  name VARCHAR(255) [not null]
  bio TEXT
  created_at TIMESTAMP [default: `CURRENT_TIMESTAMP`, not null]
  updated_at TIMESTAMP [default: `CURRENT_TIMESTAMP`, not null]
}

Table videos as v {
  video_id INT [pk, increment]
  author_id INT [not null, ref: - a.author_id]
  title VARCHAR(255) [not null]
  description TEXT
  upload_date DATE [not null]
  duration INT [not null]
  created_at TIMESTAMP [default: `CURRENT_TIMESTAMP`, not null]
  updated_at TIMESTAMP [default: `CURRENT_TIMESTAMP`, not null]
}

Table collaborators as c {
  collaborator_id INT [pk, increment]
  video_id INT [not null, ref: - v.video_id]
  author_id INT [not null, ref: - a.author_id]
  created_at TIMESTAMP [default: `CURRENT_TIMESTAMP`, not null]
  updated_at TIMESTAMP [default: `CURRENT_TIMESTAMP`, not null]
}

Table comments as cm {
  comment_id INT [pk, increment]
  video_id INT [not null, ref: - v.video_id]
  user_id INT [not null, ref: - u.user_id]
  content TEXT [not null]
  publication_date TIMESTAMP [default: `CURRENT_TIMESTAMP`, not null]
  updated_at TIMESTAMP [default: `CURRENT_TIMESTAMP`, not null]
}

Table reviews as rv {
  review_id INT [pk, increment]
  video_id INT [not null, ref: - v.video_id]
  user_id INT [not null, ref: - u.user_id]
  rating INT [not null]
  comment TEXT
  publication_date TIMESTAMP [default: `CURRENT_TIMESTAMP`, not null]
  updated_at TIMESTAMP [default: `CURRENT_TIMESTAMP`, not null]
}

```


### Codigo exportado a mysql

```bash

CREATE TABLE `users` (
  `user_id` INT PRIMARY KEY AUTO_INCREMENT,
  `username` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `created_at` TIMESTAMP NOT NULL DEFAULT (CURRENT_TIMESTAMP),
  `updated_at` TIMESTAMP NOT NULL DEFAULT (CURRENT_TIMESTAMP)
);

CREATE TABLE `authors` (
  `author_id` INT PRIMARY KEY AUTO_INCREMENT,
  `user_id` INT NOT NULL,
  `name` VARCHAR(255) NOT NULL,
  `bio` TEXT,
  `created_at` TIMESTAMP NOT NULL DEFAULT (CURRENT_TIMESTAMP),
  `updated_at` TIMESTAMP NOT NULL DEFAULT (CURRENT_TIMESTAMP)
);

CREATE TABLE `videos` (
  `video_id` INT PRIMARY KEY AUTO_INCREMENT,
  `author_id` INT NOT NULL,
  `title` VARCHAR(255) NOT NULL,
  `description` TEXT,
  `upload_date` DATE NOT NULL,
  `duration` INT NOT NULL,
  `created_at` TIMESTAMP NOT NULL DEFAULT (CURRENT_TIMESTAMP),
  `updated_at` TIMESTAMP NOT NULL DEFAULT (CURRENT_TIMESTAMP)
);

CREATE TABLE `collaborators` (
  `collaborator_id` INT PRIMARY KEY AUTO_INCREMENT,
  `video_id` INT NOT NULL,
  `author_id` INT NOT NULL,
  `created_at` TIMESTAMP NOT NULL DEFAULT (CURRENT_TIMESTAMP),
  `updated_at` TIMESTAMP NOT NULL DEFAULT (CURRENT_TIMESTAMP)
);

CREATE TABLE `comments` (
  `comment_id` INT PRIMARY KEY AUTO_INCREMENT,
  `video_id` INT NOT NULL,
  `user_id` INT NOT NULL,
  `content` TEXT NOT NULL,
  `publication_date` TIMESTAMP NOT NULL DEFAULT (CURRENT_TIMESTAMP),
  `updated_at` TIMESTAMP NOT NULL DEFAULT (CURRENT_TIMESTAMP)
);

CREATE TABLE `reviews` (
  `review_id` INT PRIMARY KEY AUTO_INCREMENT,
  `video_id` INT NOT NULL,
  `user_id` INT NOT NULL,
  `rating` INT NOT NULL,
  `comment` TEXT,
  `publication_date` TIMESTAMP NOT NULL DEFAULT (CURRENT_TIMESTAMP),
  `updated_at` TIMESTAMP NOT NULL DEFAULT (CURRENT_TIMESTAMP)
);

ALTER TABLE `authors` ADD FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`);

ALTER TABLE `videos` ADD FOREIGN KEY (`author_id`) REFERENCES `authors` (`author_id`);

ALTER TABLE `collaborators` ADD FOREIGN KEY (`video_id`) REFERENCES `videos` (`video_id`);

ALTER TABLE `collaborators` ADD FOREIGN KEY (`author_id`) REFERENCES `authors` (`author_id`);

ALTER TABLE `comments` ADD FOREIGN KEY (`video_id`) REFERENCES `videos` (`video_id`);

ALTER TABLE `comments` ADD FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`);

ALTER TABLE `reviews` ADD FOREIGN KEY (`video_id`) REFERENCES `videos` (`video_id`);

ALTER TABLE `reviews` ADD FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`);

```
## Estas son algunas de las prácticas más importantes que segui al momento de realizar ese analisis:

**Normalización:**
Las tablas están diseñadas para seguir la normalización, evitar la redundancia y mejorar la eficiencia del almacenamiento de datos. **_(Incluye claves primarias y externas)_**

**Campos de fecha:**
Los campos de fecha **_(created_at y updated_at)_** se agregaron para realizar un seguimiento de la fecha en que se crearon y modificaron por última vez los registros.

**Consistencia de nombres:**
La denominación de campos sigue la práctica consistente de usar letras descriptivas y minúsculas con un guión bajo para separar palabras.

**Restricciones de integridad referencial:**
Las restricciones de integridad referencial se definen mediante claves externas. Esto garantiza que no se puedan realizar acciones que dejen datos huérfanos o inconsistencias en las relaciones.

**Campos descriptivos:**
Los nombres de los campos son descriptivos y reflejan claramente la información que almacenan. Esto mejora la comprensión del modelo.

**Inglés Uso del idioma:**
Los nombres de tablas y campos están en inglés, lo cual es una práctica común en el desarrollo de software y bases de datos.

**Campo de día:**
El campo de calificación en la tabla de calificación sugiere la capacidad de almacenar calificaciones numéricas o calificaciones..
