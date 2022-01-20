$(document).ready(function () { /* function of the form*/
    function init() {
        if (localStorage["name"]) {
            $('#name').val(localStorage["name"]);  /* write name here */
        }
        if (localStorage["email"]) {
            $('#email').val(localStorage["email"]);  /* write email here */
        }
        if (localStorage["message"]) {
            $('#message').val(localStorage["message"]); /* write email here */
        }
    }
    init();
});

$('.stored').change(function () {
    localStorage[$(this).attr('name')] = $(this).val();
});