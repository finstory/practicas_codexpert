//$
//$

const ejerciciosSencillos = () => {
  //% 1. Herencia
  //* Descripción: Transfiere todas las propiedades de UserModelH a AdminModelH, y añade propiedades adicionales role (string), permissions(string[]), y lastLogin (Date).

  class UserModelX1 {
    username: string;
    password: string;
    email: string;
    phone: string;
    address: string;
  }

  class AdminModelX1 {}

  //% 2. Polimorfismo
  //* Descripción: Crea una clase AdminModelP que verifique si las propiedades de un administrador están correctamente definidas y notifique si cambian. Añade propiedades adicionales department, accessLevel, y lastActive.

  interface UserModelX2 {
    username: string;
    email: string;
    isActive: boolean;
    department: string;
    accessLevel: number;
  }

  class AdminModelX2 {}

  //% 3. Niveles de acceso
  //* Descripción: Crea una clase con una propiedad apiKey, secretToken, y encryptionKey (todas son string) que solo sean accesibles en la clase y sus herencias.

  class ServiceModelA {}

  class SubServiceModelA {}

  class AnotherServiceModelA extends SubServiceModelA {}

  //* Debes probar que no se puede acceder a estas propiedades desde una instancia de la clase.
  //@ts-ignore
  const service = new ServiceModelA();

  //% 4. Herencias selectivas
  //! Recuerda quitar "as any" en cada objecto.

  //* Descripción: Crea una interfaz que solo herede las propiedades firstName, lastName, middleName de una interfaz FullPersonModelHE.

  interface FullPersonModelHE {
    firstName: string;
    lastName: string;
    middleName?: string;
    dateOfBirth: Date;
    email: string;
    phone: string;
    address: string;
  }


  interface BasicPersonModelHE {}
  const person1: BasicPersonModelHE = {} as any;

  //* Quita la propiedad email y que todas sus propiedades se vuelven opcionales

  interface OptionalPersonModelHE {}
  const person2: OptionalPersonModelHE = {} as any;

  //* Solo la propiedad phone se vuelve opcional, además, si la clase principal cambia su tipado, está debe ser heredada sin tener que modificarla.

  interface SelectivePersonModelHE {}

  const person3: SelectivePersonModelHE = {} as any;

  //* Quita la propiedad phone, email y todas sus propiedades se vuelven opcionales
  interface HybridPersonModelHE {}

  const person4: HybridPersonModelHE = {
    firstName: "Alice",
    lastName: "Smith",
    middleName: "Marie",
    dateOfBirth: new Date("1985-05-15"),
    address: "1010 Maple Ave",
  };

  //% 5. Herencia con tipo condicional
  //* Descripción: Crea una interfaz ExtendedPersonModelHC que herede todas las propiedades de BasePersonModelHC pero nationalID debe ser opcional. Añadele propiedades adicionales como passportNumber(number) y driverLicense(stirng).

  interface BasePersonModelHC {
    firstName: string;
    lastName: string;
    nationalID?: string;
    dateOfBirth: Date;
    address: string;
  }

  interface ExtendedPersonModelHC {}

  const person4HC: ExtendedPersonModelHC = {} as any;
};
