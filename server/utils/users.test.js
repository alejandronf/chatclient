const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {
  it('should add new user', () =>{
    var users = new Users();
    var user = {
      id: '123',
      name: 'ale',
      room: 'The Office Fans'
    };
    
    var resUser = users.addUser(user.id, user.name, user.room);
    console.log('addUser X ',users.users);

    expect(users.users).toEqual([user]); 
    
  });
});
 