import { HOST } from "../config";

describe("template spec", () => {
  it("Visit Test", () => {
    cy.visit(HOST);
  });
  it("button Test", () => {
    cy.visit(HOST);
    cy.get("[data-cy=switch-button]").click();
    cy.get("[data-cy=switch-button]").click();
  });
  it("city check", () => {
    cy.visit(HOST);
    cy.get("[data-cy=Text-Input]").click().should("have.text", "Equestria");
  });
  it("city search check", () => {
    cy.visit(HOST);
    cy.get("[data-cy=Text-Input]").type(
      `{selectAll} Minsk {downArrow} {enter}`
    );
  });
});
