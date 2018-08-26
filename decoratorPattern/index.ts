abstract class Carro {

  public descricao: string
  
  public getDescricao(): string {
    return this.descricao
  }

  public abstract preco(): number
  
}

class Uno extends Carro {

  public descricao = 'Uno'

  public preco(): number {
    return 30000
  }

}

class Palio extends Carro {
  
  public descricao = 'Palio'

  public preco(): number {
    return 40000
  }

}

abstract class CarroOpcoes extends Carro {

  decoratorCarro: Carro

  public abstract getDescricao(): string
  public abstract preco(): number

}

class AddVidrosEletricos extends CarroOpcoes {
  
  decoratorCarro: Carro

  constructor(carro: Carro) {
    super()
    this.decoratorCarro = carro
  }

  public getDescricao(): string {
    return this.decoratorCarro.getDescricao() + ', vidro elétrico'
  }

  public preco(): number {
    return this.decoratorCarro.preco() + 2000
  }

}

class AddBancosDeCouro extends CarroOpcoes {
  
  decoratorCarro: Carro

  constructor(carro: Carro) {
    super()
    this.decoratorCarro = carro
  }

  public getDescricao(): string {
    return this.decoratorCarro.getDescricao() + ', bancos de couro'
  }

  public preco(): number {
    return this.decoratorCarro.preco() + 3000
  }

}

let carroThalita = new Uno()
console.log(carroThalita)
console.log(carroThalita.preco())
console.log(carroThalita.getDescricao())

carroThalita = new AddVidrosEletricos(carroThalita)
console.log(carroThalita.preco())
console.log(carroThalita.getDescricao())
