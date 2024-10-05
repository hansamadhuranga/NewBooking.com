import HotelDetailPage from "../pageLayer/HotelDetailPage";

class HotelDetailTest{
    constructor(){
        this.HotelDetailPage = new HotelDetailPage();
    }

hotelinfro(){
    this.HotelDetailPage.verifyHotelName(expectedHotelName);
    this.HotelDetailPage.selectRoomByPrice(hotelPrice);
    this.HotelDetailPage.clickReserve();
    this.HotelDetailPage.fillPersonalDetails(firstName, lastName, email);
    this.HotelDetailPage.clickNextFinalDetails();
    this.HotelDetailPage.verifyFinalDetails(firstName, lastName);
    this.HotelDetailPage.verifyCheckInOutDates(checkInDate, checkOutDate);
}






}