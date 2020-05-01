document.querySelector('.open-menu').addEventListener('click', e => {           //mostra o bar no mobile
    document.querySelector('header .menu').classList.add('open');               //adiciona a classe open ao nav class="menu" do html
});

document.querySelector('.close-menu button').addEventListener('click', e => {   //mostra o bar no mobile
    document.querySelector('header .menu').classList.remove('open');            //remove a classe open ao nav class="menu" do html
});

document.querySelector('.menu .backdrop').addEventListener('click', e => {
    document.querySelector('header .menu').classList.remove('open');            //remove a classe open ao nav class="menu" do html
});