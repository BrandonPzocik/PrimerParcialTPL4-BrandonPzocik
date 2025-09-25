interface Observador {
  actualizar(estado: string): void;
}

class Equipo {
  private observadores: Observador[] = [];
  constructor(
    public nombre: string,
    public tipo: string,
    public estado: string
  ) {}

  agregarObservador(obs: Observador): void {
    this.observadores.push(obs);
  }

  private notificar(): void {
    this.observadores.forEach((o) => o.actualizar(this.estado));
  }

  cambiarEstado(nuevoEstado: string): void {
    this.estado = nuevoEstado;
    console.log(`${this.nombre} ${this.estado}`);
    this.notificar();
  }
}

class Soporte implements Observador {
  actualizar(estado: string): void {
    console.log(`Soporte notificado: el equipo está ${estado}`);
  }
}

export function RunObserver() {
  const equipo = new Equipo("Notebook HP", "Portatil", "disponible");
  const soporte = new Soporte();

  equipo.agregarObservador(soporte);
  equipo.cambiarEstado("en reparación");
}
