class Vector {
    constructor(components) {
      this.components = components;
    }
  
    add(otherVector) {
      return new Vector(this.components.map((val, index) => val + otherVector.components[index]));
    }
  
    sub(otherVector) {
      return new Vector(this.components.map((val, index) => val - otherVector.components[index]));
    }
  
    dot(otherVector) {
      return this.components.reduce((sum, val, index) => sum + val * otherVector.components[index], 0);
    }
  }
  
  let a = new Vector([1, 2, 3]);
  let b = new Vector([4, 5, 6]);
  
  console.log(a.add(b).sub(b).dot(b)); 
  