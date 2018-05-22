//Business Logic
var numbers = [];
function PingPong(number){
    for (var i = 1; i <= number; i++){
        if ((i % 3 === 0)&&(i % 5 ===0)){
            numbers.push("pingpong")
        } else if (i % 3 === 0) {
            numbers.push("ping")
        } else if (i % 5 === 0) {
            numbers.push("pong")
        } else {
            numbers.push(i)
        }
    }
    return numbers;
}

//User-Interface Logic
$(document).ready(function(){
    $("form#pingpong").submit(function(event){
        event.preventDefault();

        $("ul#outcome").empty();
        var number = ($("input#number").val());

        var result = PingPong(number)
        for (var index = 0; index < result.length; index += 1){
            $("ul#outcome").append("<li>"+result+"</li>")
        }
    });
});