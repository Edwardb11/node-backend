# 🔗 Objectivos -  Modelado de bases de datos
___Imagina que estás construyendo un sistema de gestión de vídeos. Diseña un modelo de base de datos que incluya tablas para vídeos, autores, colaboradores, comentarios, reviews y usuarios. Asegúrate de incluir las claves  primarias, las claves foráneas y las restricciones de integridad necesarias para que el sistema funcione correctamente___


```bash
Table: users
- user_id INT PRIMARY KEY
- username VARCHAR(255) NOT NULL
- email VARCHAR(255) NOT NULL
- password VARCHAR(255) NOT NULL
- created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
- updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP NOT NULL

Table: authors
- author_id INT PRIMARY KEY
- user_id INT FOREIGN KEY REFERENCES users(user_id)
- name VARCHAR(255) NOT NULL
- bio TEXT
- created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
- updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP NOT NULL

Table: videos
- video_id INT PRIMARY KEY
- author_id INT FOREIGN KEY REFERENCES authors(author_id)
- title VARCHAR(255) NOT NULL
- description TEXT
- upload_date DATE NOT NULL
- duration INT NOT NULL
- created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
- updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP NOT NULL

Table: Collaborators
- collaborator_id INT PRIMARY KEY
- video_id INT FOREIGN KEY REFERENCES videos(video_id)
- author_id INT FOREIGN KEY REFERENCES authors(author_id)
- created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
- updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP NOT NULL

Table: Comments
- comment_id INT PRIMARY KEY
- video_id INT FOREIGN KEY REFERENCES videos(video_id)
- user_id INT FOREIGN KEY REFERENCES users(user_id)
- content TEXT NOT NULL
- publication_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
- updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP NOT NULL

Table: Reviews
- review_id INT PRIMARY KEY
- video_id INT FOREIGN KEY REFERENCES videos(video_id)
- user_id INT FOREIGN KEY REFERENCES users(user_id)
- rating INT NOT NULL
- comment TEXT
- publication_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
- updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP NOT NULL

```


## Estas son algunas de las prácticas más importantes que segui al momento de realizar ese analisis:

**Normalización:**
Las tablas están diseñadas para seguir la normalización, evitar la redundancia y mejorar la eficiencia del almacenamiento de datos. ___(Incluye claves primarias y externas)___

 **Campos de fecha:**
Los campos de fecha ___(created_at y updated_at)___ se agregaron para realizar un seguimiento de la fecha en que se crearon y modificaron por última vez los registros. 

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