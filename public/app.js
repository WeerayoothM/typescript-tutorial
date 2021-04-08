"use strict";
// const anchor = document.querySelector("a")!;
// if (anchor){
//     console.log(anchor.href)
// }
// console.log(anchor.href);
// const form = document.querySelector("form");
var Invoice = /** @class */ (function () {
    function Invoice(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
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
invoiceOne.client = "Ohm";
console.log(invoices);
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
