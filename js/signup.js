$(function() {
    let show = $("#show");
    let hide = $("#hide");
    let show2 = $("#show2");
    let hide2 = $("#hide2");

    $("#create").click(function(e) {
        e.preventDefault();
    });
    $("#later").click(function(e) {
        e.preventDefault();
    });

    /**** FIRST PASSWORD VISIBILITY ****/

    show.hide();
    hide.click(function() {
        setTimeout(() => {
            show.show();
            hide.hide();
            $("#pwd").attr("type", "text");
        }, 0);
        setTimeout(() => {
            show.hide();
            hide.show();
            $("#pwd").attr("type", "password");
        }, 500);
    });


    /**** SECOND PASSWORD VISIBILITY ****/

    show2.hide();
    hide2.click(function() {
        setTimeout(() => {
            show2.show();
            hide2.hide();
            $("#confirmPwd").attr("type", "text");
        }, 0);
        setTimeout(() => {
            show2.hide();
            hide2.show();
            $("#confirmPwd").attr("type", "password");
        }, 500);
    });


    $("#create").click(function() {
        let create = $("#create");
        let later = $("#later");

        $("#settings").show();
        window.location.replace("#audio");
        create.css("border", "5px double white");
        later.css("border", "3px solid white");
    });

    $("#later").click(function() {
        let create = $("#create");
        let later = $("#later");

        create.css("border", "3px solid white");
        later.css("border", "5px double white");
    });


});


/**** SIGNUP VALIDATION ****/
$(function() {
    // Phone number default validation
    var phone_input = document.getElementById("tel");
    phone_input.checkValidity();

    $("#firstName").keypress(function(e) {
        if (e.key.match(/[^a-zA-Z0-9-. ]/)) {
            e.preventDefault();
        }
        if ($("#firstName").val().length >= 10) {
            e.preventDefault();
        }
    });
    $("#lastName").keypress(function(e) {
        if (e.key.match(/[^a-zA-Z0-9-. ]/)) {
            e.preventDefault();
        }
        if ($("#lastName").val().length >= 10) {
            e.preventDefault();
        }
    });
    $("#userName").keypress(function(e) {
        if (e.key.match(/[^a-zA-Z0-9-.]/)) {
            e.preventDefault();
        }
        if ($("#userName").val().length >= 10) {
            e.preventDefault();
        }
    });
    $("#tel").keypress(function(e) {
        if (e.key.match(/[^0-9]/)) {
            e.preventDefault();
        }
    });


});

// Return submit signup

function goBack() {
    let firstName = (document.querySelector("#firstName").value);
    let lastName = (document.querySelector("#lastName").value);
    let userName = (document.querySelector("#userName").value);
    let pwd = (document.querySelector("#pwd").value);
    let confirmPwd = (document.querySelector("#confirmPwd").value);
    let tel = (document.querySelector("#tel").value);

    // Define new custom alert
    const customAlert = (res) => {
        $("#msgBox div p").html(res);
        $("#msgBox").fadeIn(400);
        setTimeout(() => {
            $("#msgBox").fadeOut(1000);
        }, 3000);
    }

    // validation for musichome
    const musichome1 = firstName.search("music");
    const musichome2 = firstName.search("Music");
    const musichome3 = lastName.search("home");
    const musichome4 = lastName.search("Home");
    const musichome5 = userName.search("musichome");
    const musichome6 = userName.search("MusicHome");
    const musichome7 = userName.search("Musichome");
    const musichome8 = userName.search("musicHome");

    if (musichome1 > -1 || musichome2 > -1) {
        customAlert("Invalid FirstName!");
        return false;
    }
    if (musichome3 > -1 || musichome4 > -1) {
        customAlert("Invalid LastName!");
        return false;
    }
    if (musichome5 > -1 || musichome6 > -1 || musichome7 > -1 || musichome8 > -1) {
        customAlert("Invalid Username!");
        return false;
    }

    /**** FIRST NAME VALIDATION ****/
    if (firstName[0] == " " || firstName == "") {
        customAlert("Invalid FirstName!");
        return false;
    }
    if (firstName.match(/[^a-zA-Z0-9-. ]/)) {
        customAlert("Field should not contain special characters!");
        return false;
    }
    if (firstName.length > 10) {
        customAlert("FirstName should be less than 11!");
        return false;
    }
    if (firstName.length < 3) {
        customAlert("FirstName should be greater than 2!");
        return false;
    }

    /**** LAST NAME VALIDATION ****/
    if (lastName[0] == " " || lastName == "") {
        customAlert("Invalid LastName!");
        return false;
    }
    if (lastName.match(/[^a-zA-Z0-9-. ]/)) {
        customAlert("Field should not contain special characters!");
        return false;
    }
    if (lastName.length > 10) {
        customAlert("LastName should be less than 11!");
        return false;
    }
    if (lastName.length < 3) {
        customAlert("LastName should be greater than 3!");
        return false;
    }

    /**** USERNAME VALIDATION ****/
    let searchUserName = userName.search(" ");
    if (searchUserName > -1) {
        customAlert("Username should not have space!");
        return false;
    }
    if (userName.match(/[^a-zA-Z0-9.-]/)) {
        customAlert("Username only contain AlphaNumeric and . or -");
        return false;
    }
    if (userName.length > 10) {
        customAlert("Username should be less than 11!");
        return false;
    }
    if (userName.length < 3) {
        customAlert("Username should be greater than 2!");
        return false;
    }

    /**** PHONE NUMBER FIELD VALIDATION ****/
    if (tel == "") {
        customAlert("Invalid Phone Number");
        return false;
    }
    if (tel.match(/[^0-9]/)) {
        customAlert("Phone only contain numbers!");
        return false;
    }
    if (tel.length > "12") {
        customAlert("Phone should be less than 13!");
        return false;
    }
    if (tel.length < "11") {
        customAlert("Phone should be greater than 10!");
        return false;
    }

    /**** PASSWORD FIELD VALIDATION ****/
    if (pwd[0] == " " || pwd == "") {
        customAlert("Invalid Password!");
        return false;
    }
    if (pwd.length < 6) {
        customAlert("Password should be greater than 5!");
        return false;
    }
    if (confirmPwd != pwd) {
        customAlert("Password did not Match!");
        return false;
    }
    if (pwd.length > 40) {
        let confm = confirm("Your Password is greater than 40. You might forget it! \nClick \"Ok\" to continue or click \"Cancel\" to reduce it.");
        if (confm == true) {
            return true;
        }
        if (confm == false) {
            return false;
        }
        return false;
    }


} // END SIGNUP VALIDATION