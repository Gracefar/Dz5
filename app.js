 var div1 = document.querySelector(".div1");

 var btn = document.querySelector("button");

btn.addEventListener("click",function (){
var newDiv = document.createElement("div")

    var newContent = document.createTextNode("Welcome!")

    newDiv.appendChild(newContent)

    document.body.insertBefore(newDiv,div1)

});

  var bttn1 = document.querySelector(".bttn1").onclick = myClick;
  function myClick(){
    // get input получить элементы инпута
    // input - value //inner html получить запись текста в парный тег т.е ввести на экран запись полученную из инпута
    var a = document.querySelector(".ttn").value;
    console.log("Привет!");
    console.log(a);

  }

//   var div1 = document.querySelector(".div1");

//  var btn = document.querySelector("button");

//  btn.addEventListener("click",function (){
//     var newDiv = document.createElement("div")

//     var newContent = document.createTextNode("Welcome!")

//     newDiv.appendChild(newContent)

//     document.body.insertBefore(newDiv,div1)

// });




