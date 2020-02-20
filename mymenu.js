function h() {
        var e = 0;
        t = $(window).height() / 2;
        i = $(document).scrollTop();
	$(window).scroll(function() {
                var o = $(document).scrollTop();
                a = $(".site-header");
                n = $(".openNav");
		o == e && (a.removeClass("yya"), n.removeClass("yya"), $(".lower").addClass("mymenu"));
                o > e && (a.addClass("yya"), n.addClass("yya"), $(".lower").removeClass("mymenu"));
                1600 > document.body.clientWidth && o > t && (a.addClass("gizle"), n.addClass("gizle"), o > i ? (a.removeClass("sabit"), n.removeClass("sabit")) : (a.addClass("sabit"), n.addClass("sabit")), i = o);
        })
}
h();
