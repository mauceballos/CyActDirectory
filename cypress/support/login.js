export const signingFirstStepSelector = '[data-viewid="1"]';
export const emailSelector = '[data-test=email][data-report-event="Signin_Email_Phone_Skype"]';
export const nextButtonSelector = 'input[type="submit"][data-report-event="Signin_Submit"]'
export const signingSecondStepSelector = '[data-viewid="2"]';
export const passwordSelector = 'input[type="password"]';
export const signInButtonSelector = 'input[type="submit"][data-report-event="Signin_Submit"]';
export const imgHomeSelector = 'app-login img';
export const initButtonSelector = 'app-login button';
export const initButtonSpanSelector = 'app-login button span';


export const loginViaAAD = (username, password) => {
  // Login to your AAD tenant.
  cy.origin(
    'login.microsoftonline.com',
    {
      args: {
        username,
      },
    },
    ({ username }) => {
      cy.get('input[type="email"]').type(username, {
        log: false,
      })
      cy.get('input[type="submit"]').click()
    }
  )

  // depending on the user and how they are registered with Microsoft, the origin may go to live.com
  cy.origin(
    'login.microsoftonline.com',
    {
      args: {
        password,
      },
    },
    ({ password }) => {
      cy.get('input[type="password"]').type(password, {
        log: false,
      })
      cy.get('input[type="submit"]').click()
      cy.get('#idBtn_Back').click()
    }
  )

  // Ensure Microsoft has redirected us back to the sample app with our logged in user.
  cy.url().should('contain', Cypress.env('alterUrl'))
  cy.get('mat-toolbar .welcome').should(
    'contain',
    `Bem vindo`
  )
}

export const loginToAAD = (username, password) => {
  cy.get(imgHomeSelector).should('be.visible');
  cy.get(initButtonSpanSelector).should('be.visible');
  cy.get(initButtonSelector).should('be.visible');
  cy.get(initButtonSelector).click();
  loginViaAAD(username, password)
}