describe("Startpage Tests", () => {
    beforeEach(() => {
      cy.visit("/");
    });
  
    it("Controll that site loads", () => {
      cy.get("h1").should("be.visible");
    });
  
    it("Control there is static text in h1 element", () => {
      cy.get("h1").should("contain.text", "Hacker Escape Rooms"); 
    });
  });
