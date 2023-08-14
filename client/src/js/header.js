/*############### CREATE HEADER ###############*/
const createHeader = () => {
    let header = document.querySelector('.header');

    header.innerHTML = `
        <nav class="nav container">
            <a href="#home" class="nav__logo">
                store
            </a>

            <div class="nav__menu" id="nav-menu">
                <ul class="nav__list">
                    <li class="nav__item">
                        <a href="" class="nav__link">Home</a>
                    </li>

                    <li class="nav__item">
                        <a href="" class="nav__link">Services</a>
                    </li>

                    <li class="nav__item">
                        <a href="" class="nav__link">Products</a>
                    </li>

                    <li class="nav__item">
                        <a href="" class="nav__link">Contact us</a>
                    </li>
                </ul>

                <div class="nav__close" id="nav-close">
                    <i class="ri-close-line"></i>
                </div>
            </div>

            <div class="nav__toggle" id="nav-toggle">
                <i class="ri-menu-line"></i>
            </div>
        </nav>
    `;
}

createHeader();

/*############### SHOW MOBILE MENU ###############*/
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

if(navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    })
}

if(navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    })
}

const navLink = document.querySelectorAll('.nav__link');

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu');

    navMenu.classList.remove('show-menu');
}

navLink.forEach(n => n.addEventListener('click', linkAction));