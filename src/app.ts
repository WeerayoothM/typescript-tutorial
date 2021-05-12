// const anchor = document.querySelector("a")!;

// if (anchor){
//     console.log(anchor.href)
// }

// console.log(anchor.href);

// const form = document.querySelector("form");

class Invoice {
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
  constructor(
    readonly client : string,
    private details:string,
    public amount : number
  ){}


  format() {
    return `${this.client} owes &${this.amount} for ${this.details}`;
  }
}

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
