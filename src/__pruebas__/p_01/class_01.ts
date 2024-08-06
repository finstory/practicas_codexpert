export class User {
  constructor() {

  }
}

export const main = () => {
};

main();

//* Pruebas simples sobre bases de clases,tipos de accesos y manejo del constructor.*/

//% Instrucciones:

//% se debe crear una clase User con las siguientes propiedades:
//% - id: number
//% - username: string
//% - _password: string (privada)
//% - hobbies: array de string
//% - age: number
//% - _adult: boolean (privada)

//% desde el constructor, se debe declarar una regla:
//% - la propiedad _adult debe ser true si la edad es mayor o igual a 18, de lo contrario false.

//% se debe crear un getter llamado => getUsername que retorne el nombre de usuario.
//% se debe crear un setter llamado => setUsername que recibirá un argumento 'username' y cambiará el nombre de usuario.

//% se debe crear un método 'getPasswordBySecretPassword' con el argumento 'secret', que retorne la contraseña del usuario si el argumnto secret es igual a "secret", de lo contrario debe retornar "No tienes acceso a la contraseña".

//% dentro de 'main' se debe crear una instancia de la clase User, donde obligatoriamente la password debe ser "123Qwer".

//% main unicamente deberá imprimir en un console.log de la contraseña tal cuál "123Qwer", nada de de palabras extras. Y para eso se debes valerte de obtener la password del usuario a través de 'getPasswordBySecretPassword'.
