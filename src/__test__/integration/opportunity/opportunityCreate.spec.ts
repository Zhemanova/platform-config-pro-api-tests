import {opportunityAllFields, opportunityReqFields, invalidToken} from "../../../data/opportunity"
import {opportunityCreate} from "../../../requests/opportunityCreate";

let res: any

describe("OPPORTUNITY CREATE", () => {
    describe("OPPORTUNITY CREATE - POSITIVE", () => {

        it("Verify opportunity created all fields", async () => {
            res = await opportunityCreate(opportunityAllFields, process.env.ADMIN_TOKEN)
            expect(res.body.config[4].id).toBe('opportunity_created');
            expect(res.body.config[4].content).toBe('Opportunity was created');
        })

        it("Verify opportunity created required fields only", async () => {
            res = await opportunityCreate(opportunityReqFields, process.env.ADMIN_TOKEN)
            expect(res.body.config[4].id).toBe('opportunity_created');
            expect(res.body.config[4].content).toBe('Opportunity was created');
        })
    })

    describe("OPPORTUNITY CREATE - NEGATIVE", () => {

        it("should not create w/o data", async () => {
            res = await opportunityCreate('', process.env.ADMIN_TOKEN);
            expect(res.body.statusCode).toBe(500);
            expect(res.body.message).toBe('Internal server error');
        })

        it("should not create w/o token", async () => {
            res = await opportunityCreate(opportunityAllFields, null);
            expect(res.body.statusCode).toBe(500);
            expect(res.body.message).toBe('Internal server error');
        })

        it("should not create with invalid token", async () => {
            res = await opportunityCreate(opportunityAllFields, invalidToken);
            expect(res.body.statusCode).toBe(500);
            expect(res.body.message).toBe('Internal server error');
        })

        it("should not create w/o priority field", async () => {
            res = await opportunityCreate({...opportunityAllFields,
                data: {
                    ...opportunityAllFields.data,
                    opportunity: {...opportunityAllFields.data.opportunity, priority: ''}
                }
            }, process.env.ADMIN_TOKEN);
            expect(res.body.statusCode).toBe(500);
            expect(res.body.message).toBe('Internal server error');
        })

        it("should not create w/o source field ", async () => {
            res = await opportunityCreate({...opportunityAllFields,
                data: {
                    ...opportunityAllFields.data,
                    opportunity: {...opportunityAllFields.data.opportunity, source: ''}
                }
            }, process.env.ADMIN_TOKEN);
            expect(res.body.statusCode).toBe(500);
            expect(res.body.message).toBe('Internal server error');
        })

        it("should not create w/o status field ", async () => {
            res = await opportunityCreate({...opportunityAllFields,
                data: {
                    ...opportunityAllFields.data,
                    opportunity: {...opportunityAllFields.data.opportunity, status: ''}
                }
            }, process.env.ADMIN_TOKEN);
            expect(res.body.statusCode).toBe(500);
            expect(res.body.message).toBe('Internal server error');
        })
    })
})
