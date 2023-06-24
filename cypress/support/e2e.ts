// pages
import './gui_commands'
import './api_commands'

Cypress.on('uncaught:exception', () => {
    return false
  })