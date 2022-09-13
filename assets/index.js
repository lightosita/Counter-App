

function showDate(){
  var time = document.getElementById("time");
  time.innerHTML =Date();  
}


// making the count add function


let countEl =document.getElementById("count-el")
let saveEl =document.getElementById("save-el")


let count = 0

function addCount(){
  count +=1
   countEl.textContent= count
}



function saveCount(){
  let countStr = count + "-"
  saveEl.textContent += countStr
  countEl.textContent = 0
  count = 0

}

{/* <script>
    const menu = document.querySelector('.menu')
    const close = document.querySelector('.close')
    const nav = document.querySelector(nav)

    menu.addEventListener('click', () => 
    {
      nav.classList.add('open-nav')
    })

    close.addEventListener('click', () => 
    {
      nav.classList.remove('open-nav')
    })
    
  </script> */}



  


  