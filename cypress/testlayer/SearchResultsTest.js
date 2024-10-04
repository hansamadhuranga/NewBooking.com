import SearchResultsPage from "../pageLayer/SearchResultsPage";

class SearchResultsTest{
    constructor(){
        this.SearchResultsPage = new SearchResultsPage();
    }

    getSecondListedItem(){
        this.SearchResultsPage.clickOnPropertyRating();
        this.SearchResultsPage.sortByLowestPrice();
        // this.SearchResultsPage.getNameOfSecondListedItem();
        // this.SearchResultsPage.getSecondItemDetails();
        this.SearchResultsPage.clickOnSecondItem();
    }
}

export default SearchResultsTest;