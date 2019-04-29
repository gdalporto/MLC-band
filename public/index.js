
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
        <h1 class="homepageTitle">Welcome to the MidLife Crisis Band</h1>
        <div> 
            <img src="./media/MLC_Hero_Image.jpg" alt="Picture of the MLC (Midlife Crisis) Band" class = "heroImagePic" >
        </div>
    `;
}

function displayGigs(){
    return `    
    <h2 class="gigsList">Join Us at a Gig:</h2>

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
    </table>
    `;
}



function displayLandingPage(){


    return `
    <div class="landingPageBody">
        <div class="shadingContainer">
            <h1 class="headline landingPageCopy">MLC - The Midlife Crisis</h1>
            <h2 class="subHeadline landingPageCopy">Follow the hottest band in Silicon Valley</h2>
            <div class="signInSignUp">
                <!--
                <div class="signIn">
                    <form class="signInFormJS signInForm" role="form" action="/login.html" method="get">
                        <button type="submit" class="loginStartButtonJS standardButton">Login</button>
                    </form>
                </div>
                -->
                <div class="signUp">
                    <form class="registerFormJS registerForm" role="form" action="/signup.html" method="get">
                        <button type="submit" class="registerStartButtonJS standardButton">Subscribe To Mailing List</button>
                    </form>
                </div>
            </div>
            <!-- <div class="benefits landingPageCopy">
                <div class="benefitsContainer">
                    <ul class="benefitsList">
                        <li class="benefit"><img src="icon-event-white.png" class="icon"><span class="benefitCopy">Upcoming Gigs</span></li>
                        <li class="listItem"><img src="icon-note-white.png" class="icon"><span class="benefitCopy">New Releases</span></li>
                        <li class="listItem"><img src="icon-pic-white.png" class="icon"><span class="benefitCopy">Pics From Performances</span></li>
                    </ul>
                </div>
            </div> -->
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

    $(".headerJS").on("click",".logout" ,function(event) {
        event.preventDefault();
        logoutUser();
    })


};



$(startBand);