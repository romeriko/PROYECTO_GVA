export class Device {

  constructor() {
    this.lastConnection = new Date();
    this.lastUpdate = new Date();
  }

  public static table_fields = ['id', 'name', 'ip', 'connection', 'version', 'status', 'type', 'updated'];
  public static table_titles = ['Id', 'Nombre', 'IP', 'Última Conexión', 'Versión', 'Estado', 'Tipo de Dispositivo', 'Fecha Actualizacion'];

  public allowCorrupt: boolean;
  public automaticUpdated: boolean;
  public id: string;
  public name: string;
  public ip: string;
  public type: string;
  public lastConnection: Date;
  public connection: string;
  public version: string;
  public status: string;
  public old = false;
  public username: string;
  public lastUpdate: Date;
  public updated: string;
  public typeName: string;
}
