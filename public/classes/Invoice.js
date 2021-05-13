// classes
export class Invoice {
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
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes &${this.amount} for ${this.details}`;
    }
}
