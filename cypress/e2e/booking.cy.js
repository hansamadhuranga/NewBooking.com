import Hometest from "../testlayer/HomeTest";
import SearchResultsTest from "../testlayer/SearchResultsTest";

const HOME_TEST = new Hometest();
const SEARCH_RESULTS_TEST = new SearchResultsTest();

describe('template spec', () => {

  let userdata;

  before( () => {
    cy.fixture("DataProvider.json").then( (data) =>{
      userdata = data;
      cy.visit('/');gfg
    })
  })

  it('TestSuite', () => {
    HOME_TEST.closePopUp();
    HOME_TEST.selectLanguageAndCurrecy();
    HOME_TEST.searchBookingOptions(userdata.location);
    SEARCH_RESULTS_TEST.getSecondListedItem();
  })
})