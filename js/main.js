$(document).ready(function () {
    $('.partners-inner').slick({
        autoplay: true,
        autoplaySpeed: 2500,
        arrows: false,
        dots: true
    });

    var navItems = document.querySelectorAll(".mobile-bottom-nav__item");
    navItems.forEach(function (e, i) {
        e.addEventListener("click", function (e) {
            navItems.forEach(function (e2, i2) {
                e2.classList.remove("mobile-bottom-nav__item--active");
            })
            this.classList.add("mobile-bottom-nav__item--active");
        });
    });
//     $('.position').on('click', function(e){
//         e.preventDefault();
//         $('.position').removeClass('hover');
//         $(this).parent('.position').addClass('hover');
//     });

    //E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "../mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});
});