

function displayImages(){
    return `
        <div> 
            <img src="./media/MLC_Hero_Image.jpg" alt="Picture of the full MLC (Midlife Crisis) Band" class = "pic" >
        </div>
        <div> 
            <img src="./media/fair_belting_plus_guitars.jpeg" alt="Picture of the MLC (Midlife Crisis) Band" class = "pic" >
        </div>
        <div> 
            <img src="./media/lund_vestner.PNG" alt="Picture of the MLC (Midlife Crisis) Band" class = "pic" >
        </div>
        <div> 
            <img src="./media/fair_buch.jpg" alt="Picture of the MLC (Midlife Crisis) Band" class = "pic" >
        </div>
        <div> 
           <img src="./media/dalporto_lund.jpeg" alt="Picture of the MLC (Midlife Crisis) Band" class = "pic" >
        </div>
        <div> 
            <img src="./media/fair_belting.jpeg" alt="Picture of the MLC (Midlife Crisis) Band" class = "pic" >
        </div>
        <div> 
            <img src="./media/band_during_lead.jpeg" alt="Picture of the MLC (Midlife Crisis) Band" class = "pic" >
        </div>
        <div> 
            <img src="./media/wagon_wheel.jpg" alt="Picture of the MLC (Midlife Crisis) Band" class = "pic" >
        </div>
        <div> 
            <img src="./media/full_band.jpeg" alt="Picture of the full MLC (Midlife Crisis) Band" class = "pic" >
        </div>
    `;
}








function startPicsPage(){

    checkAuthStatus(status, function (stat) {
        $(".headerJS").html(displayHeader(stat));
        $(".imagesJS").html(displayImages());
        $(".logout").on("click", function(event) {
            event.preventDefault();
            logoutUser();
        })

    });
}

$(startPicsPage);