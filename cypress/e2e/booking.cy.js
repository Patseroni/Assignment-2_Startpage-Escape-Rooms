describe("Escape Room Site - Booking Tests", () => {
    beforeEach(() => {
        cy.visit("/");
    });

    it("Searches for valid date in the booking module and get timeslots", () => {
        const today = new Date().toISOString().split("T")[0];

        cy.intercept("GET", `https://lernia-sjj-assignments.vercel.app/api/booking/available-times?date=${today}&challenge=1`, {
            statusCode: 200,
            body: { slots: ["10:00", "14:00", "18:00"] },
        }).as("validDate");

        cy.contains("See all challenges").click();
        cy.contains(/Book this room|Take challenge online/)
            .should("exist")
            .should("be.visible")
            .click();

        cy.get(".modal", { timeout: 10000 }).should("be.visible");

        cy.get("input[type='date']")
            .type(today)
            .invoke("val")

        cy.contains("Search available times")
            .should("be.visible")
            .click();

        cy.wait("@validDate", { timeout: 10000 });

        cy.contains("What time?").next("select").find("option").should("have.length", 3);
    });



    it("Searches for invalid date in the booking module and get error feedback", () => {
        cy.intercept("GET", "https://lernia-sjj-assignments.vercel.app/api/booking/available-times?date=2023-01-01&challenge=1", {
            statusCode: 400,
            body: { error: "Invalid date. Must be within next year. Use ?date=2021-05-01 format" },
        }).as("invalidDate");

        cy.contains("See all challenges").click();
        cy.contains(/Book this room|Take challenge online/)
            .should("exist")
            .should("be.visible")
            .click();

        cy.get(".modal", { timeout: 10000 }).should("be.visible");

        cy.get("input[type='date']")
        .type("2023-01-01")
        .invoke("val");

        cy.contains("Search available times").should("be.visible").click();

        cy.wait("@invalidDate", { timeout: 10000 }).then((interception) => {
            assert.isNotNull(interception.response, "API call has data");
            cy.get("p").should("contain.text", "You cannot select a past date. Please choose another date.");
        });
    });
});

