AOS.init();
function sendMail (){
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("msg").value;
    var tempParams = {
        from_name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("msg").value
    };
    
    if(name != "" && email != "" && message != "") {
        emailjs.send('gmail', 'template_m0gh9ca', tempParams)
    .then(function(){
        alert("SENDED");
        document.getElementById("name").value="";
        document.getElementById("email").value="";
        document.getElementById("msg").value=""
    })
    } else {
        document.getElementById("name").setAttribute('placeholder', 'ENTER YOUR NAME');
        document.getElementById("email").setAttribute('placeholder', 'ENTER YOUR EMAIL');
        document.getElementById("msg").setAttribute('placeholder', 'ENTER YOUR MESSAGE')
    }
    
}

const menuBtn = document.querySelector('.burger_menu');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
        mobile_menu = document.querySelector('.mobile_menu');
        mobile_menu.classList.add('active');
        mobile_menu_links = document.querySelectorAll('.mobile_menu_links');
        mobile_menu_links.addEventListener('click', () => {
            document.querySelector('.mobile_menu').classList.remove('active')
        })

    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
        mobile_menu = document.querySelector('.mobile_menu').classList.remove('active')
    }
})