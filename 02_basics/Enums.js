// restricts choice with the values
var SeatChoice;
(function (SeatChoice) {
    SeatChoice["AISLE"] = "aisle";
    SeatChoice[SeatChoice["MIDDLE"] = 3] = "MIDDLE";
    SeatChoice[SeatChoice["WINDOW"] = 4] = "WINDOW";
    SeatChoice[SeatChoice["FOURTH"] = 5] = "FOURTH";
})(SeatChoice || (SeatChoice = {}));
// if strings in enum then provide values for next 
// Seatchoice.___ tap in seatChoice
var hcSeat = SeatChoice.AISLE;
var HcSeat = SeatChoice.AISLE;
