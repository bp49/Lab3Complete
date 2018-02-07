
var prices = [[1, 2.5, 4], [2, 3, 3.5], [6, 8, 10], [5, 9, 12]] 

var AgeChecker = function () {
    var Drink = document.querySelector("#DrinkType").value;
    var AgeVerify = document.querySelector("#AgeVerificationBox");
    if (Drink == "Beer" || Drink == "Wine")
        AgeVerify.hidden = false
    else
        AgeVerify.hidden = true

}

var PrintReceipt = function () {
    var Cname = document.querySelector("#CustomerName").value;
    var Drink = document.querySelector("#DrinkType").selectedIndex;
    var DrinkValue = document.querySelector("#DrinkType").value;
    var DrinkSize = document.querySelector("#DrinkSize input:checked").value;
    var Subtotal = prices[Drink][DrinkSize];
    var QuantityNum = document.querySelector("#QuantityNumber").value;
    var Total = Subtotal * Number(QuantityNum);
    var ReceiptDisplay = document.querySelector("#MainReceipt");
    //var ValidYear = moment().year(1997);
    var CustomerBirthdate = document.querySelector("#AgeVerificationBox").value;
    var CurrentDate = moment().format("MMM D, YYYY");
    var ValidAge = 7665;
    var AgeVerifier = moment(CurrentDate).subtract(ValidAge, "Days");
    var AgeResult = moment(AgeVerifier).format("MMM D, YYYY");
    var AgeVerification = moment(CustomerBirthdate).isSameOrBefore(AgeVerifier);
    //document.querySelector("#test2").innerHTML = moment(AgeVerify).format("MMM D, YYYY");
    var InvalidAge = document.querySelector("#InvalidAge");
    if ( DrinkValue =="Beer" && AgeVerification== false || DrinkValue == "Wine" && AgeVerification == false) {
        document.querySelector("#InvalidDateEntry").innerHTML = AgeResult
        InvalidAge.hidden = false
    }
    else {
        document.querySelector("#ReceiptResult").innerHTML = Cname + "\u00A0" + "purchased" + "\u00A0" + QuantityNum + "\u00A0" + DrinkValue + "." + "\u00A0" + "Your Total:" + "\u00A0" + "$" + Total
        ReceiptDisplay.hidden = false
}
}

window.onload = function ()  {
    document.querySelector("#SubmitButton").onclick = PrintReceipt;
    document.querySelector("#DrinkType").onclick = AgeChecker;
    
}