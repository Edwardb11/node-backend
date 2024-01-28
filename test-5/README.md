# 🔗 Objectivos - Arquitectura del backend

**_Describe cómo estructurarías el backend de una aplicación de comercio electrónico. Habla sobre las tecnologías que utilizarías, la organización de los archivos, el uso de patrones de
diseño, etc._**

### Tecnologías:

**Nest.js:** un marco de Node.js que promueve la modularidad y la escalabilidad.

**TypeScript:** Para un desarrollo más robusto y mecanografiado.

**TypeORM:** para interactuar con una base de datos (puede ser PostgreSQL o MySQL).

**JWT (JSON Web Tokens):** para autenticación y autorización.

**Swagger:** para documentación de API.

### Organización de los archivos
```bash
- /src
  - /modules
    - /auth
      - /controllers
        - auth.controller.ts
      - /services
        - auth.service.ts
      - auth.module.ts
    - /products
      - /controllers
        - products.controller.ts
      - /services
        - products.service.ts
      - products.module.ts
    - /orders
      - /controllers
        - orders.controller.ts
      - /services
        - orders.service.ts
      - orders.module.ts
  - /middlewares
    - auth.middleware.ts
  - /interfaces
    - dto.interface.ts
  - /config
    - database.config.ts
    - auth.config.ts
  - main.ts

```




### Patrones de diseño: 
**Módulos Nest.js:**
_Patrón de diseño de módulo:_ 
Organice su aplicación en módulos para mejorar la modularidad y la estructura del código.

**Inyección de dependencia:**
_Patrón de inyección de dependencia (DI):_
utiliza DI para gestionar y proporcionar dependencias entre diferentes componentes de la aplicación, lo que facilita la flexibilidad y las pruebas.

**DTO (Objeto de transferencia de datos):**
_Patrón de diseño DTO:_ 
Define interfaces (DTO) para estructuras de datos que se pasan entre capas de aplicación, facilitando la comunicación entre el cliente y el servidor.

**Seguridad y middleware:**
_Patrón de middleware:_
Utiliza middleware para manejar la lógica general y la autorización. Es un enfoque basado en modelos de middleware para manejar las solicitudes antes de que lleguen a los controladores. 

**Modelo de repositorio(a través de TypeORM):**
_Patrón de repositorio:_
Resume la lógica de uso de la base de datos. En este caso, se utiliza con TypeORM para interactuar con la base de datos de una forma más abstracta y mantenible..


### ⚠️Nota adicional:⚠️
___Es importante tener en cuenta que todos los que mencione arriba se pueden implementar utilizando Express. La elección de Nest.js para este escenario se basa en la preferencia por un enfoque más estructurado y obstinado y el uso integrado de TypeScript.___

#### ⚠️Ventajas de elegir Nest.js en lugar de Express:⚠️
**Vistas estructuradas:** 
Nest.js proporciona estructuras y vistas más claras que pueden acelerar el desarrollo y hacer que el código sea más comprensible.

**Inyección de dependencia:**
La inyección de dependencia en Nest.js facilita la organización y prueba del código, especialmente en aplicaciones más grandes.

**TypeScript integrado:** 
La integración con TypeScript proporciona beneficios como escritura estática, autocompletado y detección temprana de errores.

**Módulos y decoradores:** 
El uso de módulos y decoradores en Nest.js facilita la creación y el mantenimiento de aplicaciones modulares y escalables.

**Compatibilidad con GraphQL integrada:**
Nest.js tiene compatibilidad integrada con GraphQL, lo que simplifica la implementación de API basadas en gráficos.

Si bien Express sigue siendo una opción válida y ampliamente utilizada, la elección de Nest.js tiene en cuenta su arquitectura más estructurada, su confiabilidad y su integración directa con TypeScript, lo que brinda ventajas adicionales para proyectos más grandes y complejos.