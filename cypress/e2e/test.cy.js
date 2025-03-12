describe("Testing the site", () => {
  it("checks if localhost is running", () => {
    cy.visit("http://127.0.0.1:5502/index.html");
  });

  it("finds a h1 element", () => {
    cy.visit("http://127.0.0.1:5502/index.html");
    cy.get("h1").should("have.text", "Hacker Escape Rooms");
  });

  it("finds on site challenges", () => {
    cy.visit("http://127.0.0.1:5502/challenges.html?filter=onsite");
  });

  /* =================VG NIVÅ=================*/

  it("finds an input field", () => {
    cy.visit("http://127.0.0.1:5502/challenges.html?filter=onsite");
    cy.get("button.main__button").click();
    cy.get("input.search-input").click({ force: true }).type("Testar testar!!");
  });

  it("navigates through the page", () => {
    cy.visit("http://127.0.0.1:5502/index.html");
    cy.visit("http://127.0.0.1:5502/challenges.html?filter=online");
    cy.visit("http://127.0.0.1:5502/challenges.html?filter=onsite");
    cy.visit("http://127.0.0.1:5502/index.html");
  });

  it("Gives a error message if using stars incorrect", () => {
    cy.visit("http://127.0.0.1:5502/challenges.html?filter=onsite");
    cy.get("button.main__button").click();
    cy.get(".rating_stars #star1").click();
    cy.get(".rating_stars #star2").click();
    cy.get(".rating_stars #star3").click();
    cy.get(".rating_stars #star6").click();
  });
});
