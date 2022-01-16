/*
* This program is a vehicle class.
*
* @author  Malcolm Tompkins
* @version 1.0
* @since   2022-01-16
*/

class Vehicle {
  // this is a  class.
  protected _speed: number
  protected _maxSpeed: number
  private _colour: string

  constructor (initialColour: string, topspeed: number) {
    this._colour = initialColour
    this._maxSpeed = topspeed
    this._speed = 0
  }

  public get speed () {
    return this._speed
  }

  public get maxSpeed () {
    return this._maxSpeed
  }

  public get colour () {
    return this._colour
  }

  public set speed (param: number) {
    this._speed = param
  }

  public set colour (param: string) {
    this._colour = param
  }

  public status () {
    console.log('Speed: ' + this._speed + '\nMaxSpeed: ' + this._maxSpeed +
                    '\nColour: ' + this._colour)
  }

  public accelerate (newSpeed: number) {
    this._speed = newSpeed
    if (this._speed > this._maxSpeed) {
      this._speed = this._maxSpeed
    }
  }

  public break (breakSpeed: number) {
    this._speed = this._speed - breakSpeed
    if (this._speed < 0) {
      this._speed = 0
    }
  }
}

class Bike extends Vehicle {
  private _cadense: number

  constructor (inicialColour: string, topspeed: number) {
    super(inicialColour, topspeed)
    this._cadense = 0
  }

  public get cadense () {
    return this._cadense
  }

  public set cadense (param: number) {
    this._cadense = param
  }

  public accelerate (newSpeed: number) {
    super.accelerate(newSpeed)
  }

  public ringBell () {
    console.log('\nDing ding!\n')
  }

  public status () {
    super.status()
    console.log('Cadense: ' + this._cadense)
  }
}

class Truck extends Vehicle {
  private _licensePlate: string

  constructor (inicialColour: string, topspeed: number,
    inicialPlate: string) {
    super(inicialColour, topspeed)
    this._licensePlate = inicialPlate
  }

  public get licensePlate () {
    return this._licensePlate
  }

  public set licensePlate (param: string) {
    this._licensePlate = param
  }

  public applyAir (airPressure: number) {
    this.speed = this.speed - airPressure
  }

  public status () {
    super.status()
    console.log('License plate: ' + this._licensePlate)
  }
}

const bmx = new Bike('Red', 40)

console.log('Created Bmx bike.\nStatus:\n')
bmx.status()

console.log('\nAccelerating 1000 units:')
bmx.accelerate(1000)
bmx.status()

console.log('\nRing bell.')
bmx.ringBell()
const bigTruck = new Truck('Grey', 200, 'HGC-3456F')

console.log('Created a Truck.\nStatus:\n')
bigTruck.status()

console.log('\nAccelerating 1000 units: ')
bigTruck.accelerate(1000)
bigTruck.status()

console.log('\nDone.')
