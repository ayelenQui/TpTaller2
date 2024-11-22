export class Evento {

  constructor(
    public id: number,
    public nombre: string,
    public descripcion: string,
    public categoria: string,
    public fecha: string, // Cambiado a string
    public completada: boolean
  ) {
  }
}
