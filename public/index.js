
function displayHooks(){

    return `
    <div class="heroImageJS heroImage">
    </div>
    <div class="newGigsJS newGigs">
    </div>
    <div class="">
    </div>
    `;


}



function displayHero(){
    return `
        <div> 
            <img src="./media/MLC_Hero_Image.jpg" alt="Picture of the MLC (Midlife Crisis) Band" class = "heroImagePic" >
        </div>
    `;
}

function displayGigs(){
    return `    
    <h2 class="gigsList">See Us Live</h2>

    <table style="width:100%">
        <tr>
            <th>Date</th>
            <th>Venue</th> 
            <th>Address</th>
        </tr>
        <tr>
            <td class="dateField">March 1, 2019</td>
            <td class="venueField">Behans Irish Bar</td> 
            <td class="addressField">1327 Broaway, Burlingame CA 94010</td>
        </tr>
        <tr>
            <td class="dateField">June 7, 2019</td>
            <td class="venueField">Bobby D's</td> 
            <td class="addressField">700 Winslow St, Redwood City, CA 94063</td>
        </tr>
        <tr>
            <td class="dateField">September 6, 2019</td>
            <td class="venueField">The Vinyl Room</td> 
            <td class="addressField">221 Park Rd, Burlingame, CA 94010</td>
        </tr>
    </table>
    `;
}



function displayLandingPage(){


    return `
    <div class="landingPageBody">
    <img class="heroImage" src="./media/MLC_Hero_Image.jpg" >
    <div class="headline">
        <h1 class="landingPageCopy">MLC - The Midlife Crisis</h1>
        <h2 class="landingPageCopy">Next Gig: June 7 @ Bobby D's</h2>
    </div>
        <div class="signInSignUp">
            <div class="signUp">
                <form class="registerFormJS registerForm" role="form" action="/signup.html" method="get">
                    <button type="submit" class="registerStartButtonJS standardButton">Subscribe To Mailing List</button>
                </form>
            </div>
        </div>
    </div>
    <div class='newGigsJS'>
    </div>

    <br>        
    `;
}



function startBand(){


    let status = "not yet set";

    checkAuthStatus(status)
        .then(function (stat) {

            // check authentication status.
            if(stat !== "authenticated") {
                // if not logged in, then display a subscribe button below upcoming concerts
                $(".headerJS").html(displayHeader(stat));
                $(".mainJS").html(displayLandingPage());
                $(".newGigsJS").html(displayGigs());        
                
            }  
            // If logged in do not display
        
            else if((stat)== "authenticated")
                {
                    $(".headerJS").html(displayHeader(stat));
                    $(".mainJS").html(displayHooks());
                    $(".heroImageJS").html(displayHero());
                    $(".newGigsJS").html(displayGigs());        
                };

        })

    $(".headerJS").on("click",".Logout" ,function(event) {
        event.preventDefault();
        logoutUser();
    })


};



$(startBand);