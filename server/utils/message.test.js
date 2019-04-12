const expect = require('expect');

const {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate the correct message object', () => {
        const from = 'Test User';
        const text = 'Test Message';

        var message = generateMessage(from, text)
        // expect(message.from).toBe(from);
        // expect(message.text).toBe(text);
        expect(message).toInclude({from, text});
        expect(message.createdAt).toBeA('number');
    });
});

describe('generateLocationMessage', () => {
    it('should generate the correct location message object', () => {
        const from = 'Test Location User';
        const latitude = 123;
        const longitude = 456;
        const url = `https://www.google.co.uk/maps?q=${latitude},${longitude}`;

        var message = generateLocationMessage(from, latitude, longitude)
        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({from, url});
    });
});