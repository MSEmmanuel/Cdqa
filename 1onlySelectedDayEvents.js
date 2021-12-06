//**Please note that date in selectedDayEventsOnly is selected from calendar widget, 
//not from today's events or featured events
//TestCase1 covers the scenario when there are no events for the selected date (Nov 20 2021)
describe('selectedDayEventsOnly', function()  {
    
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
        cy.get('body h1').should('contain',"No events found")
      })
 })
     
 //TestCase2 covers the scenario where there are events present for selected date (Nov 20 2021)
     //This test verifies if the displayed events are only for selected date
  
describe('selectedDayEventsOnly', function()  {
    
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
        cy.get('p span:nth-child(2)').should('contain',this.input.month+" "+this.input.date+" "+this.input.year)
        cy.get('section div a:nth-child(1)').should('have.length', 1)
      })
  })

  
//TestCase3 covers the scenario when there are no events for the selected date (Sep 2 2021)
describe('selectedDayEventsOnly', function()  {
    
    before(function()  {
        // runs once before all tests in the block
        cy.fixture('example').then(function(input)
        {
    this.input=input
        })
      })
     
    it('TestCase3', function()  {
        cy.visit("https://damian-events.coursedog.com/")
        cy.contains(this.input.year2).click({ multiple: true })
        cy.contains(this.input.month2).click({ multiple: true })  
        cy.wait(2000)
        cy.get('div span:nth-child(1):visible').eq(this.input.date2).click({ multiple: true })
        cy.wait(2000)
        cy.get('body h1').should('contain',"No events found")
      })
 })
     
 //TestCase4 covers the scenario where there are events present for selected date (Sep 2 2021))
     //This test verifies if the displayed events are only for selected date
  
describe('selectedDayEventsOnly', function()  {
    
    before(function()  {
        // runs once before all tests in the block
        cy.fixture('example').then(function(input)
        {
    this.input=input
        })
      })
    
      it('TestCase4', function()  {
        cy.visit("https://damian-events.coursedog.com/")
        cy.contains(this.input.year2).click({ multiple: true })
        cy.contains(this.input.month2).click({ multiple: true })  
        cy.wait(2000)
        cy.get('div span:nth-child(1):visible').eq(this.input.date2).click({ multiple: true })
        cy.wait(2000)
        cy.get('section div a:nth-child(1)').should('have.length', 0)
        cy.get('p span:nth-child(2)').should('contain',this.input.month2+" "+this.input.date2+" "+this.input.year2)
        
    })
  })