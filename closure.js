//diffrence between var and let in closure


// 1.............................
// function x() {
//     for(var i=0;i<5;i++){
//         setTimeout(function(){
//             console.log(i);
//         }, 1000);
// }
//     console.log("first line ");
// }
// x();




//2............................
// function x() {
//     for(let i=0;i<5;i++){
//         setTimeout(function(){
//             console.log(i);
//         }, 1000);
// }
//     console.log("first line ");
// }
// x();




//3..............................
function x() {
    for (var i = 0; i < 5; i++) {
        function y(x) {
            setTimeout(function () {
                console.log(x);
            }, 1000);
        }
        y(i);
    }
    console.log("first line ");
}
x();





//...................................closure example
// function x(){
//     var a=5;
//     function y(){
//         console.log(a);
//     }
//     a = 10;
//     y();
// }
// x();