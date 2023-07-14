
/**
 * se utiliza para crear objetos en una clase abstracta o interfaz sin especificar la clase concreta que se creará. 
 */

interface lunch {
  cook(): void;
}

class LunchOfTheDay implements lunch {
  cook() {
    console.log('Cocinando almuerzo del dia');
  }
}

class ExecutiveLunch implements lunch{
  cook() {
    console.log('Cocinando un almuerzo ejecutivo');
  }
}

abstract class ShapeFactory {
  static getShape(type: string): lunch {
    switch (type) {
      case 'OFTHEDAY':
        return new LunchOfTheDay();
      case 'EXECUTIVE':
        return new ExecutiveLunch();
      default:
        throw new Error('Almuerzo no valido');
    }
  }
}

const ofTheDay = ShapeFactory.getShape('OFTHEDAY');
ofTheDay.cook()

const executive = ShapeFactory.getShape('EXECUTIVE');
executive.cook()


/**OTRO EJEMPLO */
// Clase base para los productos
class Product {
  name;
  constructor(name) {
    this.name = name;
  }
  
  getInfo() {
    return `This is a ${this.name}`;
  }
}

// Subclase de productos específica
class ConcreteProductA extends Product {
  constructor() {
    super("Concrete Product A");
  }
}

// Subclase de productos específica
class ConcreteProductB extends Product {
  constructor() {
    super("Concrete Product B");
  }
}

// Factory (Fábrica) para crear productos
class ProductFactory {
  createProduct(type) {
    switch (type) {
      case "A":
        return new ConcreteProductA();
      case "B":
        return new ConcreteProductB();
      default:
        throw new Error("Invalid product type");
    }
  }
}

// Uso del Factory para crear productos
const factory = new ProductFactory();
const productA = factory.createProduct("A");
console.log(productA.getInfo()); // Imprime "This is a Concrete Product A"

const productB = factory.createProduct("B");
console.log(productB.getInfo()); // Imprime "This is a Concrete Product B"
