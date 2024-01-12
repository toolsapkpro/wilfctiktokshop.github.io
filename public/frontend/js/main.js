(function ($) {
    "user strict";

    // preloader
    $(window).on('load', function () {
        $('.preloader').fadeOut(1000);
        var img = $('.bg_img');
        img.css('background-image', function () {
            var bg = ('url(' + $(this).data('background') + ')');
            return bg;
        });
    });

    //Create Background Image
    (function background() {
        let img = $('.bg_img');
        img.css('background-image', function () {
            var bg = ('url(' + $(this).data('background') + ')');
            return bg;
        });
    })();

    // nice-select
    // $("select").niceSelect()

    // header-fixed
    var fixed_top = $(".header-section");
    $(window).on("scroll", function () {
        if ($(window).scrollTop() > 100) {
            fixed_top.addClass("animated fadeInDown header-fixed");
        }
        else {
            fixed_top.removeClass("animated fadeInDown header-fixed");
        }
    });

    // navbar-click
    $(".navbar li a").on("click", function () {
        var element = $(this).parent("li");
        if (element.hasClass("show")) {
            element.removeClass("show");
            element.children("ul").slideUp(500);
        }
        else {
            element.siblings("li").removeClass('show');
            element.addClass("show");
            element.siblings("li").find("ul").slideUp(500);
            element.children('ul').slideDown(500);
        }
    });

    //Odometer
    if ($(".statistics-item").length) {
        $(".statistics-item").each(function () {
            $(this).isInViewport(function (status) {
                if (status === "entered") {
                    for (var i = 0; i < document.querySelectorAll(".odometer").length; i++) {
                        var el = document.querySelectorAll('.odometer')[i];
                        el.innerHTML = el.getAttribute("data-odometer-final");
                    }
                }
            });
        });
    }

    // scroll-to-top
    var ScrollTop = $(".scrollToTop");
    $(window).on('scroll', function () {
        if ($(this).scrollTop() < 100) {
            ScrollTop.removeClass("active");
        } else {
            ScrollTop.addClass("active");
        }
    });

    // faq
    $('.faq-wrapper .faq-title').on('click', function (e) {
        var element = $(this).parent('.faq-item');
        if (element.hasClass('open')) {
            element.removeClass('open');
            element.find('.faq-content').removeClass('open');
            element.find('.faq-content').slideUp(300, "swing");
        } else {
            element.addClass('open');
            element.children('.faq-content').slideDown(300, "swing");
            element.siblings('.faq-item').children('.faq-content').slideUp(300, "swing");
            element.siblings('.faq-item').removeClass('open');
            element.siblings('.faq-item').find('.faq-title').removeClass('open');
            element.siblings('.taq-item').find('.faq-content').slideUp(300, "swing");
        }
    });

    // slider
    var swiper = new Swiper('.testimonial-slider', {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        centeredSlides: true,
        navigation: {
            nextEl: '.slider-next',
            prevEl: '.slider-prev',
        },
        autoplay: {
            speeds: 1000,
            delay: 2000,
        },
        speed: 1000,
        breakpoints: {
            991: {
                slidesPerView: 2,
            },
            767: {
                slidesPerView: 2,
            },
            575: {
                slidesPerView: 1,
            },
        }
    });

    // banner-sidebar
    var swiper = new Swiper(".banner-slider", {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        autoplay: {
            speed: 1000,
            delay: 4000,
        },
        speed: 1000,
        navigation: {
            nextEl: '.slider-next',
            prevEl: '.slider-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });

    // floting slide
    var swiper = new Swiper(".floting-slide", {
        slidesPerView: 4,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            speed: 1000,
            delay: 4000,
        },
        speed: 1000,
        navigation: {
            nextEl: '.slider-next',
            prevEl: '.slider-prev',
        },
        breakpoints: {
            1199: {
                slidesPerView: 3,
            },
            991: {
                slidesPerView: 2,
            },
            767: {
                slidesPerView: 2,
            },
            575: {
                slidesPerView: 1,
            },
        }
    });

    //sidebar Menu
    $(document).on('click', '.sidebar-collapse-icon', function () {
        $('.page-container').toggleClass('show');
    });

    // sidebar sub
    $(".has-sub > a").on("click", function () {
        var element = $(this).parent("li");
        if (element.hasClass("active")) {
            element.removeClass("active");
            element.children("ul").slideUp(500);
        }
        else {
            element.siblings("li").removeClass('active');
            element.addClass("active");
            element.siblings("li").find("ul").slideUp(500);
            element.children('ul').slideDown(500);
        }
    });

    // Mobile Menu
    $('.sidebar-mobile-menu').on('click', function () {
        $('.sidebar-main-menu').slideToggle();
    });

    //Profile Upload
    function proPicURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                var preview = $(input).parents('.preview-thumb').find('.profilePicPreview');
                $(preview).css('background-image', 'url(' + e.target.result + ')');
                $(preview).addClass('has-image');
                $(preview).hide();
                $(preview).fadeIn(650);
            }
            reader.readAsDataURL(input.files[0]);
        }
    }
    $(".profilePicUpload").on('change', function () {
        proPicURL(this);
    });

    $(".remove-image").on('click', function () {
        $(".profilePicPreview").css('background-image', 'none');
        $(".profilePicPreview").removeClass('has-image');
    });


    $(".logo-btn").click(function () {
        $(".main-side-menu").toggleClass("show");
    });
    $(".main-side-menu-cross").click(function () {
        $(".main-side-menu").removeClass("show");
    });

    $('.account-area-btn').on('click', function (e) {
        e.preventDefault();
        if ($('.account').hasClass('active')) {
            $('.account').removeClass('active');
            $('.body-overlay').removeClass('active');
        } else {
            $('.account').addClass('active');
            $('.body-overlay').addClass('active');
            $('.navbar-collapse').removeClass('show');
        }
    });
    $('.notify-login').on('click', function (e) {
        e.preventDefault();
        if ($('.account').hasClass('active')) {
            $('.account').removeClass('active');
            $('.body-overlay').removeClass('active');
        } else {
            $('.account').addClass('active');
            $('.body-overlay').addClass('active');
            $('.navbar-collapse').removeClass('show');
            $(".notification-wrapper").slideToggle();
        }
    });
    $('#body-overlay, .account-cross-btn').on('click', function (e) {
        e.preventDefault();
        $('.account').removeClass('active');
        $('.body-overlay').removeClass('active');
    });

    $('.account-control-btn').on('click', function () {
        $('.account-wrapper').toggleClass('change-form');
    })

    // notification
    $(".notify-btn-area").click(function () {
        $(".notification-wrapper").slideToggle();
    });



    $('.header-mobile-search-btn').on('click', function (e) {
        e.preventDefault();
        if ($('.header-mobile-search-form-area').hasClass('active')) {
            $('.header-mobile-search-form-area').removeClass('active');
            $('.body-overlay').removeClass('active');
        } else {
            $('.header-mobile-search-form-area').addClass('active');
            $('.body-overlay').addClass('active');
            $('.header-section').addClass('active');
        }
    });
    $('#body-overlay').on('click', function (e) {
        e.preventDefault();
        $('.header-mobile-search-form-area').removeClass('active');
        $('.body-overlay').removeClass('active');
    });

    // active menu JS
    // function splitSlash(data) {
    //     return data.split('/').pop();
    // }
    // function splitQuestion(data) {
    //     return data.split('?').shift().trim();
    // }
    // var pageNavLis = $('.sidebar-menu a');
    // var dividePath = splitSlash(window.location.href);
    // var divideGetData = splitQuestion(dividePath);
    // var currentPageUrl = divideGetData;

    // // find current sidevar element
    // $.each(pageNavLis, function (index, item) {
    //     var anchoreTag = $(item);
    //     var anchoreTagHref = $(item).attr('href');
    //     var index = anchoreTagHref.indexOf('/');
    //     var getUri = "";
    //     if (index != -1) {
    //         // split with /
    //         getUri = splitSlash(anchoreTagHref);
    //         getUri = splitQuestion(getUri);
    //     } else {
    //         getUri = splitQuestion(anchoreTagHref);
    //     }
    //     if (getUri == currentPageUrl) {
    //         var thisElementParent = anchoreTag.parents('.sidebar-menu-item');
    //         (anchoreTag.hasClass('nav-link') == true) ? anchoreTag.addClass('active') : thisElementParent.addClass('active');
    //         (anchoreTag.parents('.sidebar-dropdown')) ? anchoreTag.parents('.sidebar-dropdown').addClass('active') : '';
    //         (thisElementParent.find('.sidebar-submenu')) ? thisElementParent.find('.sidebar-submenu').slideDown("slow") : '';
    //         return false;
    //     }
    // });

    //sidebar Menu
    $('.sidebar-menu-bar').on('click', function (e) {
        e.preventDefault();
        if ($('.sidebar, .navbar-wrapper, .body-wrapper').hasClass('active')) {
            $('.sidebar, .navbar-wrapper, .body-wrapper').removeClass('active');
            $('.body-overlay').removeClass('active');
        } else {
            $('.sidebar, .navbar-wrapper, .body-wrapper').addClass('active');
            $('.body-overlay').addClass('active');
        }
    });
    $('#body-overlay').on('click', function (e) {
        e.preventDefault();
        $('.sidebar, .navbar-wrapper, .body-wrapper').removeClass('active');
        $('.body-overlay').removeClass('active');
    });

    // dashboard-list
    $('.dashboard-list-item').on('click', function (e) {
        var element = $(this).parent('.dashboard-list-item-wrapper');
        if (element.hasClass('show')) {
            element.removeClass('show');
            element.find('.preview-list-wrapper').removeClass('show');
            element.find('.preview-list-wrapper').slideUp(300, "swing");
        } else {
            element.addClass('show');
            element.children('.preview-list-wrapper').slideDown(300, "swing");
            element.siblings('.dashboard-list-item-wrapper').children('.preview-list-wrapper').slideUp(300, "swing");
            element.siblings('.dashboard-list-item-wrapper').removeClass('show');
            element.siblings('.dashboard-list-item-wrapper').find('.dashboard-list-item').removeClass('show');
            element.siblings('.dashboard-list-item-wrapper').find('.preview-list-wrapper').slideUp(300, "swing");
        }
    });

    //sidebar Menu
    $(document).on('click', '.push-icon', function () {
        $('.push-wrapper').toggleClass('active');
    });


    //info-btn
    $(document).on('click', '.info-btn', function () {
        $('.support-profile-wrapper').addClass('active');
    });
    $(document).on('click', '.chat-cross-btn', function () {
        $('.support-profile-wrapper').removeClass('active');
    });


    $(".dash-payment-title-area").click(function () {
        $(this).parents('.body-wrapper .dash-payment-item-wrapper').find('.dash-payment-item').toggleClass("active");
    });

    $(".sidebar-search-input").click(function () {
        $(this).parents('.dashboard-title-part .header-search-wrapper').find('.sidebar-search-result').addClass("active");
        $('.body-overlay').addClass('active');
    });
    $(".body-overlay").click(function () {
        $('.sidebar-search-result').removeClass("active");
        $('.body-overlay').removeClass('active');
    });

    $(".confirm-withdraw-method-item.proceed").click(function () {
        $(".confirm-withdraw-form").slideToggle();
        $(this).toggleClass("active");
    });


    // nice-select
    $(".nice-select").niceSelect(),

        // select-2 init
        $('.select2-basic').select2();
    $('.select2-multi-select').select2();
    $(".select2-auto-tokenize").select2({
        tags: true,
        tokenSeparators: [',']
    });

})(jQuery);


/**
 * Function For Get All Country list by AJAX Request
 * @param {HTML DOM} targetElement
 * @param {Error Place Element} errorElement
 * @returns
 */
var allCountries = "";
function getAllCountries(hitUrl, targetElement = $(".country-select"), errorElement = $(".country-select").siblings(".select2")) {
    if (targetElement.length == 0) {
        return false;
    }
    var CSRF = $("meta[name=csrf-token]").attr("content");
    var data = {
        _token: CSRF,
    };
    $.post(hitUrl, data, function () {
        // success
        $(errorElement).removeClass("is-invalid");
        $(targetElement).siblings(".invalid-feedback").remove();
    }).done(function (response) {
        // Place States to States Field
        var options = "<option selected disabled>Select Country</option>";
        var selected_old_data = "";
        if ($(targetElement).attr("data-old") != null) {
            selected_old_data = $(targetElement).attr("data-old");
        }
        $.each(response, function (index, item) {
            options += `<option value="${item.name}" data-id="${item.id}" data-mobile-code="${item.mobile_code}" data-currency-name="${item.currency_name}" data-currency-code="${item.currency_code}" data-currency-symbol="${item.currency_symbol}" ${selected_old_data == item.name ? "selected" : ""}>${item.name}</option>`;
        });

        allCountries = response;

        $(targetElement).html(options);
    }).fail(function (response) {
        var faildMessage = "Something went worng! Please try again.";
        var faildElement = `<span class="invalid-feedback" role="alert">
                              <strong>${faildMessage}</strong>
                          </span>`;
        $(errorElement).addClass("is-invalid");
        if ($(targetElement).siblings(".invalid-feedback").length != 0) {
            $(targetElement).siblings(".invalid-feedback").text(faildMessage);
        } else {
            errorElement.after(faildElement);
        }
    });
}
// getAllCountries();



/**
 * Function for reload the all countries that already loaded by using getAllCountries() function.
 * @param {string} targetElement
 * @param {string} errorElement
 * @returns
 */
function reloadAllCountries(targetElement, errorElement = $(".country-select").siblings(".select2")) {
    if (allCountries == "" || allCountries == null) {
        // alert();
        return false;
    }
    var options = "<option selected disabled>Select Country</option>";
    var selected_old_data = "";
    if ($(targetElement).attr("data-old") != null) {
        selected_old_data = $(targetElement).attr("data-old");
    }
    $.each(allCountries, function (index, item) {
        options += `<option value="${item.name}" data-id="${item.id}" data-currency-name="${item.currency_name}" data-currency-code="${item.currency_code}" data-currency-symbol="${item.currency_symbol}" ${selected_old_data == item.name ? "selected" : ""}>${item.name}</option>`;
    });
    $(targetElement).html(options);
}


function placePhoneCode(code) {
    if (code != undefined) {
        code = code.replace("+", "");
        code = "+" + code;
        $("input.phone-code").val(code);
        $("div.phone-code").html(code);
    }
}

$("form button[type=submit], form input[type=submit]").on("click", function (event) {
    var inputFileds = $(this).parents("form").find("input[type=text], input[type=number], input[type=email], input[type=password]");
    var mode = false;
    $.each(inputFileds, function (index, item) {
        if ($(item).attr("required") != undefined) {
            if ($(item).val() == "") {
                mode = true;
            }
        }
    });
    if (mode == false) {
        //   $(this).parents("form").find(".btn-ring").show();
        $(this).parents("form").find("button[type=submit],input[type=submit]").prop('disabled', true);
        $(this).parents("form").submit();
    }
});
/**
 * Function for getting CSRF token for form submit in laravel
 * @returns string
 */
function laravelCsrf() {
    return $("head meta[name=csrf-token]").attr("content");
}

function openDeleteModal(URL, target, message, actionBtnText = "Remove", method = "DELETE") {
    if (URL == "" || target == "") {
        return false;
    }

    if (message == "") {
        message = "Are you sure toll delete ?";
    }
    var method = `<input type="hidden" name="_method" value="${method}">`;

    openModalByContent(
        {
            content: `<div class="card modal-alert border-0">
                      <div class="card-body">
                          <form method="POST" action="${URL}">
                              <input type="hidden" name="_token" value="${laravelCsrf()}">
                              ${method}
                              <div class="head mb-3">
                                  ${message}
                                  <input type="hidden" name="target" value="${target}">
                              </div>
                              <div class="foot d-flex align-items-center justify-content-between">
                                  <button type="button" class="modal-close btn btn--info rounded text-light">Close</button>
                                  <button type="submit" class="alert-submit-btn btn btn--danger btn-loading rounded text-light">${actionBtnText}</button>
                              </div>
                          </form>
                      </div>
                  </div>`,
        },

    );
}

/**
 * Function For Open Modal Instant by pushing HTML Element
 * @param {Object} data
 */
function openModalByContent(data = {
    content: "",
    animation: "mfp-move-horizontal",
    size: "medium",
}) {
    $.magnificPopup.open({
        removalDelay: 500,
        items: {
            src: `<div class="white-popup mfp-with-anim ${data.size ?? "medium"}">${data.content}</div>`, // can be a HTML string, jQuery object, or CSS selector
        },
        callbacks: {
            beforeOpen: function () {
                this.st.mainClass = data.animation ?? "mfp-move-horizontal";
            },
            open: function () {
                var modalCloseBtn = this.contentContainer.find(".modal-close");
                $(modalCloseBtn).click(function () {
                    $.magnificPopup.close();
                });
            },
        },
        midClick: true,
    });
}

$(".sell-coin-modal-wrapper .btn-wrapper .proceed").click(function () {
    $(".sell-coin-modal-input-wrapper").slideToggle();
    $(this).toggleClass("active");
});

// sidebar
$(".sidebar-menu-item > a").on("click", function () {
    var element = $(this).parent("li");
    if (element.hasClass("active")) {
        element.removeClass("active");
        element.children("ul").slideUp(500);
    }
    else {
        element.siblings("li").removeClass('active');
        element.addClass("active");
        element.siblings("li").find("ul").slideUp(500);
        element.children('ul').slideDown(500);
    }
});

// // active menu JS
// function splitSlash(data) {
//     return data.split('/').pop();
// }
// function splitQuestion(data) {
//     return data.split('?').shift().trim();
// }
// var pageNavLis = $('.sidebar-menu a');
// var dividePath = splitSlash(window.location.href);
// var divideGetData = splitQuestion(dividePath);
// var currentPageUrl = divideGetData;

// // find current sidevar element
// $.each(pageNavLis, function (index, item) {
//     var anchoreTag = $(item);
//     var anchoreTagHref = $(item).attr('href');
//     var index = anchoreTagHref.indexOf('/');
//     var getUri = "";
//     if (index != -1) {
//         // split with /
//         getUri = splitSlash(anchoreTagHref);
//         getUri = splitQuestion(getUri);
//     } else {
//         getUri = splitQuestion(anchoreTagHref);
//     }
//     if (getUri == currentPageUrl) {
//         var thisElementParent = anchoreTag.parents('.sidebar-menu-item');
//         (anchoreTag.hasClass('nav-link') == true) ? anchoreTag.addClass('active') : thisElementParent.addClass('active');
//         (anchoreTag.parents('.sidebar-dropdown')) ? anchoreTag.parents('.sidebar-dropdown').addClass('active') : '';
//         (thisElementParent.find('.sidebar-submenu')) ? thisElementParent.find('.sidebar-submenu').slideDown("slow") : '';
//         return false;
//     }
// });

// page load active menu
setTimeout(() => {
    if ($('.sidebar-menu-item').hasClass('active')) {
        $('.sidebar').animate({
            scrollTop: $('.sidebar-menu-item.active').offset().top - 600
        }, 600);

    }
    if ($('.sidebar-dropdown').hasClass('active')) {
        $('.sidebar').animate({
            scrollTop: $('.sidebar-dropdown.active').offset().top - 600
        }, 600);
    }
}, 200);


/**
 * Function for search admin panel sidebar menu item
 */
function sideBarSearch() {
    var menuLinks = $(".sidebar-menu a");
    var filterMenuItem = [];
    $.each(menuLinks, function (index, item) {
        // console.log(index, item)
        if ($(item).attr("href") != "javascript:void(0)") {
            filterMenuItem.push(item);
        }
    });


    $(".sidebar-search-input").keyup(function () {
        sideBarSearchWithInput($(this), filterMenuItem);
    })
}
sideBarSearch();


function sideBarSearchWithInput(input, navItems) {
    var inputValue = input.val().toLowerCase();
    var searchResult = [];
    $.each(navItems, function (index, item) {
        var title = $(item).find("span").text().toLowerCase();
        var result = title.match(inputValue)
        if (result != null) {
            searchResult.push(item);
        }
    });
    $(".sidebar-search-result").html("");

    $.each(searchResult, function (index, item) {
        // console.log(item)
        var link = $(item).attr("href");
        var title = $(item).find("span").text();
        var iconClass = $(item).find("i").attr("class");
        var singleItem = `<div class="single-item">
            <a href="${link}">
              <i class="${iconClass}"></i>
              <span style="position:inherit">${title}</span>
            </a>
    </div>`
        $(".sidebar-search-result").append(singleItem);
    });



    // $(".header-search-wrapper .sidebar-search-input").click(function () {
    //     $(".header-search-wrapper .sidebar-search-result").addClass("active");
    // });




    // console.log(singleItem);
}

