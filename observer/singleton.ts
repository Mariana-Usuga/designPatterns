//garantiza que una clase solo tenga una instancia y proporciona un punto de acceso global a ella
//solo una conexion a la base de datos
class DataBase {
  private static instance: DataBase;
  private constructor() {}

  static connection() {
    if (!DataBase.instance) {
      DataBase.instance = new DataBase();
    }
    return DataBase.instance;
  }

}

const singletonInstance = DataBase.connection();

