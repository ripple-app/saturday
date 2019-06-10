
const sinon = require('sinon');
const config = require('../../src/config/config');

describe('config', () => {
    const MockRequest = (function () {
        return {
            ip: 'localhost',
            method: 'GET',
            hostname: 'localhost',
            baseUrl: '/',
            path: ''
        }
    });

    const McokResponse = (function () {
        return {
            json: function(body) {
                console.log(body);
            },
            send: function(body) {
                console.log(body);
            },
            end: function(body) {
                console.log(body);
            },
            statusCode: 200
        };
    })
    beforeAll(() => {
        jest.mock('../../src/postman/postman');
        const Postman = require('../../src/postman/postman');
        Postman.mockImplementation(() => {
            return {
                connect: function(options) {
                    console.log(options);
                },
                send: function(message) {
                    console.log(message);
                }
            }
        });
    });

    afterEach(() => {
        sinon.restore();
    });

    // test('setPostman', () => {
    //     config.setPostman({
    //         host: 'localhost',
    //         port: '5000'
    //     });

    //     const _postman = config.__private__.getPostman();
    //     expect(_postman).toBeDefined();
    // });

    // test('setSaturday', () => {
    //     config.setSaturday();

    //     const _saturday = config.__private__.getSaturday();
    //     expect(_saturday).toBeDefined();
    // });

    test('configureJSON', async () => {
        config.setSaturday();
        config.setPostman({
            host: 'localhost',
            port: '5000'
        });

        const id = '1';
        const req = new MockRequest();
        const res = new McokResponse();

        const result = await config.configureJSON(id, req, res);
        expect(result).toBeUndefined();
    });

    test('configureSend', async () => {
        config.setSaturday();
        config.setPostman({
            host: 'localhost',
            port: '5000'
        });

        const id = '1';
        const req = new MockRequest();
        const res = new McokResponse();

        const result = await config.configureSend(id, req, res);
        expect(result).toBeUndefined();
    });

    test('configureEnd', async () => {
        config.setSaturday();
        config.setPostman({
            host: 'localhost',
            port: '5000'
        });

        const id = '1';
        const req = new MockRequest();
        const res = new McokResponse();

        const result = await config.configureEnd(id, req, res);
        expect(result).toBeUndefined();
    });
});