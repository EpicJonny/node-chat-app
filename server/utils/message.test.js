const expect = require('expect');

const {generateMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate the correct message object', () => {
        const from = 'Test User';
        const text = 'Test Message';

        var message = generateMessage(from, text)
        // expect(message.from).toBe(from);
        // expect(message.text).toBe(text);
        expect(message).toInclude({from, text});
        expect(typeof message.createdAt).toBe('number');
    });
});