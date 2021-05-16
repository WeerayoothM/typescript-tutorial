import { HasFormatter } from "./../Interfaces/HasFormatter.js";

// classes
export class Invoice implements HasFormatter {
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
    readonly client: string,
    private details: string,
    public amount: number
  ) {}

  format() {
    return `${this.client} owes $${this.amount} for ${this.details}`;
  }
}
