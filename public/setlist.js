

function setList(){
    return `
        <div> 
            <h2>Our Songs</h2>
            <ul>
                <li>Midlife Crisis - Original by MLC</li>
                <li>Seven Nation Army - The White Stripes</li>
                <li>Wonderwall - Oasis</li>
                <li>Hey Jealousy - Gin Blossoms</li>
                <li>Kryptonite - 3 Doors Down</li>
                <li>Everlong - Foo Fighters</li>
                <li>Lonely Boy - Black Keys</li>
                <li>Sex on Fire - Kings of Leon</li>
                <li>Runnin Down a Dream - Tom Petty</li>
                <li>One - U2</li>
                <li>All Along the Watchtower - Jimmy Hendrix</li>
                <li>American Idiot - Green Day</li>
                <li>If You Could Only See - Tonic</li>
                <li>Last Night - The Strokes</li>
                <li>Never There - Cake</li>
                <li>Under the Bridge - Red Hot Chili Peppers</li>
                <li>Ice Cream Man - Van Halen</li>
                <li>Wagon Wheel - Darius Rucker</li>
                <li>Ring of Fire - Social Distortion / Johny Cash</li>
                <li>Gold on the Ceiling - Black Keys</li>
                <li>Mr Brightside - The Killers</li>
                <li>Surrender - Cheap Trick</li>
                <li>Stray Cat Strut - The Stray Cats</li>
                <li>Every Rose Has It's Thorn - Poison</li>
                <li>Pride and Joy - Stevie Ray Vaugn</li>
                <li>Ball and Chain - Social Distortion</li>
                <li>All Apologies - Nirvana</li>
                <li>Country Roads - John Denver</li>
                <li>Thunder - Imagine Dragons</li>
                <li>Sweet Child O Mine - Guns N Roses</li>
                <li>All I Want is You - U2</li>
                <li>Highway to Hell - AC/DC</li>
            </ul>
            
        </div>
    `;
}








function startPicsPage(){

    checkAuthStatus(status, function (stat) {
        $(".headerJS").html(displayHeader(stat));
        $(".imagesJS").html(setList());
        $(".logout").on("click", function(event) {
            event.preventDefault();
            logoutUser();
        })

    });
}

$(startPicsPage);