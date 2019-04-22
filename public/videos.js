

function displayVideos(){
    return `
        <div class='videoWrapper'> 
            <div>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/LmAD79q_Zso" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>        
            </div>
            <div>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/UfU0V2fCRi8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/5HPn2P4FrZY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/vuMkrbmGG7M" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/hs12p_sMPgI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
    `;
}








function startVideosPage(){

    checkAuthStatus(status, function (stat) {
        $(".headerJS").html(displayHeader(stat));
        $(".imagesJS").html(displayVideos());
        $(".logout").on("click", function(event) {
            event.preventDefault();
            logoutUser();
        })

    });
}

$(startVideosPage);