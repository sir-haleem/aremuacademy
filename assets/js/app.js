
var appFunctions = {

    slider: function () {
        return $('.slider');
    },
    testimonials: function () {
        return $('.row.testimonials')
    },
    applicationForm: function () {
        return $('form#application');
    },
    applicationField: function () {
        return $('input#application');
    },
    contactForm: function () {
        var contact = $('form.contact-form');

        return contact;
    }



}

$(document).on('ready', function () {
    // console.log(appFunctions.applicationField().get().length);
    if (appFunctions.slider().get().length > 0) {
        $(".slider").slick({
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true
        });
    }

    if (appFunctions.testimonials().get().length > 0) {
        $(".row.testimonials").slick({
            arrows: false,
            dots: false,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true
        });
    }

    console.log(appFunctions.applicationForm());

    appFunctions.applicationForm().submit(function (evt) {
        var fieldLength = appFunctions.applicationField().val().length;
        if (fieldLength < 0) {
            evt.preventDefault();

            $('p.help-block').html('<small class="text-danger">*</small> Provide A Valid Jamb Number');
        }

        if (fieldLength < 10 || fieldLength > 10) {
            evt.preventDefault();

            $('p.help-block').html('<small class="text-danger">*</small> Your Jamb number should be 10 characters');
        }
    });

    appFunctions.contactForm().submit(function (evt) {

        

    });

});
