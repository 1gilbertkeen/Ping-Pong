var number;
var counter = 1;
//User Interface
$(document).ready(function() {
    $("#btn").click(function() {
        number = parseFloat($("#txt") .val());
        $(".data").text("");
        generate();
        $("#txt").val("");
        counter = 1;
    });
});

//Business Logic
function generate() {
    while(counter <= number){
        if (((counter % 3)==0 && ((counter % 5)==0)){
            $(".data").append("<li>pingpong</li>");
        }
        else if ((counter % 3)==0){
            $(".data").append("<li>ping</li>");
        }
        else if ((counter % 5)== 0){
            $(".data").append("<li>pong</li>");
        }
        else {
            $(".data").append("<li>"+counter+"</li>")
        }
        counter += 1;
    }
}