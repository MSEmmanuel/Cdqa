
//TestCase1 : Select date (Nov 20 2021) from calendar widget >> Input in the search tab >>Validate the text 
//verify the count 

describe('searchInputValidation', function()  {
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
        //Pick data from fixtures for search input
        cy.get('.search__input').type(this.input.searchInput)
        cy.get('.search__button > .svg-inline--fa').click({ multiple: true })
        //validation if the output event contains search term
        cy.get('section div a:nth-child(1)').should('contain',this.input.searchInput)
        //count of events when searched with search term
        cy.get('section div a:nth-child(1)').should('have.length', 1)
    })
})
//TestCase2 : Select date (Sep 2 2021) from calendar widget >> Click on Today's events 

describe('searchInputValidation', function()  {
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
        cy.get('.search__input').type(this.input.searchInput)
        cy.get('.search__button > .svg-inline--fa').click({ multiple: true })
        cy.get('section div a:nth-child(1)').should('contain',this.input.searchInput)
       
    })
})