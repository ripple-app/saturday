
const sinon = require('sinon');
const Config = require('../src/config');

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
    });

    let config;

    beforeAll(() => {
        jest.mock('../src/postman');
        const Postman = require('../src/postman');
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

    beforeEach(() => {
        config = Config({
            host: 'localhost',
            port: '5000'
        });
    })
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
        const id = '1';
        const req = new MockRequest();
        const res = new McokResponse();

        const result = await config.configureJSON(id, req, res);
        expect(result).toBeUndefined();
    });

    test('configureSend', async () => {
        const id = '1';
        const req = new MockRequest();
        const res = new McokResponse();

        const result = await config.configureSend(id, req, res);
        expect(result).toBeUndefined();
    });

    test('configureEnd', async () => {
        const id = '1';
        const req = new MockRequest();
        const res = new McokResponse();

        const result = await config.configureEnd(id, req, res);
        expect(result).toBeUndefined();
    });
});