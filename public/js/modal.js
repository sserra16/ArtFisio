MicroModal.init();

function openModal() {
    MicroModal.show('modal-1');
}

var $pass = $("#pass")


if($pass.hasClass("active")) {
    $pass.attr("type", "text");
} else {
    $pass.attr("type", "password");
}


function showPass() {
    $pass.toggleClass("active");
}