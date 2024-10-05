class HotelDetailPage {

    elements = {
        hotelNameVerify:()=>cy.get('h2.hp__hotel-name'),
    //    roomSelectPrice:()=>cy.get('.ffd93a9ecb > .abcc616ec7 > .a83ed08757'),
        setReservation:()=>cy.get('button[type="submit"]'),
        setFName:()=>cy.get('input#firstname'),
        setLName:()=>cy.get('input#lastname'),
        setEMail:()=>cy.get('input#email'),
        clickNext:()=>cy.get('button[name="book"]'),
        finalDetails:()=>cy.get('div.final-details'),
        finalFNAme:()=>cy.get('input#firstname'),
        finalLName:()=>cy.get('input#lastname'),
        checkInDate:()=>cy.get('input[name="checkin"]'),
        checkOutDate:()=>cy.get('input[name="checkout"]'),
       
    }


    verifyHotelName(expectedHotelName) {
      this.elements.hotelNameVerify().should('contain', expectedHotelName.trim());
    }
  
    selectRoomByPrice(hotelPrice) {
      cy.contains(hotelPrice.trim()).scrollIntoView().click();
    }
  
    clickReserve() {
    this.elements.setReservation().click();
    }
  
    fillPersonalDetails(firstName, lastName, email) {
        this.elements.setFName().type(firstName);
        this.elements.setLName().type(lastName);
        this.elements.setEMail().type(email);
    }
  
    clickNextFinalDetails() {
      this.elements.clickNext().click();  
    }
  
    verifyFinalDetails(firstName, lastName) {
        this.elements.finalDetails.within(() => {
        this.elements.finalFNAme.should('have.value', firstName);
        this.elements.finalLName.should('have.value', lastName);
      });
    }
  
    verifyCheckInOutDates(checkInDate, checkOutDate) {
        this.elements.checkInDate.should('have.value', checkInDate);
        this.elements.checkOutDate.should('have.value', checkOutDate);
    }
  }
  
  export default HotelDetailPage;