function Car(make,gas,on,mileage){
  this.make = make;
  this.gas = gas;
  this.on = false;
  this.mileage = mileage;
}
Car.prototype.start = function(){
  this.isOn = true;
}
var prius = new Car('toyota', 'prius', '50', 'true', '199999');

prius.start();
console.log(prius);

Car.prototype.refuel = function(){
  this.gas = '150';
}

prius.refuel();
console.log(prius);

// constructors are uppercase, functions are lowercase.
// TODO: step 1, create a constructor. step 2, create an instance of the constructor. So your constructor is a blueprint. step 3, use this. Makes it easy to read code and create a single blueprint and use it over and over again.
// TODO: When not to use constructors? This is your personal preference.
