var number;
var counter = 1;
//User Interface
$(document).ready(function() {
    $("#btn").click(function() {
        number = parseFloat($("#txt") .val());
        $(".datacollected").text("");
        generate();
        $("#txt").val("");
        counter = 1;
    });
});
