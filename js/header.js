/**** JQUERY ****/
$(document).ready(() => {
    /****    DISABLED RIGHT CLICK   ****/
    $(document).contextmenu((rightClick) => {
        rightClick.preventDefault();
    });

    /**** MESSAGE BOX HIDDEN ****/
    $("#msgBox").hide();


    /**** DISABLED IMAGE DRAGGABLE ****/
    $("img").attr("draggable", "false");


    /**** NAV BAR MOUSEOVER FUNCTIONS ****/
    $("#bars, #slider, #navsbar").on("mouseover", () => {
        $("#navsbar").css({
            width: "15pc",
            transitionDuration: "1s"
        });
    });


    /****    NAV BAR MOUSEOUT FUNCTIONS    ****/
    $("#bars, #slider, #navsbar").mouseout(() => {
        $("#navsbar").css({
            width: "0",
            transitionDuration: "1s",
        });
    });


    /****    TOGGLE USER    ****/
    $("#toggleuser").hide();
    $("header").mousedown(function() {
        $("header").animate({
            width: "60pc"
        });
    });
    $("header").mouseup(function() {
        $("header").animate({
            width: "100%"
        });
    });
    $("#userdiv").on("mouseover", () => {
        $("#toggleuser").toggle();
    });
    $("body, header").on("mouseleave", () => {
        $("#toggleuser").hide();
    });


    /* SETTINGS BOX MENU */
    $("#settings").hide();
    $("#settings-click, #settings-nav-click").click(() => {
        $("#settings").show();
    });
    $("#settings-close-div").click(() => {
        $("#settings").hide();
    });


    /**** DESKTOP NAVIGATION TOGGLE USER ****/
    $("#asideFull").hide();

    $("#seconduserdiv").on("click", () => {
        $("#asideFull").animate({
            width: "toggle"
        });
    });
    $("#asideFull").on("mouseleave", () => {
        $("#asideFull").animate({
            width: "hide"
        });
    });

    /**** AJAX LOADING ****/

    $(".loader-div").hide();

    /**** DEFAULTS AJAX ****/
    //     $(document).ajaxStart(() => {
    //         $(".loader-div").show();
    //     });

    //     $(document).ajaxStop(() => {
    //         $(".loader-div").hide();
    //     });

    //     $(document).ajaxError(() => {
    //         $("#msgBox").fadeIn(400);
    //         $("p#msg, .msg").text("Check Your Internet Connection!");
    //         setTimeout(() => {
    //             $("#msgBox").fadeOut(2000);
    //         }, 4000);
    //     });

    /**** HOME NAV LINK CLICK ****/
    //     $(".home").click((e) => {
    //         e.preventDefault();
    //         $("html").load("./");

    //         $(document).ajaxSuccess(() => {
    //             window.location.replace("./");
    //         });
    //     });

    /**** ALL LOGIN LINK CLICK ****/
    var login = $(".loadlogin");
    var signup = $(".loadsignup");
    $(login).click((e) => {
        e.preventDefault();
        window.location.assign("./login.html")
    });
    $(signup).click((e) => {
        e.preventDefault();
        window.location.assign("./signup.html")
    });


    // $(login).click((e) => {
    //     e.preventDefault();
    //     $("html").load("login.html");

    //     $(document).ajaxSuccess(() => {
    //         window.location.assign("login.html");
    //     });
    // });

    /**** ALL SIGNUP LINK CLICK ****/
    //     $(signup).click((e) => {
    //         e.preventDefault();
    //         $("html").load("signup.html");

    //         $(document).ajaxSuccess(() => {
    //             window.location.replace("signup.html");
    //         });
    //     });




    /**** // END AJAX LOADING ****/



});
/**** END JQUERY ****/

/**** LOADING START PAGE AJAX ****/

// $(document).ready(function() {
//     $.ajax({
//         url: "",
//         timeout: 3000,
//     })
// });




/**** JAVASCRIPT ****/

/* SEARCH FUNCTION */
function search() {
    let a = (document.getElementById("finddiv").style);
    let b = (document.getElementById("find").style);
    if (b.width != "9.6pc") {
        b.width = "9.6pc";
        a.visibility = "visible";
        b.transitionDuration = "1s";
    } else if (b.width != "0") {
        b.width = "0";
        a.visibility = "hidden";
        b.transitionDuration = "1s";
        document.getElementById("find").value = "";
    }
}


/* ARTIST NAMES FUNTION */
function artistNames() {
    const names = document.getElementById("names");
    const artistNames = document.getElementById("artistnames");
    if (names.innerHTML != "Artist Names —") {
        names.innerHTML = "Artist Names —";
        artistNames.style.fontSize = "1.3pc";
        artistNames.style.transition = "0.5s";
    } else if (names.innerHTML != "Artist Names +") {
        names.innerHTML = "Artist Names +";
        artistNames.style.fontSize = "0";
        artistNames.style.transition = "0.5s";
    }
}


/**** START MUSIC RANGE CONTROLS ****/

function audioHigh() {
    let audioHighStyle = (document.getElementById("audioHigh").style);
    let audioDownStyle = (document.getElementById("audioDown").style);
    let audioMuteStyle = (document.getElementById("audioMute").style);

    audioDownStyle.visibility = "hidden";
    audioHighStyle.visibility = "hidden";
    audioMuteStyle.visibility = "visible";
    document.getElementById("range").value = "0";
};

function audioDown() {
    let audioHighStyle = (document.getElementById("audioHigh").style);
    let audioDownStyle = (document.getElementById("audioDown").style);
    let audioMuteStyle = (document.getElementById("audioMute").style);

    audioDownStyle.visibility = "hidden";
    audioHighStyle.visibility = "visible";
    audioMuteStyle.visibility = "hidden";
    document.getElementById("range").value = "100";
};

function audioMute() {
    let audioHighStyle = (document.getElementById("audioHigh").style);
    let audioDownStyle = (document.getElementById("audioDown").style);
    let audioMuteStyle = (document.getElementById("audioMute").style);

    audioDownStyle.visibility = "visible";
    audioHighStyle.visibility = "hidden";
    audioMuteStyle.visibility = "hidden";
    document.getElementById("range").value = "50";
};


function range() {
    let musicRange = (document.getElementById("range").value);
    if (musicRange == "0") {
        let audioHighStyle = (document.getElementById("audioHigh").style);
        let audioDownStyle = (document.getElementById("audioDown").style);
        let audioMuteStyle = (document.getElementById("audioMute").style);

        audioDownStyle.visibility = "hidden";
        audioHighStyle.visibility = "hidden";
        audioMuteStyle.visibility = "visible";
    }

    if (musicRange > "50" || musicRange == "100") {
        let audioHighStyle = (document.getElementById("audioHigh").style);
        let audioDownStyle = (document.getElementById("audioDown").style);
        let audioMuteStyle = (document.getElementById("audioMute").style);

        audioDownStyle.visibility = "hidden";
        audioHighStyle.visibility = "visible";
        audioMuteStyle.visibility = "hidden";
    }

    if (musicRange <= "50" && musicRange != "0" && musicRange != "100") {
        let audioHighStyle = (document.getElementById("audioHigh").style);
        let audioDownStyle = (document.getElementById("audioDown").style);
        let audioMuteStyle = (document.getElementById("audioMute").style);

        audioDownStyle.visibility = "visible";
        audioHighStyle.visibility = "hidden";
        audioMuteStyle.visibility = "hidden";
    }
}


/**** RECYCLE BIN SWITCH ****/

function binSwitch() {
    let binSwitchBg = (document.getElementById("binSwitchBg").style);
    let binSwitchMain = (document.getElementById("binSwitchMain").style);

    if (binSwitchMain.left != "0px") {
        binSwitchMain.left = "0px";
        binSwitchBg.backgroundColor = "#424242";
        binSwitchMain.backgroundColor = "#8b8b8b";
        binSwitchMain.transitionDuration = "0.1s";
        binSwitchBg.transitionDuration = "0.5s";
    } else if (binSwitchMain.left != "28px") {
        binSwitchMain.left = "28px";
        binSwitchBg.backgroundColor = "green";
        binSwitchMain.backgroundColor = "#00c200";
        binSwitchMain.transitionDuration = "0.1s";
        binSwitchBg.transitionDuration = "0.5s";
    }



}

/**** END JAVASCRIPT ****/