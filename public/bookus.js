

function bookUs(){
    return `
        <div class="bookUs"> 
            <h2>Need Live Music? Let's Talk</h2>
            <p>What we do:
                <ul>
                    <li>Bars</li>
                    <li>Charities</li>
                    <li>Weddings</li>
                    <li>Schools</li>
                    <li>Private Parties</li>
                    <li>Other Custom Engagements</li>
                </ul>
            
            <p>Contact us at:  contact@mlc.band</p>
            
        </div>
    `;
}








function startPicsPage(){

    checkAuthStatus(status, function (stat) {
        $(".headerJS").html(displayHeader(stat));
        $(".mainjs").html(bookUs());
        $(".logout").on("click", function(event) {
            event.preventDefault();
            logoutUser();
        })

    });
}

$(startPicsPage);