$('#name2').tooltip({'trigger':'focus', 'title': 'Enter your Surname and Lastname'});
$('#email2').tooltip({'trigger':'focus', 'title': 'Enter a valid email addres like: <i>hello@swipii.com</i>'});
$('#password2').tooltip({'trigger':'focus', 'title': 'Password tooltip'});
$('#password2again').tooltip({'trigger':'focus', 'title': 'Password tooltip'});

$("#Welcome").addClass("show")


function isInView(elem){
    return $(elem).offset().top - $(window).scrollTop() - $(window).height()/2 < $(elem).height() ;
 }

 $(window).scroll(function(){
    if (isInView($('#info1'))) {
        $("#success-top").addClass("show")
        setTimeout(function(){
            if (isInView($('#info1'))) {
                $("#info1").addClass("show")
            }
        }, 300);
        setTimeout(function(){
            if (isInView($('#info1'))) {
                $("#warning1").addClass("show")
            }
        }, 600);
        setTimeout(function(){
            if (isInView($('#info1'))) {
                $("#danger1").addClass("show")
            }
        }, 900);
    } else {
        $("#info1").removeClass("show")
        $("#success-top").removeClass("show")
        $("#warning1").removeClass("show")
        $("#danger1").removeClass("show")
    }
 })
