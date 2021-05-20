interface IsPerson {
  name: string;
  age: number;
  speak(a: string): void;
  spend(a: number): number;
}

const me: IsPerson = {
  name: "Jaja",
  age: 23,
  speak(text: string): void {
    console.log(text);
  },
  spend(amount: number): number {
    console.log("I spent", amount);
    return amount;
  },
};

const greetPerson = (person: IsPerson) => {
  console.log("Hello ", person.name);
};

greetPerson(me);

import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
import { HasFormatter } from "./Interfaces/HasFormatter.js";

let docOne: HasFormatter;
let docTwo: HasFormatter;

docOne = new Invoice("Ohm", "web work", 250);
docTwo = new Payment("Jaja", "plumbing work", 200);
let docs: HasFormatter[] = [];
docs.push(docOne);
docs.push(docTwo);
console.log(docs);

const invoiceOne = new Invoice("mario", "work on the mario website", 250);
const invoiceTwo = new Invoice("logi", "work on the logi website", 300);

let invoices: Invoice[] = [];
invoices.push(invoiceOne);
invoices.push(invoiceTwo);

invoices.forEach((inv) => {
  console.log(inv.client, inv.format());
});

const form = document.querySelector(".new-item-form") as HTMLFormElement;

//input
const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

//list template instance
const ul = document.querySelector("ul")!;
const list = new ListTemplate(ul);

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  let values: [string, string, number];
  values = [tofrom.value, details.value, amount.valueAsNumber];

  let doc: HasFormatter;
  if (type.value === "invoice") {
    doc = new Invoice(...values);
  } else {
    doc = new Payment(...values);
  }
  list.render(doc, type.value, "end");
});

//* TUPLES
let arr = ["ryu", 25, true];
arr[0] = false; // this is work
arr[1] = "yoshi"; //this is work
arr = [30, false, "yoshi"]; //this is work it can change the position and value

let tup: [string, number, boolean] = ["ryu", 25, true];
// tup[0] = false;  this isn't work
tup[0] = "Jaja"; // this is work

let student: [string, number];
student = ["Jaja", 234234];

//* GENERICS
// Property 'name' does not exist on type '{ uid: number; }'.
// this function not know the object propertie
const addUID = <T extends object>(obj: T) => {
  let uid = Math.floor(Math.random() * 100);
  return { ...obj, uid };
};

let documentOne = addUID({ name: "yoshi", age: 40 });

console.log(documentOne.name);

//with interfaces
interface Resource<T> {
  uid: number;
  resourceName: string;
  data: T;
}

const documentThree: Resource<object> = {
  uid: 1,
  resourceName: "person",
  data: { name: "Jaja" },
};
const documentFour: Resource<string[]> = {
  uid: 1,
  resourceName: "person",
  data: ["Ohm", "Jaja"],
};

console.log(documentThree, documentFour);

//* ENUMS
enum ResourceType {
  BOOK,
  AUTHOR,
  FILM,
  DIRECTOR,
  PERSON,
}
interface ResourceTwo<T> {
  uid: number;
  resourceType: ResourceType;
  data: T;
}

const documentFive: ResourceTwo<object> = {
  uid: 1,
  resourceType: ResourceType.AUTHOR,
  data: { title: "name of the wind" },
};
const documentSix: ResourceTwo<object> = {
  uid: 1,
  resourceType: ResourceType.PERSON,
  data: { name: "Weerayooth" },
};

console.log(documentFive, documentSix);
