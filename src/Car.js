function Car (make, model, year, color, seats, passengers) {
  this.make = make
  this.model = model
  this.year = year
  // TODO: add color, seats here
  this.color = color
  this.seats = seats

  this.running = false
  this.owner = 'manufacturer'
  this.previousOwners = []
  console.log(passengers)
  if (passengers) {
    this.passengers = passengers
  } else {
    this.passengers = []
  }
}

Car.prototype.sell = function (newOwner) {
  this.previousOwners.push(this.owner)
  this.owner = newOwner
}

Car.prototype.paint = function (newColor) {
  this.color = newColor
}

// export the Car function for use in node //
// this is required for the test.js to load this //
module.exports = Car

Car.prototype.start = function () {
  this.running = true
}

Car.prototype.off = function () {
  this.running = false
}

Car.prototype.driveTo = function (destination) {
  if (this.running === true) {
    console.log('driving to ' + destination)
    return true
  }
  return false
}

Car.prototype.park = function () {
  if (this.running === false) {
    console.log('parked!!')
    return true
  }
  return false
}

Car.prototype.pickUp = function (name) {
  if (this.running === true && this.seats > this.passengers.length + 1) {
    console.log('driving to pick up ' + name)
    this.passengers.push(name)
    return true
  }
  return false
}

Car.prototype.dropOff = function (name) {
  if (this.running === true && this.passengers.indexOf(name) !== -1) {
    var i = this.passengers.indexOf(name)
    this.passengers.splice(i, 1)
    console.log('driving to drop off ' + name)
    return true
  }
  return false
}

Car.prototype.passengerCount = function () {
  var x = this.passengers.length
  return x
}
