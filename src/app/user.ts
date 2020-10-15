export class Users {
    public Id: number;
    public name: string;
    public pwd:string;
    public email:string;
    public first_name: string;
    public last_name:string;
    public address:string;
    
    constructor(Id:number,name: string,pwd:string,email:string, first_name:string, last_name:string ,address:string) {
    this.Id = Id;
    this.name = name;
    this.pwd = pwd;
    this.first_name = first_name;
    this.last_name = last_name;
    this.email = email;
    this.address = address;
    }
}
export class Data {
    public Id: number;
    public email:string;
    public first_name: string;
    public last_name:string;
    public address:string;
    
    constructor(Id:number,email:string, first_name:string, last_name:string ,address:string) {
    this.Id = Id;
    this.first_name = first_name;
    this.last_name = last_name;
    this.email = email;
    }
}
