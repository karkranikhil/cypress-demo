describe('My First Test', function() {
  it('Select product on JB hifi and checkout', function() {
    // set up view port
    cy.viewport(1440,1200)
    // Visit target URL
    cy.visit('https://www.jbhifi.com.au/')
    // hover over the top menu
    cy.get('#top-menu > :nth-child(2) > :nth-child(1)').trigger('mouseover')
    // select Apple MacBooks from top navbar
    cy.get('a[data-nav-title="Apple MacBooks "]').click()
    // filter by computer type
    cy.get('#collection-search-facet-0 > :nth-child(1) > .ais-root > .ais-body > .ais-refinement-list--list > :nth-child(1) > div > .ais-facet--label > input').click()
    // filter by computer price 
    cy.get(':nth-child(7) > .ais-price-ranges--link > div > .ais-facet--label1').click()
    // add to cart the mackbook
    cy.get(':nth-child(1) > .ais-hit > .ais-hit--cart > .ais-hit--cart-button > svg').click()
    // check the count of item added
    cy.get('#cart-count').contains('1')
    // go to my cart
    cy.get('#cart-count').click()
    // wait for 1000ms to open modal
    cy.wait(1000)
    // check cart modal is open
    cy.get('#mini-cart').and('be.visible') 
    // click on view cart
    cy.scrollTo('top')
    cy.wait(1000) 
    // click on view cart button
    cy.get('#collect-checkout > span').click() 
    // Finally check you have proceed to checkout button
    cy.get('.checkout-btn > .btn').should(($btn) => {
        expect($btn).to.contain('Proceed to Checkout')
    })
  })
})