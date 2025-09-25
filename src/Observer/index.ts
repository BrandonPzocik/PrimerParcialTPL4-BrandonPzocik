interface Observador {
  cambiarEstado(estado: string): void;
}

class Soporte {
  private observadores: Observador[] = [];
  private estado: string = "disponible";

  agregarObservador(observador: Observador): void {
    this.observadores.push(observador);
  }

  private notificarObservadores(): void {
    this.observadores.forEach((obs) => obs.cambiarEstado(this.estado));
  }

  cambiarEstado(nuevoStatus: string): void {
    this.estado = nuevoStatus;
    this.notificarObservadores();
  }
}

class Equipo implements Observador {
  constructor(
    public nombre: string,
    public tipo: string,
    public estado: string
  ) {}
  cambiarEstado(estado: string): void {
    this.estado = estado;
    console.log(`${this.nombre} en ${this.estado}.`);
  }
}

const soporte = new Soporte();
const equipo = new Equipo("Notebook HP", "Portatil", "disponible");
soporte.agregarObservador(equipo);
equipo.cambiarEstado("en reparacion");
