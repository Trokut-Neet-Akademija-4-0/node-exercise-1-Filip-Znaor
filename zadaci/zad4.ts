abstract class KućniLjubimac {
  private ime!: string
  abstract glasajSe(): string
}

class Pas extends KućniLjubimac {
  private zvuk: string

  constructor() {
    super()
    this.zvuk = 'Vauuu'
    this.ime = 'Pas'
  }

  glasajeSe(): string {
    return this.zvuk
  }
}

const pas = new Pas()
console.log(pas.glasajSe())

class Mačka extends KućniLjubimac {
  private zvuk: string

  constructor() {
    super()
    this.zvuk = 'Mjauu'
    this.ime = 'Mačka'
  }

  glasajeSe(): string {
    return this.zvuk
  }

  static DohvatiIme(): string {
    return 'Mačkaaaaaaa'
  }
}

const mačka = new Mačka()
console.log(Mačka.DohvatiIme())

