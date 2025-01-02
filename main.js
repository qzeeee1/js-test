
const heropy = {
  firstName: 'heropy',
  lastName: 'park',
  getFullName: function (){
    return `${this.firstName} ${this.lastName}`
  }
}

console.log(heropy.getFullName());

//

const amy = {
  firstName:'Amy',
  lastName:'clarke',
  getFullName: function(){
    return `${this.firstName} ${this.lastName}`
  }
}

console.log(amy.getFullName());