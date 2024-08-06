//$
//$

export const main = () => {
  //% Typescript - tipados más comunes :

  //% 1- tipados de varaibles nativos : number, string, boolean, any, null, undefined.
  const a: number = 1;
  const b: string = "hola";
  const c: boolean = true;
  const d: any = null;
  const e: any = undefined;

  //% 2- tipados de varaibles compuestos : array, object.
  const f: number[] = [1, 2, 3];
  const i: object = { a: 1, b: "hola" };
  const g: string[] = ["hola", "mundo"];

  //? Si se quiere tipar un array con varios tipos de datos:
  const h: (number | string)[] = [1, "hola", 2, "mundo"];

  //? Si se quiere tipar un array de objetos:
  const arrayA: { name: string }[] = [{ name: "hola" }, { name: "mundo" }];

  //? Otra forma de tipar un array de objetos:
  interface User {
    name: string;
  }
  const arrayB: User[] = [{ name: "hola" }, { name: "mundo" }];

  //? Si quiero tipar varios posibles objetos:

  interface User {
    name: string;
  }
  interface Employee {
    name: string;
    age: number;
  }

  const arrayC: (User | Employee)[] = [{ name: "test" }, { name: "hola", age: 20 }, { name: "facu", age: 50 }];

  //% 3- interfaces, se usan para tipar objetos o conjuntos de cosas.

  interface DBUserModel {
    name: string;
    age: number;
  }

  //? propiedades opcionales:

  interface BissnesModel {
    name: string;
    country: string;
    CBU: boolean;
  }
  interface ExternalBissnesModel {
    name: string;
    country: string;
    CVU: boolean;
  }

  interface UserModel {
    bissnes: BissnesModel | ExternalBissnesModel;
    age: number | string;
  }

  //% 4 tipado de funciones:

  //? tipado explicito:
  const contact_1 = (argumentA: string, argumentB: string): string => {
    return argumentA + argumentB;
  };
  //? tipado externo:
  type ContactType = (argumentA: string, argumentB: string) => string;

  const contact_2: ContactType = (argumentA, argumentB) => {
    return argumentA + argumentB;
  };

  //? otra posibilidad:

  interface Methods {
    contact: (argumentA: string, argumentB: string) => string;
  }
  const contact_3: Methods["contact"] = (argumentA, argumentB) => {
    return argumentA + argumentB;
  };

  //$ Recuerda que void es un tipo de dato que no retorna nada.

  //? argumentos opcionales:
  const contact_4 = (argumentA: string, argumentB?: string): string => {
    return argumentA + argumentB;
  };
  
  //! Nunca puedes tener un argumento opcional antes de uno obligatorio.
  //@ts-ignore
  //! Esto lanzará un error:
  const contact_5 = (argumentA?: string, argumentB: string): string => {
    return argumentA + argumentB;
  };

  //$ Fijate como tiene sentido el porque de la regla anterior:
  contact_4("mundo");
  contact_5(undefined, "mundo");

  //_______________________________________________
  
  //% Argumentos en funciones:

};
