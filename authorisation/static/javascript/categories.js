document.querySelectorAll('.category__item').forEach((item) => {
    item.addEventListener('click', () => {
        item.classList.toggle('active');
    })
});

document.querySelector('.categories__switch-filters').addEventListener('click', function () {
    document.querySelector('.category__mobile-filters').classList.toggle('active');
    document.querySelector('body').classList.add('no-scroll');
    if (document.querySelector('.category__mobile-filters').classList.contains('active')) {
        document.querySelector('#cabinet-burger').classList.add('active');
    }
});

document.querySelector('#cabinet-burger').addEventListener('click', function () {
    if (document.querySelector('#cabinet-burger').classList.contains('active')) {
        this.classList.remove('active');
        document.querySelector('.cabinet__sidebar').classList.remove('active');
        document.querySelector('body').classList.remove('no-scroll');
        document.querySelector('header').style.background = "none";
    } else {
        this.classList.add('active');
        document.querySelector('.cabinet__sidebar').classList.add('active');
        document.querySelector('body').classList.add('no-scroll');
        document.querySelector('header').style.background = "#F1F2F7";
    }

    if (document.querySelector('.category__mobile-filters').classList.contains('active')) {
        document.querySelector('.category__mobile-filters').classList.remove('active');
    }
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