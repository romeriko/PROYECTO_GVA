export class LogDevice {
  constructor() {
    this.date = new Date();
  }

  public static table_fields = ['logDevice', 'name', 'status', 'date'];
  public static table_titles = ['Id del dispositivo', 'Nombre', 'Estado', 'Fecha de verificación'];

  public id: string;
  public name: string;
  public logDevice: string;
  public date: Date;
  public status: string;
}
