function getLoggdIn() {
  
    alert("Successfully loggedin");
    
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    document.getElementById('login').style.display = 'none';
    document.getElementById('logout').style.display = 'block';
}

function getLoggedOut() {
    console.log("in getLoggedOut method");
    document.getElementById('login').style.display = 'block';
    document.getElementById('logout').style.display = 'none';
    localStorage.clear();
}