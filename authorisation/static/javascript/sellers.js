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

const ctx = document.getElementById('sellersChart');

new Chart(ctx, {
    type: 'pie',
    data: {
        datasets: [{
            data: [6, 3, 3, 2.5, 3, 3, 3, 2.5, 74],
            borderWidth: 0,
            backgroundColor: [
                'rgba(0, 179, 236, 1)',
                'rgba(0, 194, 255, 1)',
                'rgba(67, 119, 255, 1)',
                'rgba(22, 60, 166, 1)',
                'rgba(26, 87, 255, 1)',
                'rgba(129, 18, 255, 1)',
                'rgba(161, 78, 255, 1)',
                'rgba(186, 125, 255, 1)',
                'rgba(229, 234, 252, 1)',
            ],
            rotation: 270,
        }]
    },
    options: {

    }
});