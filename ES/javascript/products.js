const minVal = document.querySelector(".min-val");
const maxVal = document.querySelector(".max-val");
const minToolTip = document.querySelector(".min-tooltip");
const maxToolTip = document.querySelector(".max-tooltip");
const minGap = 0.5;
const range = document.querySelector(".slider-track");
const silderMinValue = parseInt(minVal.min);
const silderMaxValue = parseInt(maxVal.max);

function slideMin() {
    let gap = parseInt(maxVal.value) - parseInt(minVal.value);
    if (gap <= minGap) {
        minVal.value = parseInt(maxVal.value) - minGap;
    }
    minToolTip.innerHTML = minVal.value;
    setArea();
}

function slideMax() {
    let gap = parseInt(maxVal.value) - parseInt(minVal.value);
    if (gap <= minGap) {
        maxVal.value = parseInt(minVal.value) + minGap;
    }
    maxToolTip.innerHTML = maxVal.value;
    setArea();
}

function setArea() {
    range.style.left = (minVal.value / silderMaxValue) * 100 + "% ";
    minToolTip.style.left = (minVal.value / silderMaxValue) * 100 + "% ";
    range.style.right = 100 - (maxVal.value / silderMaxValue) * 100 + "% ";
    maxToolTip.style.right = 90 - (maxVal.value / silderMaxValue) * 100 + "% ";
}

window.onload = function () {
    slideMin();
    slideMax();
}

document.querySelectorAll('.category__item').forEach((item) => {
    item.addEventListener('click', () => {
        item.classList.toggle('active');
    })
});

const toggleFilters = document.querySelector('.filters__button');
const filtersMain = document.querySelector('.filters__main');

toggleFilters.addEventListener('click', function () {
    filtersMain.classList.toggle('show');
})

document.querySelector('.mob-filters').addEventListener('click', function () {
    filtersMain.classList.toggle('show');
    filtersMain.classList.toggle('active');
    document.querySelector('body').classList.add('no-scroll');
    document.querySelector('header').style.background = "#F1F2F7";
    if (filtersMain.classList.contains('active')) {
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

    if (filtersMain.classList.contains('active')) {
        filtersMain.classList.remove('active');
    }
});