//Business Logic

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