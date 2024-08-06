//$
//$

const ejerciciosAvanzados = () => {
  //% 1. Deduce una interfaz para este objeto para aplicar en una lista de más productos así .
 
  const product = {
    name: "monitor",
    price: 200, // también puede ser un texto
    isAvailable: true,
    userInfo: {
      name: "alfonso",
      nickname: "alf", //opcional
      age: 30,
      otherProducts: ["mouse", "keyboard"],
    },
  };

  interface IUserInfo {
    name: string;
    nickname?: string;
    age: number;
    otherProducts: string[];
  }

  interface IProduct {
    name: string;
    price: number | string;
    isAvailable: boolean;
    userInfo: IUserInfo;
  }

  const productList: IProduct[] = [
    //product1, product2
  ];

  //% 2. Necesito una función que reciba un objeto de tipo "Company" y me devuelva un listado de objetos de tipo "Professional".

  interface Company {
    id: number;
    name: string;
    password: string;
    professional_list: string[];
  }

  interface Professional {
    id: number;
    username: string;
    password: string;
    primary_skill: string;
    company_list: string[];
  }

  const getProfessionalList = () => {};

  //% 3. Ahora quiero una función sin sentido pero con todas estás opciones:

  //? - 1er argumento el nombre de la empresa, pero también podrá ser un numero.
  //? - 2do argumento la interfaz de la empresa,
  //? - 3ro el profesional destructurado.
  //? - 4to argumento que sea un objeto explicito tipo opcional y tenga 2 propieades, un randomName y un randomAge.
  //? - Al final retornar un array de 3 posibles tipos, Professional, Company y null.

  const getSomething = () => {};

  //% 4. Por último, haz una tipado externo para la función anterior y apliquemoslo, pero quitale todo el tipado a la función. (Solo dejalo con su tipado externo).

  type GetSomethingType = () => void;

  const getSomething_2: GetSomethingType = () => {};
};
