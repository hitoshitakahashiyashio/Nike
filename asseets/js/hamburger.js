document.querySelector('.toggle-menu').addEventListener
('click' , function () {
    this.classList.toggle('open');
    document.querySelector('.menu-bar').classList.toggle('open');
})