/**** JQUERY START ****/
$(function() {
    /**** TOP MUSICHOME DESCRIPTION ****/
    let pDes = $(".p-des");
    let pDesText = "Hello world! Meet the world most powerful Platform for your Songs for free, MusicHome. Download your Best Free Musics Now!!!";
    let i = 0;
    let intervalStart = setInterval(() => {
        if (i <= pDesText.length) {
            let ss = $(pDes[0]).html(pDesText.substring(0, i));
            i++;
        } else {
            clearInterval(intervalStart);
        }
    }, 100);

    /*** HIDE HEADER LOGIN AND SIGNUP BUTTON */
    setInterval(() => {
        let scroll = $(window).scrollTop();
        if (scroll < 80) {
            $("#header-login-signup-btn").hide(200);
        }
    });

    /*** SHOW HEADER LOGIN AND SIGNUP BUTTON */
    setInterval(() => {
        let scroll = $(window).scrollTop();
        if (scroll > 80) {
            $("#header-login-signup-btn").show(200);
        }
    });



    /**** HIDE NO MUSIC MESSAGE ****/
    $(".no-music").hide();

    /**** MUSIC CONTROLS FUNCTION ****/

    $("button.play-pause").css("padding-left", "10px");
    $("button.play-pause").click(function() {
        let songResize = $("body").innerWidth();
        /**** MUSICS FUNCTIONS START ****/

        /**** VIDEO PLAYING FUNCTION ****/
        if (this.innerHTML === "<i class=\"fa fa-play\"></i>") {
            $("button.play-pause").html("<i class=\"fa fa-play\"></i>");
            if (songResize >= "737") {
                $("button.play-pause").css({
                    paddingLeft: "10px",
                    backgroundColor: "#fb00a2"
                });
            }
            if (songResize <= "736") {
                $("button.play-pause").css({
                    color: "#fff"
                });
            }

            $(this).html("<i class=\"fa fa-pause\"></i>");
            if (songResize >= "737") {
                $(this).css({
                    paddingLeft: "6.5px",
                    backgroundColor: "#858585"
                });
            }
            if (songResize <= "736") {
                $(this).css({
                    color: "#fb00a2"
                });
            }


            /**** VIDEO PAUSED FUNCTION ****/
        } else if (this.innerHTML === "<i class=\"fa fa-pause\"></i>") {
            $(this).html("<i class=\"fa fa-play\"></i>");
            if (songResize >= "737") {
                $(this).css({
                    backgroundColor: "#fb00a2",
                    paddingLeft: "10px"
                });
            }
            if (songResize <= "736") {
                $(this).css({
                    Color: "#fff"
                });
            }
        }

    });




    /**** FUNCTIONS TO MAKE THE SONG TITLE MOVES ****/
    let songResize = $("body").innerWidth();
    if (songResize >= "737") {
        $(".music-container h3").show(function() {
            const getTextConfig = $(this).html();
            if (getTextConfig.length > "41") {
                const getText = $(this).html();
                const marquee = "<marquee scrollamount=\"7\" class=\"title-marquee\">" + getText + "</marquee>";
                $(this).html(marquee);
                $(this).css({
                    width: "96%",
                    marginLeft: "1px"
                });
            }
        });
    }

    /**** WIDTH REDUCE TO MOBILE SIZE ****/
    if (songResize < "737") {
        $(".music-container h3").show(function() {
            const getText = $(this).html();
            if (getText.length > "15") {
                const marquee = "<marquee scrollamount=\"7\" class=\"title-marquee\">" + getText + "</marquee>";
                $(this).html(marquee);
                $(".title-marquee").css({
                    width: "95%",
                    marginLeft: "1px",
                });
                $(this).css({
                    marginLeft: "89px"
                })
            }
        });
    }


    /**** MUSIC UPVOTES FUNCTION ****/
    $(".upvote").click(function() {
        if (this.style.color != "mediumvioletred") {
            this.style.color = "mediumvioletred";
            this.style.webkitTextStroke = "1px white";
        } else if (this.style.color === "mediumvioletred") {
            this.style.color = "white";
            this.style.webkitTextStroke = "0px";
        }

    });

    /**** MUSIC DOWNVOTES FUNCTION ****/
    $(".downvote").click(function() {
        if (this.style.color != "mediumvioletred") {
            this.style.color = "mediumvioletred";
            this.style.webkitTextStroke = "1px white";
        } else if (this.style.color === "mediumvioletred") {
            this.style.color = "white";
            this.style.webkitTextStroke = "0px";
        }
    });

    /**** MUSIC ADD TO FAVOURITE FUNCTION ****/
    $(".star").click(function() {
        if (this.style.color != "mediumvioletred") {
            this.style.color = "mediumvioletred";
            this.style.webkitTextStroke = "1px white";
            $(this).attr("title", "Remove from Favourites");

            $("#msgBox").fadeIn(400);
            $("#msgBox div p").html("Added To Favourites!");
            setTimeout(() => {
                $("#msgBox").fadeOut(1000);
            }, 3000);
        } else if (this.style.color === "mediumvioletred") {
            this.style.color = "white";
            this.style.webkitTextStroke = "0px";
            $(this).attr("title", "Add to Favourites");

            $("#msgBox").fadeIn(400);
            $("#msgBox div p").html("Removed From Favourites!");
            setTimeout(() => {
                $("#msgBox").fadeOut(1000);
            }, 3000);
        }
    });

    /**** MENU FUNCTION ****/
    $(".menu-nav").hide();
    $(".menu").click(() => {
        $(".menu-nav").slideToggle("slow");
    });
    $(".music-cover").contextmenu((e) => {
        e.preventDefault();
        $(".menu-nav").slideToggle("slow");
    });
    $(".music-cover").click(() => {
        window.location.href = "./view-post.html";
    });

    /**** DELETE FUNCTION ****/
    $(".delete").click((e) => {
        e.preventDefault();
        let deleteFunc = confirm("Note that if you delete this post, it'll move to recycle bin and it is still on MusicHome. \nAre you sure to Procceed?");
        if (deleteFunc === true) {
            window.location.reload();
        }
    });


    /****  //MUSICS FUNCTIONS END ****/



});