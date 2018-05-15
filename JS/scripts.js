<script>
function fizzBuzz(number){
    var numbers=[]
    for (var i=0;i<100;i++){
    if((i%3===0)&&(i%5===0)){
        numbers.push("FizzBuzz");
    }
    else if(1%5===0){
        numbers.push("buzz");
    }  
    else if(1%3===0){
        numbers.push("fizz");
        }
    else{
        numbers.push(i);
}}}