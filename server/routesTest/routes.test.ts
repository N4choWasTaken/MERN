const request = require('supertest');
const express = require('express');
const authRoutes = require('../routes/auth.ts');

const app = express();

// Mount the authRoutes under '/auth' path
app.use('/auth', authRoutes);

describe('Test the /signup endpoint', () => {
    it('should respond with JSON', async () => {
        const response = await request(app).get('/auth/signup');
        expect(response.status).toBe(200);
        expect(response.type).toBe('application/json'); 
        expect(response.body).toEqual({ data: 'you hit signup endpoint' });
    });
});
