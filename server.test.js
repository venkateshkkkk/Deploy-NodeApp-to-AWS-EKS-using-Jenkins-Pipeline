const request = require('supertest');
const app = require('./server.js'); // Assuming your app file is named 'yourAppFile.js'
 
describe('GET /', () => {
  it('responds with "Hello World"', async () => {
    // Send a GET request to the root path ('/') of the application
    const response = await request(app).get('/');
 
    // Assert that the response status code is 200 (OK)
    expect(response.status).toBe(200);
 
    // Assert that the response body is 'Hello World'
    expect(response.text).toBe('Hello World');
  });
});
