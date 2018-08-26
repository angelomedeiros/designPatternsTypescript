interface Subject {
  registerObserver(o: Observer)
  removeObserver(o: Observer)
  notifyObservers()
}

interface Observer {
  update(temperature: number)
}

class WeatherStation implements Subject { // Subject

  private temperature: number
  private observers: Observer[] = []

  setTemperature(temp: number) {
    console.log('WeatherStation: new temperature measurent: ' + temp)
    this.temperature = temp
    this.notifyObservers()
  }

  registerObserver(o: Observer) {
    this.observers.push(o)
  }

  removeObserver(o: Observer) {
    let index = this.observers.indexOf(o)
    this.observers.splice(index, 1)
  }

  notifyObservers() {
    for (let observer of this.observers) {
      observer.update(this.temperature)
    }
  }

}

class TemperatureDisplay implements Observer { // Observer

  private subject: Subject

  constructor (weatherStation: Subject) {
    this.subject = weatherStation
    weatherStation.registerObserver(this)
  }
  
  public update(_temperature: number) {
    console.log('TemperatureDisplay: I need to update my display.')
    // Implementar lógica aqui!
  }

}

class Fan implements Observer { // Observer

  private subject: Subject

  constructor (weatherStation: Subject) {
    this.subject = weatherStation
    weatherStation.registerObserver(this)
  }
  
  public update(temperature: number) {
    if ( temperature > 25 ) {
      console.log('Está muito quente aqui!')
    } else {
      console.log('A temperatura está muito agradável!')
    }
  }

}

let weatherStation = new WeatherStation()

let tempDisplay = new TemperatureDisplay(weatherStation)
let fan = new Fan(weatherStation)

weatherStation.setTemperature(30)
weatherStation.setTemperature(20)