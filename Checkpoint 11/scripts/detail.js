function calculateTotal() {
    const fromDate = new Date(document.getElementById("fromDate").value);
    const toDate = new Date(document.getElementById("toDate").value);
    const diffTime = Math.abs(toDate - fromDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    // console.log(diffDays + " days");


    var noOfAdults = document.getElementById("adult").value;
    var price = document.getElementById("price");

    if (isNaN(diffDays)) {
        price.value = 'Rs. ' + 0;
    } else {
        price.value = 'Rs. ' + noOfAdults * 1000 * diffDays;
    }
}


$(function date() {
    var dtToday = new Date();

    var month = dtToday.getMonth() + 1;
    var day = dtToday.getDate();
    var year = dtToday.getFullYear();
    if(month < 10)
        month= '0' + month.toString();
    if(day < 10)
        day= '0' + day.toString();

    
    var maxDate = dtToday.toISOString().substr(0,10);


    $('#txtDate').attr('min' , maxDate);
});