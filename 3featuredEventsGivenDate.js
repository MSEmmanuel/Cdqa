
//TestCase1 : Select date (Nov 20 2021) from calendar widget >> Click on featured events 
//Issue Observed: Data parameter is not passed through featured events 
describe('featuredEventsGivenDate', function()  {
    before(function()  {
        // runs once before all tests in the block
        cy.fixture('example').then(function(input)
        {
    this.input=input
        })
      })
    
      it('TestCase1', function()  {
        cy.visit("https://damian-events.coursedog.com/")
        cy.contains(this.input.year).click({ multiple: true })
        cy.contains(this.input.month).click({ multiple: true })  
        cy.wait(2000)
        cy.get('div span:nth-child(1):visible').eq(this.input.date).click({ multiple: true })
        cy.wait(2000)
        cy.get('[href="/featured"]').click({ multiple: true }) 
        //To confirm that no events are present
        cy.get('h1').should('contain','There are no upcoming featured events')
        cy.get('section div a:nth-child(1)').should('have.length', 0)
    })
})
//TestCase2 : Select date (Sep 2 2021) from calendar widget >> Click on featured events 
//Issue Observed: Data parameter is not passed through featured events 
describe('featuredEventsGivenDate', function()  {
    before(function()  {
        // runs once before all tests in the block
        cy.fixture('example').then(function(input)
        {
    this.input=input
        })
      })
    
      it('TestCase2', function()  {
        cy.visit("https://damian-events.coursedog.com/")
        cy.contains(this.input.year2).click({ multiple: true })
        cy.contains(this.input.month2).click({ multiple: true })  
        cy.wait(2000)
        cy.get('div span:nth-child(1):visible').eq(this.input.date2).click({ multiple: true })
        cy.wait(2000)
        cy.get('[href="/featured"]').click({ multiple: true }) 
        cy.get('h1').should('contain','There are no upcoming featured events')
        cy.get('section div a:nth-child(1)').should('have.length', 3)
       
    })
})