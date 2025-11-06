const uls = document.querySelectorAll('.tarif ul'),
    nav = document.querySelectorAll('.plans nav'),
    select_plan = document.querySelectorAll('.tarif button'),
    Alert = document.querySelector('Alert'),
    modal_window = document.querySelector('.modal_window'),
    get_btn = document.querySelector('.get'),
    signIn = document.querySelector(".signIn"),
    signUp = document.querySelector(".signUp"),
    modal_signUp =document.querySelector(".modal_signUp"),
    modal_tarif = document.querySelector(".showTarif"),
    windowTarif = document.querySelector(".windowTarif")



signIn.addEventListener("click",(el)=>{
     modal_window.style.display = 'flex'
    signIn.classList.add("activeBtn")
    signUp.classList.remove("activeBtn")
})

signUp.addEventListener("click", ()=>{
    modal_signUp.style.display = "flex"
    signIn.classList.remove("activeBtn")
    signUp.classList.add("activeBtn")
})



// CHECK TARIF 
const check = (a, el) =>{
    if (el.plan == uls[a].getAttribute('class')){
        const li = document.createElement('li')
        li.textContent = el.txt
        uls[a].appendChild(li)
    }   
}

fetch('data.json')
    .then(response => response.json())
    .then(data =>{
        data.forEach((el)=>{
            uls.forEach((ul, index) => {
                check(index, el);
            });

        })
    })

// SELECT TARIF PLAN
nav.forEach((el)=>{
    el.addEventListener('click', (element)=>{
        nav.forEach((x)=>{
            x.style.borderColor = ' rgba(128, 128, 128, 0.54)'
        })
        el.style.borderColor = 'red'
        const btn = element.target.tagName
        if(btn == 'BUTTON'){
            modal_tarif.style.display = 'flex'
            select_tarif = document.createElement('h3')
            message = document.createElement('p')
            message.textContent = "You chose " + el.children[1].textContent
            select_tarif.textContent = el.children[1].textContent
            windowTarif.appendChild(select_tarif)
            windowTarif.appendChild(message)
        }
    })
    el.addEventListener('dblclick',()=>{
        nav.forEach((x)=>{
            x.style.borderColor = ' rgba(128, 128, 128, 0.54)'
        })
    })
    
})


// OPEN THE MODAL WINDOW
modal_window.addEventListener('click', (el)=>{
    if(el.target.tagName != 'NAV' && el.target.tagName != 'INPUT'){
        modal_window.style.display = 'none'
    }
})

modal_signUp.addEventListener("click", (el)=>{
    if(el.target.tagName != 'NAV' && el.target.tagName != 'INPUT'){
        modal_signUp.style.display = 'none'
    }   
})


modal_tarif.addEventListener("click", (el)=>{
    if(el.target.tagName != 'NAV' && el.target.tagName != 'INPUT'){
        modal_tarif.style.display = 'none'
        windowTarif.innerHTML = ``
    }
})


get_btn.addEventListener('click', ()=>{
    modal_window.style.display = 'flex'
})