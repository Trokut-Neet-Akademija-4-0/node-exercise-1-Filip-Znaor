class Osoba {
  constructor(
    private ime: string,
    private dob: number,
  ) {}

  public setIme(ime: string): void {
    this.ime = ime
  }

  public getIme(): string {
    return this.ime
  }

  public setDob(dob: number): void {
    this.dob = dob
  }

  public getDob(): number {
    return this.dob
  }

  public get imeIDob() {
    return `Meine Name ist ${this.ime} und ich bin ${this.dob} Jahre alt!`
  }
}

const osoba = new Osoba('toto', 77)
console.log(osoba.imeIDob)
export default Osoba
