const expect = require('expect');

// import is real string

//isRealString
    //should reject non-string values
    //should reject string with only spaces
    //should allow string with non-space characters

var {isRealString} = require('./validator');

describe('isRealString', () => {
    
    it('should reject non-string values', () => {
        var params = 7;
        var validate = isRealString(params);
        expect(validate).toBeFalsy();
    });
  
    it('should reject string with only spaces', () => {
        var params = '  ';
        var validate = isRealString(params);
        expect(validate).toBeFalsy();
    });

    it('should allow string with non-space characters', () => {
        var params = 'asdf asdf';
        var validate = isRealString(params);
        expect(validate).toBeTruthy();
    });
    
});