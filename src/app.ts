interface IsPerson {
  name:string;
  age : number;
  speak(a:string):void;
  spend(a:number):number;
}

const me : IsPerson = {
  name:'Jaja',
  age:23,
  speak(text:string) : void {
    console.log(text);
    
  },
  spend(amount:number) : number {
    console.log('I spent',amount);
    return amount;
    
  }
};

const greetPerson = (person:IsPerson) => {
  console.log('Hello ', person.name);
  
}


greetPerson(me)

import { Invoice } from "./classes/Invoice.js";

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

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});