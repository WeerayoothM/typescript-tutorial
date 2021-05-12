"use strict";
// const anchor = document.querySelector("a")!;
// if (anchor){
//     console.log(anchor.href)
// }
// console.log(anchor.href);
// const form = document.querySelector("form");
var Invoice = /** @class */ (function () {
    /*
    readonly client: string; // can access but can't change value of this prop
    private details: string; // private : not access this property outside class
    public amount: number; // can access this property outside class
  
    constructor(c: string, d: string, a: number) {
      this.client = c;
      this.details = d;
      this.amount = a;
    }*/
    // shorthand for define property
    function Invoice(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    Invoice.prototype.format = function () {
        return this.client + " owes &" + this.amount + " for " + this.details;
    };
    return Invoice;
}());
var invoiceOne = new Invoice("mario", "work on the mario website", 250);
var invoiceTwo = new Invoice("logi", "work on the logi website", 300);
var invoices = [];
invoices.push(invoiceOne);
invoices.push(invoiceTwo);
invoices.forEach(function (inv) {
    console.log(inv.client, inv.format());
});
var form = document.querySelector(".new-item-form");
//input
var type = document.querySelector("#type");
var tofrom = document.querySelector("#tofrom");
var details = document.querySelector("#details");
var amount = document.querySelector("#amount");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
