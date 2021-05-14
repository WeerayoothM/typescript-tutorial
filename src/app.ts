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
  },
};

const greetPerson = (person:IsPerson) => {
  console.log('Hello ', person.name);
  
}


greetPerson(me)

import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";
import { HasFormatter } from './Interfaces/HasFormatter';

let docOne : HasFormatter;
let docTwo : HasFormatter;

docOne = new Invoice("Ohm", "web work", 250);
docTwo = new Payment("Jaja", "plumbing work", 200);
let docs : HasFormatter[] = [];
docs.push(docOne)
docs.push(docTwo)
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

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  let doc : HasFormatter;
  if (type.value === 'invoice'){
    doc = new Invoice(tofrom.value,details.value,amount.valueAsNumber);
  }else {
    doc = new Payment(tofrom.value,details.value,amount.valueAsNumber);
  }

  console.log(doc);
});
