# Find Me - App Creada en React

- El proyecto fue creado con la finalidad de ser presentado ante Intive. 
- Está creado en React, con Context y Bootstrap.
- Teniendo en cuenta que el challenge evalúa todos los conceptos adquiridos, y por usar bootstrap no he añadido css, creé una animación para que puedan evaluar dichas competencias. 

## Importante

- Para ejecutar el código en una instancia de localhost, no olvide antes ejecutar el comando 'npm install' para instalar las dependencias necesarias.
- Incluso aunque la página está creada en ingles, se utilizó el idioma castellano para los comentarios y este documento, teniendo en cuenta que el puesto será analizado por hispanohablantes.


## Sobre el código
Este código posee algunos detalles de los que soy consciente pero debido al tiempo de desarrollo han quedado sin solucinar 

### Problemas 
- 1)Al momento de navegar hacia la página de detalle, si se actualiza manualmente la página, la página presenta un bug, ya que no recibe los datos necesarios para seguir funcionando.
- 2)Debido al funcionamiento de la API (generacion aleatoria de usuarios), cuando se navega desde detalle hacia home, la aplicacion devuelve un nuevo array de objetos, en lugar de volver al array creado en la instancia anterior.
