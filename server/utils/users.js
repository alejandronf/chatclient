// [{
//   id: '/#23wefasdfasdf',
//   name: 'Ale',
//   room: 'The Office Fans'
// }]


// addUser(id,name,room)
// removeUser(id)
// gethUser(id)
// getUserList(room)

class Users {
  constructor () {
    this.users = [];
  }
  
  addUser (id,name,room) {
    var user = {id, name, room};
    this.users.push(user);
    return user;
    
  }
}

module.exports = {Users};

// class Person {
//   constructor (name,age){
//     this.name=name;
//     this.age=age;
//   } 
//   getUserDescription () {
//     return `${this.name} has ${this.age} years old`;
//   } 
// }

// var me = new Person('ale',32);
// var description = me.getUserDescription();
// console.log(me.name);
// console.log(me.age);
// console.log(description);


