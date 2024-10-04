class SearchResultsPage{
    elements = {
        propertyRating:()=>cy.get('[data-filters-item="class:class=5"] > .a937b09340 > .dc5041d860 > .a53cbfa6de > [data-testid="filters-group-label-container"]'),
        sortByOption:()=>cy.get('.cac967781c > .ccb65902b2'),
        lowestPrice:()=>cy.get(':nth-child(3) > .a83ed08757 > .c624d7469d > .dc5041d860 > span'),
        secondListedItem:()=>cy.get(':nth-child(5) > [data-testid="property-card-container"] > .c1edfbabcb > .b0db0e8ada > .f02fdbd759 > :nth-child(1) > .c624d7469d > :nth-child(1) > .d6767e681c > .aab71f8e4e > [data-testid="title-link"] > [data-testid="title"]'),

        searchedList:()=>cy.get('.dcf496a7b9')
    }

    clickOnPropertyRating(){
        //this.elements.propertyRating().check({ force: true });
        this.elements.propertyRating().contains('5 stars').should('exist').should('be.visible').click();
    }

    sortByLowestPrice(){
        this.elements.sortByOption().click();
        this.elements.lowestPrice().click();
    }

    // getNameOfSecondListedItem(){
    //     this.elements.secondListedItem().invoke('text').then((propertyName) => {
    //         cy.log('Property Name:', propertyName.trim());
    //     });
    // }

    getSecondItemDetails(){
        this.elements.searchedList().eq(1).should('be.visible').then(($secondItem) => {
            cy.log('SecondListed Item Name:', $secondItem.text().trim());
        });
    }

    clickOnSecondItem(){
        this.elements.searchedList().eq(1).should('be.visible').click();
    }

}

export default SearchResultsPage;