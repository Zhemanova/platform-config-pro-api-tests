import request from 'supertest';

describe('Create contact', () => {
    const authUrl = `http://localhost:2000/handler`;

    it('create contact', (done) => {
        const token = process.env.ADMIN_TOKEN
        const contact = {
            data: {
                contact: {
                    name: "NataN"
                },
                connection: {
                    email: "nata@gmail.com"
                },
                address: {
                    street: "street"
                },
                path: "/contact",
            },
            serverHandler: "contact.handler.contact_create",
        };

        request(authUrl)
            .post('/')
            .set('Authorization', `Bearer ${token}`)
            .send(contact)
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                //some expects
                done();
            });
    });
});
