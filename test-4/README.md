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
