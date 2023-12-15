let card = document.querySelectorAll('.card')
card.forEach(function (i) {
    i.addEventListener('click', function () { clicking(this) })
})

let name = "sathish";

localStorage.setItem("name",name)



function clicking(n) {

    

    let newtab = window.open('tab.html', '_blank')
    
      localStorage.setItem('index',n.id)
}

