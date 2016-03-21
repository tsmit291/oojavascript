function Car(make,gas,on,mileage){
  this.make = make;
  this.gas = gas;
  this.on = false;
  this.mileage = mileage;
}
var prius = new Car('toyota', '10', 'true', '111111');

console.log(prius);
// constructors are uppercase, functions are lowercase.
// TODO: step 1, create a constructor. step 2, create an instance of the constructor. So your constructor is a blueprint. step 3, use this.
