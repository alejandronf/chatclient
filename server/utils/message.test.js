var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    var from = 'Jen';
    var text = 'Some message';
    var message = generateMessage(from, text);

    expect(typeof message.createdAt).toBe('number');
    expect(typeof message.createdAt).toBe('number');
    expect(typeof message).toBe('object');
    expect(message).toHaveProperty('from',from);
    expect(message).toHaveProperty('text',text);

  });
});

describe('generateLocationMessage', () => {
  it('should generate correct location message object', () => {
    var from = 'Jen';
    var latitude = 37.347597799999996;
    var longitude = -6.047269099999999;
    var url = 'https://www.google.com/maps?q=37.347597799999996,-6.047269099999999';

    var message = generateLocationMessage(from, latitude, longitude);
    expect(typeof message).toBe('object');
    expect(message).toHaveProperty('url',url);
    expect(typeof  message.createdAt).toBe('number');
    expect(typeof  message.url).toBe('string');
    expect(message.url).toBe(url);

  });
});
