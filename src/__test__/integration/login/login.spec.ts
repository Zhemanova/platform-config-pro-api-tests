import request from 'supertest';

describe('User login', () => {
    const authUrl = `http://localhost:2000/auth/login`;
    const user = {
        email: process.env.ADMIN_EMAIL,
        password: process.env.ADMIN_PASSWORD,
        appName: process.env.APP_NAME,
    };

    it('user login', (done) => {
        request(authUrl)
            .post('/')
            .send(user)
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                process.env.ADMIN_TOKEN = res.body.accessToken;
                done();
            });
    });
});


