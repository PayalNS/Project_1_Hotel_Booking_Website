const params = window.location.href.split('?');
const details = params[1].split('&');
let toDate=null;
let fromDate=null;


for(i=0; i<=details.length-1;i++) {
    var val = details[i].split('=');
    if (val[0] == 'adult') {
        document.getElementById('adult').innerHTML = val[1];
    } else if (val[0] == 'name') {
        document.getElementById('name').innerHTML = val[1];
    }
    else if (val[0] == 'fromDate') {
        document.getElementById('fromDate').innerHTML = val[1];
        fromDate = val[1];
    }
    else if (val[0] == 'toDate') {
        document.getElementById('toDate').innerHTML = val[1];
        toDate = val[1];
    }
    else if (val[0] == 'price') {
        document.getElementById('price').innerHTML = val[1];
    }
}
const diffTime = Math.abs(toDate - fromDate);
const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

document.getElementById('nights').innerHTML = diffDays;


function payNowEnable() {
    document.getElementById("payNow").disabled = false;
}

function payNowDisable() {
    document.getElementById("payNow").disabled = true;
}

function payNow(){
    alert("Hi your booking is successfull !!")
}