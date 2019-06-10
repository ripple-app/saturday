const Saturday = require('../src/saturday');

describe('saturday', () => {
    const mockRequest = (function() {
        return {
            ip: 'localhost',
            method: 'GET',
            hostname: 'localhost',
            baseUrl: '/',
            path: ''
        }
    });
    const mockResponse = (function() {
        return {
            statusCode: 200
        };
    });
    let saturday;

    beforeEach(() => {
        saturday = Saturday();
    });

    test('Saturday is Defined', () => {
        expect(saturday).toBeDefined();
    });

    test('Satuday start method sholud return id', () => {
        const id = '1';
        const request = new mockRequest();
        const response = new mockResponse();
        const result = saturday.start(id, request, response);
        expect(result).toBe(id);
    });

    // test('Satuday start method sholud set info to collector object', () => {
    //     const id = '1';
    //     const request = new mockRequest();
    //     const response = new mockResponse();
    //     saturday.start(id, request, response);
    //     const collector = saturday.__private__.getCollector();

    //     expect(collector[id]).toBeDefined();
    //     expect(collector[id].ip).toBe(request.ip);
    // });

    // test('Satuday start method sholud not set if already exist it', () => {
    //     const id = '1';
    //     const request = new mockRequest();
    //     const response = new mockResponse();
    //     saturday.start(id, request, response);
    //     const request2 = new mockRequest();
    //     request2.ip = '192.168.1.1';
    //     saturday.start(id, request2, response);

    //     const collector = saturday.__private__.getCollector();
    //     expect(collector[id]).toBeDefined();
    //     expect(collector[id].ip).toBe(request.ip);
    //     expect(collector[id].ip).not.toBe(request2.ip);
    // });

    test('Satuday end method sholud return id', () => {
        const id = '1';
        const request = new mockRequest();
        const response = new mockResponse();
        const result = saturday.end(id, request, response);
        expect(result).toBe(id);
    });

    // test('Satuday end method sholud set info to collector object', () => {
    //     const id = '1';
    //     const request = new mockRequest();
    //     const response = new mockResponse();
    //     saturday.end(id, request, response);
    //     const collector = saturday.__private__.getCollector();

    //     expect(collector[id]).toBeDefined();
    //     expect(collector[id].status).toBe(response.statusCode);
    // });

    // test('Satuday end method sholud not set if not exist it', () => {
    //     const id = '2';
    //     const request = new mockRequest();
    //     const response = new mockResponse();
    //     saturday.end(id, request, response);

    //     const collector = saturday.__private__.getCollector();
    //     expect(collector[id]).toBeUndefined();
    // });

    // test('Satuday remove method sholud remove to id', () => {
    //     const id = '1';
    //     const request = new mockRequest();
    //     const response = new mockResponse();
    //     saturday.start(id, request, response);

    //     const collector = saturday.__private__.getCollector();
        
    //     saturday.remove(id);

    //     expect(collector[id]).toBeUndefined();
    // });
});