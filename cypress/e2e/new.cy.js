import { loginToAAD } from '../support/login'


describe('Azure Active Directory Authentication', () => {
    before(() => {
        cy.visit(Cypress.env('alterUrl'));
        cy.viewport('samsung-s10')
    })

    beforeEach(() => {
        loginToAAD(Cypress.env('aad_username'), Cypress.env('aad_password'), Cypress.env('aad_name'))
    })

    it('verifies the user logged in has the correct name', () => {
        cy.get('mat-toolbar .welcome').should(
            'contain',
            `${Cypress.env('aad_name')}`
        )
    })

    it('verifies the user logged in has the correct preferred elements', () => {
        cy.get('mat-icon').should('be.visible')
        cy.get('app-filter-access .label').should('be.visible')
        cy.get('app-filter-access .label').should('contain', 'Recomendação por Cliente')
        cy.get('app-filter-access button').should('be.visible')
        cy.get('.searchbox input').should('be.visible')
        cy.get('app-client-item').should('be.visible')
    })
})