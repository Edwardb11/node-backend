
# 🔗 Objectivos -  Nomenclatura

___Crea un documento de políticas de nomenclatura para el equipo de desarrollo de una
compañía, la política debe incluir nomenclatura de: bases de datos, variables, funciones,
clases, git, etc.___

### Convenciones de nomenclatura de desarrollo
Establecer una convención de nomenclatura coherente es muy importante para mantener la legibilidad, la coherencia y la colaboración eficaz dentro del equipo de desarrollo. A continuación se sugieren pautas de nomenclatura para varios elementos del proceso de desarrollo.

1. **Bases de datos:**

**Nombre de la base de datos:**
Utilice Snake_case (minúsculas y guiones bajos separados): ```nombre_base de datos.```

**Nombres de tablas:**
Utilice singular y en Snake_case: ```usuario, pedido ```.

**Nombres de columnas:**
Utilice Snake_case en los nombres de las columnas:
```nombre de usuario, credencial.```

2. **Variables:**

**Variables JavaScript/TypeScript:**
Utilice camelCase: ```nombreUsuario, fechaCreacion.```

3. **Funciones:**

**Nombres de funciones:**
Utilice CamelCase y describa la función claramente: ```calcularTotal, guardarUsuario.```

4. **Clases:**

**Nombres de clases:**
Utilice PascalCase: ```UserController, ProductService.```

5. **Git:**

**Branch:**
Utilice nombres descriptivos y en minúsculas:
``` feature/nueva_función, bugfixs/corrección_errores.```

**Commit:**
Escriba mensajes de participación claros y descriptivos. Comience con una palabra clave como ```"Fix:", "Add:", "Update:", "Feat", "bugfixs" etc.``` 

6. **Archivos:**

**Nombres de archivos:**
Utilice camelCase o Snake_case si es necesario y describa el contenido:
 ```myModule.ts, Database_config.sql.```

7. **Constantes:**

**Nombres de constantes:**
Utilice SUPERCASE_SNAKE_CASE: 
```MAXIMUM_TRIES, API_URL.```

8. **CSS y estilos:**

**Nombres de clases y selectores:**
Usar contenedor de kebab case:
``` .main-container, #submit-button.```

9. **Documentación:**

**Comentarios:**
Escriba comentarios descriptivos en el código para explicar procesos complejos o decisiones de diseño.



Al seguir estas pautas de nomenclatura, nos esforzamos por garantizar que el código y los recursos relacionados sean comprensibles y consistentes, facilitando la colaboración y el mantenimiento a lo largo del tiempo..

⚠️NOTA:⚠️ Cada una de estas pautas de nomenclatura deben ser aplicadas en ingles