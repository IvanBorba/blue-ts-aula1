// Como definir um tipo de uma variavel?

let nome: string = "Ivan";

// Como definir o tipo de um parâmetro de função?

function funcao(name: string, age: number): void {
  console.log(name);
  console.log(age);
}

// Como definir o tipo do retorno de uma função?

function funcao2(name: string): number {
  return 1;
}

// TIPOS:

// boolean (true / false)

let result: boolean = true;

// string ("blue", 'blue', `blue`)

let animal: string = "Elefante";

// number (int, float, hex, binary)

let age: number = 10;

// array (type[])

let namesList: string[] = [];

namesList.push("Ivan");

// tuple ()

let modulesList: [string, string, string] = ["M3", "M4", "M5"];

// any NÃO RECOMENDADO!

let anything: any = "Ivan";

// null / undefined

let empty: null = null;
let empty2: undefined = undefined;

// void
// Situação ao qual existe um retorno. Porém um retorno vazio.

function logName(name: string): void {
  console.log(name);
}

// never
// Situação ao qual nunca existe um retorno

function error(): never {
  throw "Erro";
}

// object (diretamente)

let ivan: object = { name: "Ivan" };
let lucas: {} = { name: "Lucas" };

// Criação de novos tipos

// TYPE e suas funções

type Human = {
  name: string;
  age?: number;
};

let luiz: Human = { name: "Luiz" };

luiz.age = 26;

// type - multiplos tipos

type Id = number | string | undefined;

let idTable: Id = "12345";

let idUser: Id = 12;

let idProduct: Id = undefined;

// type - valores pré-definidos

let c013: Modulo = "M1";

type Modulo = "M1" | "M2" | "M3";

// type - intercecção

type Person = {
  name: string;
  gender: "M" | "F";
  health_points: number;
};

let aragorn: Person = {
  name: "Aragorn",
  gender: "M",
  health_points: 100,
};

type Magician = Person & {
  mana_points: number;
};

let gandalf: Magician = {
  name: "Gandalf",
  gender: "M",
  health_points: 100,
  mana_points: 100,
};

// INTERFACE

interface Car {
  model: string;
  brand: string;
  year: number;
  plate: string;
}

let uno: Car = {
  model: "Uno",
  brand: "Fiat",
  year: 1998,
  plate: "III1234",
};

// Não é possivel fazer TIPOS MULTIPLOS, NEM PRÉ-DEFINIDOS com uma interface,
// apenas nos valores internos do objeto dela
// interface Id2 = string | number | undefined
interface Id2 {}
// Ela sempre representará um OBJETO, igual acima

// interface - readonly (exclusivo da interface)

interface Pet {
  readonly name: string;
  age: number;
}

let dog: Pet = {
  name: "Tobby",
  age: 5,
};

dog.age = 6; // <<< SUCESSO
// dog.name = "Bobby"; <<< ERRO

// interface - extends (intersecção de types)

interface Character {
  name: string;
  level: number;
  experience: number;
}

let berethor: Character = {
  name: "Berethor",
  level: 1,
  experience: 0,
};

interface Hunter extends Character {
  have_bow: boolean;
}

let legolas: Hunter = {
  name: "Legolas",
  level: 1,
  experience: 0,
  have_bow: true,
};

// decorators (materia para entendimento, raramente criaremos novos decorators)

// São funções que podem ser utilizadas antes da chamada de determinados recursos.

// Class Decorator

function AddBasicProperties(constructor: any) {
  return class extends constructor {
    level = 1;
    experience = 0;
  };
}

@AddBasicProperties
class Orc {}

let orcChief = new Orc();

// console.log(orcChief);

// Property Decorator

function LogPropertyCreation(target: Dog, key: string) {
  console.log(`Property ${key} created`);
}

class Dog {
  @LogPropertyCreation
  name: string;

  @LogPropertyCreation
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

let doggo = new Dog("Doggo", 5);
