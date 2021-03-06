function displayHeader(status){
    
    let button1;
    let button1URL;
    let button2;
    let button2URL;

    
    if(status == "authenticated"){
        button1 = "Account";
        button1URL = "/account.html";
        button2 = "Logout";
        button2URL = "/";
        return `
        <nav class="topnav" id="myTopnav" role = "navigation">
            <a class='logo' href="/"><img border="0" alt="MLC Logo" src="/media/Color-logo-with-background.png" width="201" height="85"></a>
            <a href="/pics.html">Pics</a>
            <a href="/videos.html">Videos</a>
            <a href="/setlist.html">Songs</a>
            <a href="/bookus.html">Contact</a>
            <!-- <div class="topnav-right"> -->
                <a href="${button1URL}">${button1}</a>
                <a href="${button2URL}" class="${button2}">${button2}</a>
            <!-- </div> -->
            <a href="javascript:void(0);" class="icon" onclick="myFunction()">
                <img src="/media/hamburger.png" width="30" height="30">
            </a>        
        </nav>       
        `    
    }

    else {
        // not authenticated 
        button1 = "Log In";
        button1URL = "/login.html";
        button2 = "Sign Up";
        button2URL = "/signup.html";
        return `

        <nav class="topnav" id="myTopnav" role = "navigation">
            <a class='logo' href="/"><img border="0" alt="MLC Logo" src="/media/Color-logo-with-background.png" width="201" height="85"></a>
            <a href="/pics.html">Pics</a>
            <a style="vertical-align: top;"  href="/videos.html">Videos</a>
            <a href="/setlist.html">Songs</a>
            <a href="/bookus.html">Contact</a>
            <!-- <div class="topnav-right"> -->
                <a href="${button1URL}">${button1}</a>
                <a href="${button2URL}" class="${button2}">${button2}</a>
            <!-- </div> -->
            <a href="javascript:void(0);" class="icon" onclick="myFunction()">
                <img src="/media/hamburger.png" width="30" height="30">
            </a>        

        </nav>                
        `
        };

}

function loginUser(userData) {
    let postUrl="/auth/login/";
    fetch(postUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userData)
    })
    .then(response => {
        if(response.status == 401) {
            unauthenticatedMessage();
        }
        return response.json();
    })
    .then(jsonData =>{
        window.localStorage.setItem("authorizationToken", jsonData.authToken);
        window.location.replace("/");    
    })
    .catch(err => {
        console.error(err);
        $(".subscribeJS").html("Error - API failed");    
    })
};

function logoutUser() {
    window.localStorage.removeItem("authorizationToken");
    window.location.replace("/index.html");    
}
  

function checkAuthStatus(stat, callback = ()=>{}){
    if(!(window.localStorage.getItem("authorizationToken"))) {
        stat = "unauthenticated";
        callback(stat); 
        return Promise.resolve(stat);
    }
    else {
        let getUrl = "/authcheck/";
        return fetch(getUrl, {
              method: "GET", // *GET, POST, PUT, DELETE, etc.
              headers: {
                  authorization: `Bearer ${window.localStorage.getItem("authorizationToken")}`,
              }
        })
        .then(response => {
            // parses response to JSON
            return response.json();
        }) 
        .then(jsonData =>{
            stat=jsonData.status;
            callback(stat);
            return stat;
        })
        .catch(err => {
            console.error(err);
            stat = "unauthenticated";
            callback(stat);
            return stat;

        })
    }
}

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

function checkValidations(isValidEmail, userData, callback) {
    var message={
        status:"",
        username:"",
        password:"",
        firstName:"",
        lastName:""
    };
    const passwordlength = userData.password.length;
    console.log("password length",passwordlength);
    console.log("userData",userData);
    // check password
    if(isValidEmail == false){
        message.username = "Error: username must be a valid email address";
    }
    if(passwordlength < 8 || passwordlength > 72 ) {
        message.password = "Error: Password must be between 8 and 72 characters";
    }
    if(userData.firstName === "") {
        message.firstName = "Error: firstName cannot be blank";
    }
    if(userData.lastName === ""){
        message.lastName = "Error: lastName cannot be blank";
    }
    if(message.username=="" && message.password=="" && message.firstName == "" & message.lastName == "" ){
        message.status="valid"
    }
    else {
        message.status="Invalid Form Inputs"
    }

    console.log(message);

    callback(message);

}

