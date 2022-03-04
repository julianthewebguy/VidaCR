$(function () {
        $('.toggle-menu').click(function () {
            $('.exo-menu').toggleClass('display');

        });

    });

    jQuery(document).ready(function () {
        if (window.location.href.indexOf("listing_") > -1 || window.location.href.indexOf("listingid") > -1 || window.location.href.indexOf("Listing_") > -1) {

            var listingFooter = jQuery('<style> .button-row2 a { padding: 0.9em; background-color: #75aeb5; color: #fff; text-decoration: none; border-radius: 26px; border: 1px solid #2e485b; } #toTop { padding: 5px 3px; color: #fff; position: fixed; bottom: 50px; right: calc(50% - 60px); display: none; } @media only screen and (min-width: 1444px) { #toTop { display: none!important; } } </style> <div id="toTop" class="button-row2 align-center"><a href="#Top">Back to Top</a> </div> <div class="secondaryBackground"> <div class="secondaryBackground"> <div id="mid-footer"> <div class="footer-flexContainer"> <div class="footer-flex footer-left"> <h2>Vida Realty</h2> <br /> <p>Cory Martin</p> <p><strong><a href="tel:+50688250434">+506 8825-0434</a></strong> Cellphone</p> <p>Kristine Morley</p> <p><strong><a href="tel:+50688307477">+506 8830-7477</a></strong> Cellphone</p> <p>Michelle Reid</p> <p><strong><a href="tel:+50688716071">+506 8871-6071</a></strong> Cellphone</p> <p>Quepos/Manuel Antonio, PU</p> <p>Costa Rica</p> <div class="footer-social"> <h3>Follow Us:</h3> <a href="https://www.facebook.com/vidarealtycostarica/" target="_blank"><i class="fab fa-facebook-f socials"></i></a> <a href="https://www.instagram.com/vidarealtycr/" target="_blank"><i class="fab fa-instagram socials"></i></a> </div> </div> <div class="footer-flex no-mobile"> <img src="https://mediavault.point2.com/p2a/htmltext/fda4/faca/67cc/f153151c26d65e9ffcc4/original.png" alt=""> <!--p><img class="realtor" alt="AMPI - Realtor" src="https://mediavault.point2.com/p2a/htmltext/780b/9c37/8398/1848d102673dc1a9e4e0/original.png" initialwidth="220"></p--> <p>Copyright © 2021 Vida Realty Costa Rica. All Rights Reserved. </p> </div> <div class="footer-flex footer-right"> <h2 class="title">Useful Links</h2> <ul> <li><a href="/all_costa_rica_real_estate/page_2708366.html"> All Costa Rica Real Estate </a></li> <li><a href="/manuel_antonio_real_estate/page_2708367.html"> Manuel Antonio</a></li> <li><a href="/dominical_uvita_real_estate/page_2708368.html"> Dominical - Uvita</a></li> <li><a href="/jaco_real_estate/page_2708369.html"> Jaco</a></li> <li><a href="/guanacaste_real_estate/page_2708370.html"> Guanacaste</a></li> <li><a href="/san_jose_real_estate/page_2708371.html"> San Jose</a></li> <li><a href="/costa_rica_real_estate_map_search/page_2708588.html"> Map Search </a></li> <li><a href="http://blog.vidarealtycr.com/"> Blog </a></li> <li><a href="/contact_us/page_2054563.html"> Contact Us </a></li> </ul> </div> <div class="footer-flex only-mobile"> <img src="https://mediavault.point2.com/p2a/htmltext/fda4/faca/67cc/f153151c26d65e9ffcc4/original.png" alt=""> <!--p><img  class="realtor" alt="AMPI - Realtor" src="https://mediavault.point2.com/p2a/htmltext/780b/9c37/8398/1848d102673dc1a9e4e0/original.png" initialwidth="220"></p--> <p>Copyright © 2021 Vida Realty Costa Rica. All Rights Reserved. </p> </div> </div> </div> </div> <div id="final-footer" class="mainBackground"> <a href="https://abovemedia.ca" title="Real Estate Marketing" target="_blank" rel="nofollow">Real Estate Marketing</a> by AboveMedia Canada. </div>');

            jQuery('body').append(listingFooter);
        }

        jQuery(".row-fluid").last().addClass("footerBG");
    });

    function addCustomClasses() {
        if (window.location.href.indexOf("listing_") > -1 || window.location.href.indexOf("listingid") > -1 || window.location.href.indexOf("Listing_") > -1) {
            var headerDiv = document.getElementsByClassName('maindiv')[0];
        }
        else {
            var headerDiv = document.getElementsByClassName('row-fluid')[1];
        }
        headerDiv.classList.add('headerBG');
    }
    document.ready = addCustomClasses;

    // When the user scrolls the page, execute myFunction 
    window.onscroll = function () { myFunction() };
    // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
    function myFunction() {
        // Get the header depending on whether we're on a listing page or not
        if (window.location.href.indexOf("listing_") > -1 || window.location.href.indexOf("listingid") > -1 || window.location.href.indexOf("Listing_") > -1) {
            var header = document.getElementsByClassName('maindiv')[0];
            //console.log('AM');
        }
        else {
            var header = document.getElementsByTagName('header')[1];
        }
        //Get the offset position of the navbar
        var sticky = header.offsetTop;
        if (window.pageYOffset > sticky) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    }

    // Make Nav Transparent on Home
    $(document).ready(function () {
        var url = location.href;
        var headerDiv = document.getElementsByClassName('row-fluid')[1];
        console.log(url)
        if (url == "https://www.vidarealtycr.com/" ) {
            headerDiv.classList.add('transparent');
        }

    });

    $(window).scroll(function () {
        if ($(this).scrollTop()) {
            $('#toTop').fadeIn();
        } else {
            $('#toTop').fadeOut();
        }
    });
