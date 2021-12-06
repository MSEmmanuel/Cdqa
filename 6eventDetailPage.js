
//TestCase1 : Select date (Nov 20 2021) from calendar >> Select an event >> Click event and verify details page
//TestCase 1 covers : "Event Type","Contacts", "Organization"
//Issue: From the user story, field header is Organization. But the displayed value is "Organized by"

describe('eventDetailPage', function()  {
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
        cy.get('.search__button > .svg-inline--fa').click({ multiple: true })
        cy.get('section div a:nth-child(1)').should('contain',this.input.selectValue)
        cy.get('section div a:nth-child(1)').contains(this.input.eventName).click({ multiple: true })
        cy.wait(2000)
        this.input.fieldHeader.forEach(function(element) {
            cy.get('article div label').should('contain',element)  })
    })
})


//TestCase2 : Select date (Nov 20 2021) from calendar >> Select an event >> Click event and verify details page
//TestCase 2 covers : "Add to calendar","Add to Google Calendar"
//Works as expected

describe('eventDetailPage', function()  {
    before(function()  {
        // runs once before all tests in the block
        cy.fixture('example').then(function(input)
        {
    this.input=input
        })
      })
    
      it('TestCase2', function()  {
        cy.visit("https://damian-events.coursedog.com/")
        cy.contains(this.input.year).click({ multiple: true })
        cy.contains(this.input.month).click({ multiple: true })  
        cy.wait(2000)
        cy.get('div span:nth-child(1):visible').eq(this.input.date).click({ multiple: true })
        cy.wait(2000)
        cy.get('.search__button > .svg-inline--fa').click({ multiple: true })
        cy.get('section div a:nth-child(1)').should('contain',this.input.selectValue)
        cy.get('section div a:nth-child(1)').contains(this.input.eventName).click({ multiple: true })
        cy.wait(2000)
        this.input.fieldHeader1.forEach(function(element) {
            cy.get('article div button').should('contain',element)  })
    })
})

//TestCase3 : Select date (Nov 20 2021) from calendar >> Select an event >> Click event and verify details page
//TestCase 3 covers : "Event Description"
//Works as expected

describe('eventDetailPage', function()  {
    before(function()  {
        // runs once before all tests in the block
        cy.fixture('example').then(function(input)
        {
    this.input=input
        })
      })
    
      it('TestCase3', function()  {
        cy.visit("https://damian-events.coursedog.com/")
        cy.contains(this.input.year).click({ multiple: true })
        cy.contains(this.input.month).click({ multiple: true })  
        cy.wait(2000)
        cy.get('div span:nth-child(1):visible').eq(this.input.date).click({ multiple: true })
        cy.wait(2000)
        cy.get('.search__button > .svg-inline--fa').click({ multiple: true })
        cy.get('section div a:nth-child(1)').should('contain',this.input.selectValue)
        cy.get('section div a:nth-child(1)').contains(this.input.eventName).click({ multiple: true })
        cy.wait(2000)
        this.input.fieldHeader2.forEach(function(element) {
            cy.get('h3').should('contain',element)  })
    })
})
