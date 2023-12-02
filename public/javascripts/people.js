 var btn = document.querySelector(".request")
var check = 0

btn.addEventListener("click", function(){
    if(check === 0){
        btn.innerHTML  = "Requested.."
        btn.style.fontWeight = "bold"
        btn.style.color = "red"
        check =1
    }else{
        btn.innerHTML  = "Send request."
        btn.style.fontWeight = "100"
        btn.style.color = "black"

        check = 0

    }
  

})