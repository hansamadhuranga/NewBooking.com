import HomePage from "../pageLayer/homePage";

class Hometest{
    constructor(){
        this.HomePage = new HomePage();
    }


    closePopUp(){
        this.HomePage.clickOnPopUpCloseBtn();
    }

    selectLanguageAndCurrecy(){
        this.HomePage.clickOnLanguageIcon();
        this.HomePage.selectLanguageAsUK();
        this.HomePage.clickOnCurrencyIcon();
        this.HomePage.selectCurrencyAsAUD();
    }

    searchBookingOptions(loacation){
        this.HomePage.clickOnStaysTab();
        this.HomePage.enterLocation(location);
        this.HomePage.selectCheckInDate();
        this.HomePage.selectCheckOutDate();
        this.HomePage.selectHeadCount();
        this.HomePage.clickOnSearchBtn();
        this.HomePage.verifySearchLocationIsCorrect();
    }
}

export default Hometest;