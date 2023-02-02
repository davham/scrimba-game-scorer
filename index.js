let homeEl = document.getElementById("home-el")
let visitorEl = document.getElementById("visitor-el")



let homeScore = 0
let visitorScore = 0
    

function Haddone(){
    
    homeScore += 1
    homeEl.textContent = homeScore 

   }
   function Vaddone(){
    
    visitorScore += 1
    visitorEl.textContent = visitorScore 

   }

function Haddtwo(){
    homeScore += 2
    homeEl.textContent = homeScore 

}
function Vaddtwo(){
    visitorScore += 2
    visitorEl.textContent = visitorScore 

}

function Haddthree(){
    homeScore += 3
    homeEl.textContent = homeScore 

}
function Vaddthree(){
    visitorScore += 3
    visitorEl.textContent = visitorScore 

}

function reset(){
    homeEl.textContent = 0
    visitorEl.textContent = 0
    homeScore = 0
    visitorScore = 0
}