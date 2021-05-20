const me = {
    name: "Jaja",
    age: 23,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log("I spent", amount);
        return amount;
    },
};
const greetPerson = (person) => {
    console.log("Hello ", person.name);
};
greetPerson(me);
import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
let docOne;
let docTwo;
docOne = new Invoice("Ohm", "web work", 250);
docTwo = new Payment("Jaja", "plumbing work", 200);
let docs = [];
docs.push(docOne);
docs.push(docTwo);
console.log(docs);
const invoiceOne = new Invoice("mario", "work on the mario website", 250);
const invoiceTwo = new Invoice("logi", "work on the logi website", 300);
let invoices = [];
invoices.push(invoiceOne);
invoices.push(invoiceTwo);
invoices.forEach((inv) => {
    console.log(inv.client, inv.format());
});
const form = document.querySelector(".new-item-form");
//input
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
//list template instance
const ul = document.querySelector("ul");
const list = new ListTemplate(ul);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let values;
    values = [tofrom.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    list.render(doc, type.value, "end");
});
//* TUPLES
let arr = ["ryu", 25, true];
arr[0] = false; // this is work
arr[1] = "yoshi"; //this is work
arr = [30, false, "yoshi"]; //this is work it can change the position and value
let tup = ["ryu", 25, true];
// tup[0] = false;  this isn't work
tup[0] = "Jaja"; // this is work
let student;
student = ["Jaja", 234234];
//* GENERICS
// Property 'name' does not exist on type '{ uid: number; }'.
// this function not know the object propertie
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let documentOne = addUID({ name: "yoshi", age: 40 });
console.log(documentOne.name);
const documentThree = {
    uid: 1,
    resourceName: "person",
    data: { name: "Jaja" },
};
const documentFour = {
    uid: 1,
    resourceName: "person",
    data: ["Ohm", "Jaja"],
};
console.log(documentThree, documentFour);
//* ENUMS
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["AUTHOR"] = 1] = "AUTHOR";
    ResourceType[ResourceType["FILM"] = 2] = "FILM";
    ResourceType[ResourceType["DIRECTOR"] = 3] = "DIRECTOR";
    ResourceType[ResourceType["PERSON"] = 4] = "PERSON";
})(ResourceType || (ResourceType = {}));
const documentFive = {
    uid: 1,
    resourceType: ResourceType.AUTHOR,
    data: { title: "name of the wind" },
};
const documentSix = {
    uid: 1,
    resourceType: ResourceType.PERSON,
    data: { name: "Weerayooth" },
};
console.log(documentFive, documentSix);
