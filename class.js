class Car{
  name;
  model;
  price;
  constructor(name, model, price){
    console.log("inside constructor");
    console.log(this);  //inside a method it refers to the owner obj Car
    this.name = name;
    this.model = model;
    this.price = price;
  }
 age(){
  console.log("inside age");
  console.log(this);         //inside a method it refers to the owner object Car
   let date = new Date();
   return date.getFullYear() - this.model;
  
 }
}
 let myKia = new Car("Sonet", 1995, 800000);
 console.log(myKia.age());
 