$(function() {
    /**** PROFILE PICTURE OPEN IN NEW TAB CONFIG ****/
    let dp = document.querySelector("#dps").src = "../img/user.png";

    $(".profile-wrapper, #dps").contextmenu(function(e) {
        if (dp == "./img/user.png" || dp == "img/user.png" || dp == "/img/user.png" || dp == "../img/user.png") {
            e.preventDefault();

            $("#msgBox").fadeIn(400);
            $("#msgBox div p").html("No Profile Picture!");
            setTimeout(() => {
                $("#msgBox").fadeOut(1000);
            }, 3000);
        } else {
            e.preventDefault();
            window.open(dp);

            $("#msgBox").fadeIn(400);
            $("#msgBox div p").html("Image Opened In a New Tab!");
            setTimeout(() => {
                $("#msgBox").fadeOut(1000);
            }, 3000);
        }
    });

    /**** EDIT BUTTON REDIRECT LINK ****/
    $("#editBtn").click(() => {
        window.location.href = "./edit-profile.html";
    });

    /**** SHORT MENU ****/
    $(".menu-container").hide();
    $("#menuBars").click(() => {
        $(".menu-container").toggle();
    });
    $("#reportCancel").click(() => {
        $(".menu-container").hide();
    });

    /**** COPY LINK FUNCTIONS ****/
    $(".copy-link").click(() => {
        let userLink = document.getElementById("userlink");
        navigator.clipboard.writeText(userLink.innerText);

        $("#msgBox").fadeIn(400);
        $("#msgBox div p").html("Link Copied!");
        setTimeout(() => {
            $("#msgBox").fadeOut(1000);
        }, 3000);
    });

    /**** READ MORE DIV */
    let getReadMore = $(".about-profile p").html();
    $(".read-more-div").hide();
    $(".read-more-div").html(getReadMore);

    /****  SPLITED USERNAME ****/
    let usernameSlice = $(".about-profile p").html().length;
    if (usernameSlice > "442") {
        let ss = $(".about-profile p").html().substring(0, 430);
        $(".about-profile p").html(ss += "<span id=\"readMore\"> ...Read More.</span>");
    }

    /**** READ MORE DIV */
    $("#readMore").click(() => {
        $(".read-more-div").toggle(400);
    });
    $(".read-more-div").mouseout(function() {
        $(this).hide(400);
    });



});