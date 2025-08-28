var a = document.querySelector("#btn1")
var b = document.querySelector("#btn2")
var c = document.querySelector("#btn3")
var d = document.querySelector("#btn4")
var e = document.body
a.addEventListener("click",function(){
   e.style.background = "linear-gradient(90deg,rgba(42, 123, 155, 1) 0%, rgba(87, 199, 133, 1) 50%, rgba(237, 221, 83, 1) 100%)"
})
b.addEventListener("click",function(){
   e.style.background = "radial-gradient(circle,rgba(63, 94, 251, 1) 0%, rgba(252, 70, 107, 1) 100%)"
})
c.addEventListener("click",function(){
   e.style.background = "linear-gradient(90deg,rgba(131, 58, 180, 1) 0%, rgba(253, 29, 29, 1) 50%, rgba(252, 176, 69, 1) 100%)"
})
d.addEventListener("click",function(){
   e.style.background = "radial-gradient(circle,rgba(143, 171, 67, 1) 0%, rgba(148, 187, 233, 1) 100%)"
})


