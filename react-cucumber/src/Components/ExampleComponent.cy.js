import React from 'react'
import ExampleComponent from './ExampleComponent'

describe('<ExampleComponent />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<ExampleComponent />)
  })
});

describe('genre shoulb be Action', ()=>{
  it()
})