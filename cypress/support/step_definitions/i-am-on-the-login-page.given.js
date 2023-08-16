import { Then, When } from '@badeball/cypress-cucumber-preprocessor';
import { Given } from 'cypress-cucumber-preprocessor/steps';

Given('I am on the login page', () => {
    cy.visit(Cypress.env('alterUrl'));
    cy.viewport('samsung-s10')
    });

When('I enter valid {credentials}', (credentials) => {
    loginToAAD(credentials[0], credentials[1])
})

Then('I should be logged in', () => {
    cy.get('mat-toolbar .welcome').should(
        'contain',
        `${Cypress.env('aad_name')}`
    )
})