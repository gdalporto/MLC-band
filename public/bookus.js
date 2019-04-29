

function bookUs(){
    return `
        <div> 
            <h2>Need Talent? Let's Talk</h2>
            <p>contact@mlc.band</p>
            
        </div>
    `;
}








function startPicsPage(){

    checkAuthStatus(status, function (stat) {
        $(".headerJS").html(displayHeader(stat));
        $(".imagesJS").html(bookUs());
        $(".logout").on("click", function(event) {
            event.preventDefault();
            logoutUser();
        })

    });
}

$(startPicsPage);