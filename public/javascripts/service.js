var arrow1 = document.querySelector(".arrow1")
var arrow2 = document.querySelector(".arrow2")
var servicebox = document.querySelector(".servicebox")
swapping = 0



arrow2.addEventListener("click", function(){
    swapping -= 200
    servicebox.scrollTo(swapping, 0)
})



arrow1.addEventListener("click", function(){
    swapping += 200
    servicebox.scrollTo(swapping, 0)
})

