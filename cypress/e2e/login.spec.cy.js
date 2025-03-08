import userData from "../fixtures/User/userData.json"

describe('Orange HRM Tests', () => {

  const selectorList = {
    usernameField:"[name='username']",
    passowrdField:"[name='password']",
    loginButton:"[type='submit']",
    sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
    dashboardGrid: ".orangehrm-dashboard-grid",
    wrongCredencialAlert: "[role='alert']"
  }

  it('Login - Sucess', () => {
    cy.visit('/auth/login')
    cy.get(selectorList.usernameField).type(userData.userSucess.userName)
    cy.get(selectorList.passowrdField).type(userData.userSucess.password)
    cy.get(selectorList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorList.dashboardGrid)
  })
  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorList.usernameField).type(userData.userFail.userName)
    cy.get(selectorList.passowrdField).type(userData.userFail.password)
    cy.get(selectorList.loginButton).click()
    cy.get(selectorList.wrongCredencialAlert)
  })
})
