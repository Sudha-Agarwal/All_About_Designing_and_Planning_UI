import React from 'react'
import ExampleComponent from './ExampleComponent'

describe('<ExampleComponent />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<ExampleComponent />)
  })

  it('should have title React', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<ExampleComponent />)
  })
})