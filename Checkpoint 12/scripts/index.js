function toggleCities() {
    
    var moreCities = document.getElementsByClassName("View-city");
    var btnText = document.getElementById("view-more");
  
    if (moreCities[0].style.display === 'none') {
      btnText.innerHTML = "View Less";
      moreCities[0].style.display = 'block';
    } else {
     btnText.innerHTML = "View More";
     moreCities[0].style.display = 'none';
    }
  }