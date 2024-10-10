export const opportunityAllFields = {
    data: {
        contact: {
            email: "dashagkhan@gmail.com",
            name: "Pepper",
            phone: "45645687"
        },
        opportunity: {
            amount: "1000",
            description: "This is an opportunity",
            opportunity_name: "First one",
            priority: "52a26baa-64f6-4648-87ae-a2a7abffdec6",
            source: "bb4c346e-29ae-46a4-a2bd-93c32b613ec2",
            status: "3328c773-e71b-4256-bc8d-80c47354b43d"
        },
        path: "/opportunity/kanban",
    },
    serverHandler: "opportunity.handler.opportunity_create",
};

export const opportunityReqFields = {
    data: {
        contact: {},
        opportunity: {
            opportunity_name: "Firkkst one",
            priority: "52a26baa-64f6-4648-87ae-a2a7abffdec6",
            source: "bb4c346e-29ae-46a4-a2bd-93c32b613ec2",
            status: "3328c773-e71b-4256-bc8d-80c47354b43d"
        },
        path: "/opportunity/kanban"
    },
    serverHandler: "opportunity.handler.opportunity_create"
}

export const invalidToken = '__INVALID_TOKEN__eyJhbGciOiJIUz1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImS1mZGE0LTQ1NzUtOWZlYy04NWEwMjMyNjIzNjUiLCJpYXQiOjE3Mjg1OTAxMjQsImV4cCI6MTcyODc2MjkyNH0.56Ki5QSv9xdFVkvMH-IeB9WZ2t10LKOhaSj7gqXrxCE'