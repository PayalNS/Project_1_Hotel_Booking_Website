const params = window.location.href.split('?');
const city = params[1].split('=');

const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = false;

xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
		// console.log(JSON.parse(this.responseText).data); //array
		JSON.parse(this.responseText).data.forEach(element => {
			
			if (element.result_object.category.key == 'hotel') {
				// console.log(element.result_object);  // photo , num_review , address
				let hotelListElement = document.getElementById('list-view');

				// div element - parent
				let divElement = document.createElement("div");
				divElement.className = 'hotel';

				// div element - parent
				let childDivElement = document.createElement("div");
				childDivElement.className = 'hotel-name-rating';

				// image element
				var imgElement = document.createElement("img");
				imgElement.setAttribute("src", element.result_object.photo.images.small.url);
				// imgElement.setAttribute("height", element.result_object.photo.images.small.height);
				// imgElement.setAttribute("width", element.result_object.photo.images.small.width);

				imgElement.setAttribute("height", 220);
				imgElement.setAttribute("width", 220);
				
				// header element
				let headerElement = document.createElement('h3');
				headerElement.innerHTML= element.result_object.name;
	
				//rating element
				let ratingElement = document.createElement('p');
				ratingElement.innerHTML= element.result_object.rating;

				//span element
				let spanElement = document.createElement('span');
				spanElement.className = 'fa fa-star checked';

				// address element
				let addrElement = document.createElement('p');
				addrElement.innerHTML= element.result_object.address;

				ratingElement.appendChild(spanElement);
				childDivElement.appendChild(headerElement);
				childDivElement.appendChild(ratingElement);
				childDivElement.appendChild(addrElement);
				divElement.appendChild(imgElement);
				divElement.appendChild(childDivElement);
				divElement.style.cursor = 'pointer';
				divElement.onclick = function(){  
					// console.log(element.result_object.name+ " : " + element.result_object.location_id); 
					window.location.href = 'detail.html?id='+element.result_object.location_id;
				}
				
				hotelListElement.appendChild(divElement);
			}
		});
	}
});

xhr.open("GET", "https://travel-advisor.p.rapidapi.com/locations/search?query="+city[1]);
xhr.setRequestHeader("x-rapidapi-host", "travel-advisor.p.rapidapi.com");
xhr.setRequestHeader("x-rapidapi-key", "305a6b78a0msh0813647c73287f8p19ef56jsn9b5d86d72ed4");

xhr.send(data);







