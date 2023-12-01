document.querySelector('#cabinet-burger').addEventListener('click', function () {
    this.classList.toggle('active');
    document.querySelector('.cabinet__sidebar').classList.toggle('active');
    document.querySelector('body').classList.toggle('no-scroll');

    if (document.querySelector('#cabinet-burger').classList.contains('active')) {
        document.querySelector('header').style.background = "#F1F2F7";
    } else {
        document.querySelector('header').style.background = "none";
    }
});


const periodItem = document.querySelectorAll('.period__item');
const periodSwitch = document.querySelectorAll('.period__switch');
const analyticsBtn = document.querySelectorAll('.analytics__btn');
const favoriteOption = document.querySelectorAll('.favorite__option');

function changeActive(setting, item) {
    item.addEventListener('click', function () {
        // Удаляем класс "active" у всех блоков
        setting.forEach(function (b) {
            b.classList.remove('active');
        });

        // Присваиваем класс "active" блоку, на который нажали
        this.classList.add('active');
    });
};

favoriteOption.forEach(function (block) {
    changeActive(favoriteOption, block);
});

periodItem.forEach(function (block) {
    changeActive(periodItem, block);
});

periodSwitch.forEach(function (block) {
    changeActive(periodSwitch, block);
});

analyticsBtn.forEach(function (block) {
    changeActive(analyticsBtn, block);
});

const dropdownItems = document.querySelectorAll('.dropdown__block');

dropdownItems.forEach(block => {
    const dropdownTitle = block.querySelector('.dropdown__title');
    const dropItems = block.querySelectorAll('.drop-item');

    dropItems.forEach(dropItem => {
        dropItem.addEventListener('click', function () {
            const dataTitle = dropItem.textContent;
            dropdownTitle.textContent = dataTitle;
        });
    });
});

document.querySelectorAll('.category__item').forEach((item) => {
    item.addEventListener('click', () => {
        item.classList.toggle('active');
    })
});

window.onscroll = function () {
    if (window.scrollY > document.querySelector('.product__page-breadcrumbs').clientHeight + 65) {
        document.querySelector('.sidebar__inner').classList.add('scroll');
    } else {
        document.querySelector('.sidebar__inner').classList.remove('scroll');
    }
};
