import { Invoice } from "./classes/Invoice.js";
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
form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
