describe("Escape Room Site - Challenges Tests", () => {
    beforeEach(() => {
        cy.visit("/");
    });

    it("Navigate to challenges page with button 'See all challenges'", () => {
        cy.contains("See all challenges").click();
        cy.url().should("include", "/challenges");
    });

    it("Search for specific element in challenges filter", () => {
        cy.contains("See all challenges").click();
        cy.contains("Filter Challenges").click();
        cy.get("h5").should("contain.text", "By rating");
    });

    it("Navigate to 'Play Online'", () => {
        cy.contains("Play online").click();
        cy.url().should("include", "/challenges");
    });

    it("Navigate to 'Play On-site'", () => {
        cy.contains("Play on-site").click();
        cy.url().should("include", "/challenges");
    });
});
