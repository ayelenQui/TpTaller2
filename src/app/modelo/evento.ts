export class Evento {

  constructor(
    public id: string,
    public nombre: string,
    public descrpcion: string,
    public categoria: string,
    public fecha: Date,
    public completada: boolean
  ) {
  }
}
