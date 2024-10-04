import { config } from 'dotenv';
config();

describe('All tests', () => {
    require('./integration/login/login.spec');
    require('./integration/contact/contactCreate.spec');
});
