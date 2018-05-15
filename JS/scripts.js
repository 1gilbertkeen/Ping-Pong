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

//Business Logic
function generate() {
    while(counter <= number){
        if (((counter % 3)==0 && ((counter % 5)==0)){
            $(".datacollected").append("<li>pingpong</li>")
        }
        else if ((counter % 3)==0){
            $(".datacollected").append("<li>ping</li>")
        }
        else if ((counter))
    }
}