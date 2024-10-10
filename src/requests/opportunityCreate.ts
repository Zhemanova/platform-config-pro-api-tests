import request from 'supertest';
const authUrl = `http://localhost:2000/handler`;

export function opportunityCreate(opportunityData:any, token){
    return request(authUrl)
        .post('/')
        .set('Authorization', `Bearer ${token}`)
        .send(opportunityData)
}