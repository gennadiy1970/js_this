const obj = {
  a: 1,
  b: function() {
    return obj.a + 1;
  }
};

console.log(obj.b()); // 2

const objt = {
    a: 1,
    b: function() {
      return this.a + 1;
    }
  };
  
  console.log(objt.b()); // 2