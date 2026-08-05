const uls = document.querySelectorAll('.tarif ul'),
    nav = document.querySelectorAll('.plans nav'),
    select_plan = document.querySelectorAll('.tarif button'),
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

document.querySelectorAll('.window form').forEach((form)=>{
    form.addEventListener('submit',(event)=>{
        event.preventDefault();

        const name = form.querySelector('input[type="text"]').value.trim();
        const phone = form.querySelectorAll('input[type="text"]')[1].value.trim();

        const nameRegex = /^[A-Za-zА-Яа-яЁё\s-]{2,30}$/;
        const phoneRegex = /^(\+7|8)\d{10}$/;

        if(!nameRegex.test(name)){
            alert("Enter correct name!")
            return;
        }
        if(!phoneRegex.test(phone)){
            alert("Enter correct phone!")
            return;
        }
        alert("success!")


        form.reset();
        setTimeout(()=>{
            modal_window.style.display = "none"
        },1000)
    })
})


modal_window.addEventListener('click', (e) => {
    if (e.target === modal_window) {
        modal_window.style.display = 'none';
    }
});

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
