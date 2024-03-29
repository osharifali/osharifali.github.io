! function(e) {
    "use strict";
    e(document).ready(function() {
        var a = e(".main-nav"),
            s = a.offset();
        e(window).scroll(function() {
            e(this).scrollTop() > s.top - 20 && a.hasClass("default") ? a.fadeOut("fast", function() {
                e(this).removeClass("default").addClass("switched-header").slideDown(200)
            }) : e(this).scrollTop() <= s.top - 20 && a.hasClass("switched-header") && a.slideUp(200, function() {
                e(this).removeClass("switched-header").addClass("default").fadeIn(200)
            })
        }), e("a.scroll").smoothScroll({
            speed: 800,
            offset: -64
        }), e("#client-carousel").owlCarousel({
            items: 6,
            itemsDesktop: [1199, 4],
            itemsDesktopSmall: [979, 4],
            itemsTablet: [768, 3],
            itemsTabletSmall: [550, 3],
            itemsMobile: [480, 2],
            pagination: !1,
            autoPlay: !0
        }), e("#block-slider").owlCarousel({
            navigation: !1,
            slideSpeed: 300,
            paginationSpeed: 400,
            responsiveRefreshRate: 200,
            responsiveBaseWidth: window,
            pagination: !1,
            singleItem: !0,
            navigation: !0,
            navigationText: ["<span class='icon-left-open-big'></span>", "<span class='icon-right-open-big'></span>"]
        });
        for (var t = e(".block-background-image"), o = 0; o < t.length; o++) t.eq(o).attr("data-background") && t.eq(o).css("background-image", "url(" + t.eq(o).data("background") + ")");
        e(".popup").magnificPopup({
            type: "image",
            fixedContentPos: !1,
            fixedBgPos: !1,
            mainClass: "mfp-no-margins mfp-with-zoom",
            image: {
                verticalFit: !0
            },
            zoom: {
                enabled: !0,
                duration: 300
            }
        });
        var i = e(".block-works");
        e(".popup-youtube, .popup-vimeo").magnificPopup({
            disableOn: 700,
            type: "iframe",
            mainClass: "mfp-fade",
            removalDelay: 160,
            preloader: !1,
            fixedContentPos: !1
        }), e(".filter ").on("click", "li a", function() {
            e(this).addClass("active"), e(this).parent().siblings().find("a").removeClass("active");
            var a = e(this).attr("data-filter");
            if (e(this).closest(i).find(".item").removeClass("disable"), "all" !== a)
                for (var s = e(this).closest(i).find(".item"), t = 0; t < s.length; t++) s.eq(t).hasClass(a) || s.eq(t).addClass("disable");
            return !1
        }), e(".search-form i").on("click", function() {
            e(this).closest(".search-form").find('input[type="text"]').focus(), e(this).closest(".search-form").find('input[type="text"]').val() && e(this).closest(".search-form").find('input[type="submit"]').trigger("click")
        });
        var r = e("input#name"),
            n = e("input#email"),
            l = e("textarea#message"),
            c = e(".contact-form");
        e(".submit").on("click", function() {
            r.removeClass("errorForm"), l.removeClass("errorForm"), n.removeClass("errorForm");
            var a = !1,
                s = r.val();
            ("" == s || " " == s) && (a = !0, r.addClass("errorForm"));
            var t = l.val();
            ("" == t || " " == t) && (a = !0, l.addClass("errorForm"));
            var o = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i,
                i = n.val();
            if ("" == i || " " == i ? (n.addClass("errorForm"), a = !0) : o.test(i) || (n.addClass("errorForm"), a = !0), 1 == a) return !1;
            var d = c.serialize();
            return e.ajax({
                type: "POST",
                url: c.attr("action"),
                data: d,
                success: function(a) {
                    "SENDING" == a ? e("#success").fadeIn("slow") : e("#error").fadeIn("slow")
                }
            }), !1
        });
        var d = e(".thumbs"),
            m = e(".thumbs li a span"),
            u = e(".thumbs li a ");
        m.css({
            opacity: 0
        }), u.on("mouseenter", function() {
            e(this).children("span ").stop().animate({
                opacity: 1
            }, "slow")
        }, function() {
            e(this).children("span ").stop().animate({
                opacity: 0
            }, "slow")
        });
        for (var o = 0; o < d.length; o++) u.on("click", function() {
            return !1
        }), u.on("mouseenter", function() {
            u.hasClass("t-active") && (m.stop().animate({
                opacity: 0
            }, "slow"), u.removeClass("t-active")), e(this).addClass("t-active"), e(".testi-details .td").hide(), e(e(this).attr("href")).show()
        });
        var f = e(".inner-fact .count");
        e(".fact-list").appear(function() {
            for (var e = 0; e < f.length; e++) {
                var a = f.eq(e).html();
                f.eq(e).countTo({
                    from: 0,
                    to: a,
                    speed: 2e3,
                    refreshInterval: 10
                })
            }
        }), e().UItoTop({
            easingType: "easeOutQuart"
        });
        var p = e(".mobile-btn"),
            h = e("ul.menu"),
            v = (h.height(), e("ul.menu li a"));
        e(p).on("click", function() {
            return h.slideToggle(), v.addClass("mobile"), !1
        }), e(window).resize(function() {
            var a = e(window).width();
            a > 320 && h.is(":hidden") && (h.removeAttr("style"), v.removeClass("mobile"))
        }), h.on("click", function(a) {
            e(a.target).is("a") && e(a.target).hasClass("mobile") && (h.slideToggle(), v.removeClass("mobile"))
        }), e(window).load(function() {
            e(".loader-inner").fadeOut(), e(".loader").delay(200).fadeOut("slow");
            var a = e(".row.masonry");
            a.masonry({
                itemSelector: ".resume-boxe.masonry, .item-block.masonry"
            })
        })
    })
}(jQuery);