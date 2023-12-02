var imgbox1 = document.querySelector(".imgbox1")
var imgbox2 = document.querySelector(".imgbox2")
var imgbox3 = document.querySelector(".imgbox3")
var imgbox4 = document.querySelector(".imgbox4")
var imgbox5 = document.querySelector(".imgbox5")
var imgbox6 = document.querySelector(".imgbox6")
var heart1 = document.querySelector(".heart1")
var heart2 = document.querySelector(".heart2")
var heart3 = document.querySelector(".heart3")
var heart4 = document.querySelector(".heart4")
var heart5 = document.querySelector(".heart5")
var heart6 = document.querySelector(".heart6")
var redheart1 = document.querySelector(".redheart1")
var emptyredheart1 = document.querySelector(".emptyredheart1")
var emptyredheart2 = document.querySelector(".emptyredheart2")
var emptyredheart3 = document.querySelector(".emptyredheart3")
var emptyredheart4 = document.querySelector(".emptyredheart4")
var emptyredheart5 = document.querySelector(".emptyredheart5")
var emptyredheart6 = document.querySelector(".emptyredheart6")
var redheart2 = document.querySelector(".redheart2")
var redheart3 = document.querySelector(".redheart3")
var redheart4 = document.querySelector(".redheart4")
var redheart5 = document.querySelector(".redheart5")
var redheart6 = document.querySelector(".redheart6")
var number1 = document.querySelector(".number1")
var number2 = document.querySelector(".number2")
var number3 = document.querySelector(".number3")
var number4 = document.querySelector(".number4")
var number5 = document.querySelector(".number5")
var number6 = document.querySelector(".number6")






imgbox1.addEventListener("dblclick", function(){
    heart1.style.transform = `translate(-50%, -50%) scale(1)`
    heart1.style.opacity = "0.8"
    redheart1.style.color = "red"
    redheart1.style.display = "initial"
    emptyredheart1.style.display= "none"

    setTimeout(function(){
        heart1.style.opacity = "0"    

    }, 1000)

setTimeout(function(){
    heart1.style.transform = `translate(-50%, -50%) scale(0)`
},2000)
 
})

var number1likeCount = 0
function like1(){
++number1likeCount;
    number1.innerHTML =  number1likeCount
    }





    imgbox2.addEventListener("dblclick", function(){
        heart2.style.transform = `translate(-50%, -50%) scale(1)`
        heart2.style.opacity = "0.8"
        redheart2.style.color = "red"
        redheart2.style.display = "initial"
        emptyredheart2.style.display= "none"
    
    
        setTimeout(function(){
            heart2.style.opacity = "0"
        
        }, 1000)
    
    
    setTimeout(function(){
        heart2.style.transform = `translate(-50%, -50%) scale(0)`
    
    },2000)
     
    })
    
    
    var number2likeCount = 0
    function like2(){
    ++number2likeCount;
        number2.innerHTML =  number2likeCount
    
        }



        imgbox3.addEventListener("dblclick", function(){
            heart3.style.transform = `translate(-50%, -50%) scale(1)`
            heart3.style.opacity = "0.8"
            redheart3.style.color = "red"
            redheart3.style.display = "initial"
            emptyredheart3.style.display= "none"
        
        setTimeout(function(){
            heart3.style.opacity = "0"
        
        
        },1000)
        
        setTimeout(function(){
            heart3.style.transform = `translate(-50%, -50%) scale(0)`
        
        },2000)
        
        })
        
        var number3likeCount = 0
        function like3(){
        ++number3likeCount;
            number3.innerHTML =  number3likeCount
        
            }
        

            imgbox4.addEventListener("dblclick", function(){
                heart4.style.transform = `translate(-50%, -50%) scale(1)`
                heart4.style.opacity = "0.8"
                redheart4.style.color = "red"
                redheart4.style.display = "initial"
                emptyredheart4.style.display= "none"
            
            setTimeout(function(){
                heart4.style.opacity = "0"
            
            
            },1000)
            
            setTimeout(function(){
                heart4.style.transform = `translate(-50%, -50%) scale(0)`
            
            },2000)
            
            })
            
            var number4likeCount = 0
            function like4(){
            ++number4likeCount;
                number4.innerHTML =  number4likeCount
            
                }
            

                imgbox5.addEventListener("dblclick", function(){
                    heart5.style.transform = `translate(-50%, -50%) scale(1)`
                    heart5.style.opacity = "0.8"
                    redheart5.style.color = "red"
                    redheart5.style.display = "initial"
                    emptyredheart5.style.display= "none"
                
                setTimeout(function(){
                    heart5.style.opacity = "0"
                
                
                },1000)
                
                setTimeout(function(){
                    heart5.style.transform = `translate(-50%, -50%) scale(0)`
                
                },2000)
                
                })
                
                var number5likeCount = 0
                function like5(){
                ++number5likeCount;
                    number5.innerHTML =  number5likeCount
                
                    }
                

                    imgbox6.addEventListener("dblclick", function(){
                        heart6.style.transform = `translate(-50%, -50%) scale(1)`
                        heart6.style.opacity = "0.8"
                        redheart6.style.color = "red"
                        redheart6.style.display = "initial"
                        emptyredheart6.style.display= "none"
                    
                    setTimeout(function(){
                        heart6.style.opacity = "0"
                    
                    
                    },1000)
                    
                    setTimeout(function(){
                        heart6.style.transform = `translate(-50%, -50%) scale(0)`
                    
                    },2000)
                    
                    })
                    
                    var number6likeCount = 0
                    function like6(){
                    ++number6likeCount;
                        number6.innerHTML =  number6likeCount
                    
                        }
                    