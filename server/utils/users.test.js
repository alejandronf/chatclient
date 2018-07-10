const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {
  var users;
  
  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: '1',
      name: 'ale',
      room: 'course'
    },{
      id: '2',
      name: 'pepe',
      room: 'react'
    },{
      id: '3',
      name: 'juan',
      room: 'course'
    }]
  });
  
  it('should add new user', () =>{
    var users = new Users();
    var user = {
      id: '123',
      name: 'ale', 
      room: 'The Office Fans'
    };
    
    var resUser = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]); 
    
  });
  
  it('should remove a user', () => {
    var userId = '1';
    var user = users.removeUser(userId);
    
    expect(user.id).toBe(userId);
    expect(users.users.length).toBe(2);
  });
  
  it('should not remove a user', () => {
    var userId = '10';
    var user = users.removeUser(userId);
    
    expect(user).toBeUndefined();
    expect(users.users.length).toBe(3);
  });
  
  it('should find a user', () => {
    var user = users.getUser('1');
    expect(user).toEqual(users.users[0]);
  });
  
  it('should not find a user', () => {
    var user = users.getUser('10');
    expect(user).toBeUndefined();
  });
  
  it('should return names for node course', () => {
    var userList = users.getUserList('course');
    expect(userList).toEqual( ['ale', 'juan']);
  });
  
    it('should return names for non existing course', () => {
    var userList = users.getUserList('asdf');
    expect(userList).toEqual([]);
    expect(userList.length).toBe(0);
  });
});
 