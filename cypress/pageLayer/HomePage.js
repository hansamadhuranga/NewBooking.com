class HomePage{
    elements = {
        popupCloseBtn:()=>cy.get('.ffd93a9ecb > .abcc616ec7 > .a83ed08757'),
        languageIcon:()=>cy.get('[data-testid="header-language-picker-trigger"] > .e4adce92df > .c82435a4b8 > .e5a3812a75 > .e3fa9175ee'),
        languageUK:()=>cy.get('[data-testid="Suggested for you"] > .Picker_selection-list > .a0e60936ad > :nth-child(1) > :nth-child(1) > [data-testid="selection-item"] > .c624d7469d > .dc5041d860 > .Picker_selection-text'),
        currencyIcon:()=>cy.get('[data-testid="header-currency-picker-trigger"] > .e4adce92df'),
        currencyAUD:()=>cy.get('[data-testid="Suggested for you"] > .Picker_selection-list > .a0e60936ad > :nth-child(1) > :nth-child(3) > [data-testid="selection-item"] > .c624d7469d > .dc5041d860'),
        staysTab:()=>cy.get('#accommodations'),
        loacationTxtField:()=>cy.get('#\\:rh\\:'),
        kandy:()=>cy.get('#autocomplete-result-1 > .d7430561e2 > [data-testid="autocomplete-result"] > .ce5ee7d913 > .a3332d346a'),
        checkInDatebtn:()=>cy.get('[data-testid="date-display-field-start"] > .a8887b152e'),
        actualCheckinDate:()=>cy.get(':nth-child(1) > .eb03f3f27f > tbody > :nth-child(1) > :nth-child(7) > .cf06f772fa'),
        checkOutDateBtn:()=>cy.get('[data-testid="date-display-field-end"] > .a8887b152e'),
        actualCheckoutDate:()=>cy.get(':nth-child(1) > .eb03f3f27f > tbody > :nth-child(2) > :nth-child(2) > .cf06f772fa'),
        headCountField:()=>cy.get('[data-testid="occupancy-config"] > .a8887b152e'),
        adultCount:()=>cy.get(':nth-child(1) > .bfb38641b0 > .e91c91fa93'),
        doneBtn:()=>cy.get('[data-testid="occupancy-popup"] > .bf0537ecb5'),
        searchBtn:()=>cy.get('.d12ff5f5bf > .a83ed08757'),
        verifySearchLocation:()=>cy.get('.efdb2b543b > .f6431b446c')
    }

    clickOnPopUpCloseBtn(){
        this.elements.popupCloseBtn().should('be.visible').click();
    }

    clickOnLanguageIcon(){
        this.elements.languageIcon().click();
    }

    selectLanguageAsUK(){
        this.elements.languageUK().click();
    }

    clickOnCurrencyIcon(){
        cy.wait(5000);
        this.elements.currencyIcon().click();
    }

    selectCurrencyAsAUD(){
        this.elements.currencyAUD().click();
    }

    clickOnStaysTab(){
        this.elements.staysTab().click();
    }

    enterLocation(location){
        // this.elements.loacationTxtField().should('be.visible').clear();
        // this.elements.loacationTxtField().type(`${location}{enter}`);
        this.elements.loacationTxtField().click();
        this.elements.kandy().should('be.visible').click();
    }

    selectCheckInDate(){
        // this.elements.checkInDatebtn().click();
        this.elements.actualCheckinDate().should('be.visible').click();
    }

    selectCheckOutDate(){
        this.elements.actualCheckoutDate().should('be.visible').click();
    }

    selectHeadCount(){
        this.elements.headCountField().should('be.visible').click();
        this.elements.adultCount().should('be.visible').click();
        // this.elements.doneBtn().should('be.visible').click();
    }

    clickOnSearchBtn(){
        this.elements.searchBtn().should('be.visible').click();
    }

    verifySearchLocationIsCorrect(){
        this.elements.verifySearchLocation().should('include.text', 'Kandy');
    }

    
}

export default HomePage;