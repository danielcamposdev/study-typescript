// boolean
let isOpen: boolean;
isOpen = true;

// string
let message: string;
message = `teste ${isOpen}`;

// number (int, float, hex, binary)
let total: number;
total = 0xff0;

// array (type[])
let items: string[];
items = ["foo", "bar"];

let values: Array<number>;
values = [1, 2, 3];

// tuple
let titles: [number, string];
titles = [1, "teste"];

//enum
enum Colors {
  white = "#fff",
  black = "#000",
}

//any -- noImplicitAny
let coisa: any;
coisa = true;
coisa = "coisa";
coisa = 0;
coisa = null;
coisa = undefined;

//never - indica que a funcao nunca ira retornar um valor
function error(): never {
  throw new Error("error");
}

/// object
let myObj: object;
myObj = {};

// Type Inference - 0 typescript identifica o tipo de acordo com o valor da variavel ou keyWords
let msg = "";
// msg = 1; // Error
////
