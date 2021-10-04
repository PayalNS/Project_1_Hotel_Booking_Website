function submitData(){
    window.location.href = "payment.html?adult="+adult+"&name="+name+"&fromDate="+fromDate+"&toDate="+toDate+"&price="+price;
}

function calculateTotal() {
    const fromDate = new Date(document.getElementById("fromDate").value);
    const toDate = new Date(document.getElementById("toDate").value);
    const diffTime = Math.abs(toDate - fromDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    console.log(diffDays + " days");


    var noOfAdults = document.getElementById("adult").value;
    var price = document.getElementById("price");

    if (isNaN(diffDays)) {
        price.value = "Rs. " + 0;
    } else {
        price.value = "Rs. " + noOfAdults * 1000 * diffDays;
    }
}

const params = window.location.href.split('?');
const location_id = params[1].split('=');
console.log(location_id);

const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = false;

xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
		console.log(JSON.parse(this.responseText));
        JSON.parse(this.responseText).data.forEach(element => {

            let hotelDescription = document.getElementById('hotel-description');
            
            let divElement = document.createElement("div");
            divElement.id = 'rating';

            // header element
			let header2Element = document.createElement('h2');
			header2Element.innerHTML= element.name;

            // header element
			let header5Element = document.createElement('h5');
			header5Element.innerHTML= 'RATING';
            header5Element.className = 'heading';

            var ratings = parseInt(element.rating);
            //span element
			

            for (i = 0; i <= ratings-1; i++) {
                let spanElement = document.createElement('span');
			    spanElement.className = 'fa fa-star checked';
                divElement.appendChild(spanElement);
            }

            let headerAmenitiesElement = document.createElement('h5');
			headerAmenitiesElement.innerHTML= 'AMENITIES';
            headerAmenitiesElement.className = 'heading';

            var amenities = element.amenities;
            var ul = document.createElement('ul');
            // ul.setAttribute('style', 'padding: 0; margin: 0;');
            ul.setAttribute('id', 'theList');
        
            for (i = 0; i <= 8; i++) {
                var li = document.createElement('li');
                li.innerHTML = amenities[i].name;
                // li.setAttribute('style', 'display: block;');
                ul.appendChild(li);
            }

            let headerDescriptionElement = document.createElement('h5');
			headerDescriptionElement.innerHTML= 'Description';
            headerDescriptionElement.className = 'heading';

            let pDescriptionElement = document.createElement('p');
			pDescriptionElement.innerHTML= element.description;
            // headerDescriptionElement.className = 'heading';

            hotelDescription.appendChild(header2Element);
            hotelDescription.appendChild(header5Element);
            hotelDescription.appendChild(divElement);
            hotelDescription.appendChild(headerAmenitiesElement);
            hotelDescription.appendChild(ul);
            hotelDescription.appendChild(headerDescriptionElement);
            hotelDescription.appendChild(pDescriptionElement);
        });

	}
});

xhr.open("GET", "https://travel-advisor.p.rapidapi.com/hotels/get-details?location_id="+location_id[1]);
xhr.setRequestHeader("x-rapidapi-host", "travel-advisor.p.rapidapi.com");
xhr.setRequestHeader("x-rapidapi-key", "305a6b78a0msh0813647c73287f8p19ef56jsn9b5d86d72ed4");

xhr.send(data);