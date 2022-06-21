// Como definir um tipo de uma variavel?

let nome: string = "Ivan";

// Como definir o tipo de um parâmetro de função?

function funcao(name: string, age: number): void {
  console.log(name);
  console.log(age);
}

funcao("a", 1);

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

// type e suas funções

type Human = {
  name: string;
  age?: number;
};

let luiz: Human = { name: "Luiz" };
luiz.name = "Luis";
luiz.age = 26;

// type - multiplos tipos

type Id = number | string | undefined;

let idTable: Id = "12345";

let idUser: Id = 12;

let idProduct: Id = undefined;

// defined values
// intercecção

// interface

// ?
// readonly
// extends

// decorators

// Class Decorator

// Property Decorator
