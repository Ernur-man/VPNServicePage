const uls = document.querySelectorAll('.tarif ul'),
    nav = document.querySelectorAll('.plans nav'),
    select_plan = document.querySelectorAll('.tarif button'),
    Alert = document.querySelector('Alert'),
    win = document.querySelector('.window'),
    modal_window = document.querySelector('.modal_window'),
    get_btn = document.querySelector('.get')


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
            modal_window.style.display = 'flex'
            select_tarif = document.createElement('h3')
            select_tarif.textContent = el.children[1].textContent
            win.appendChild(select_tarif)
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
        win.innerHTML = ' '
    }
})



get_btn.addEventListener('click', ()=>{
    modal_window.style.display = 'flex'
    win.innerHTML = `<form>
                        <h2>Sign in</h2>
                        <input type="text" placeholder="Name">
                        <input type="text" placeholder="Phone number">
                        <button>Send</button>
                    </form>`
})