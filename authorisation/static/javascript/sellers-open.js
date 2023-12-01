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

const ctx = document.getElementById('productChart');
new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
        datasets: [{
            label: 'Продажи',
            data: [1000, 3000, 2400, 2500, 1500, 2000, 4000, 2500, 3000, 3500, 1500, 2400, 1200, 1000, 3900],
            borderWidth: 2,
            tension: 0.5,
            borderColor: '#1C92FF',
            pointRadius: 0,
            fill: true,
            backgroundColor: (context) => {
                const bgColor = [
                    'rgba(28, 146, 255, .6)',
                    'rgba(202, 223, 255, .5)',
                    'rgba(255, 255, 255, .2)',
                ];

                if (!context.chart.chartArea) {
                    return;
                }

                const { ctx, data, chartArea: { top, bottom } } = context.chart;
                const gradientBg = ctx.createLinearGradient(0, top, 0, bottom);
                gradientBg.addColorStop(0, bgColor[0])
                gradientBg.addColorStop(0.5, bgColor[1])
                gradientBg.addColorStop(1, bgColor[2])
                return gradientBg;
            }
        }]
    },
    options: {
        interaction: {
            mode: 'index',
            intersect: false,
        },
        responsive: true,
        maintainAspectRatio: false,

        scales: {
            x: {
                border: {
                    display: true,
                },
                grid: {
                    display: false,
                },
                ticks: {
                    font: {
                        size: 14,
                        family: 'Inter',
                    }
                }
            },
            y: {
                beginAtZero: true,
                position: 'right',
                min: 0,
                max: 4000,
                ticks: {
                    stepSize: 1000,
                    callback: function (value) {
                        let ranges = [
                            { divider: 1e6, suffix: 'M' },
                            { divider: 1e3, suffix: 'k' }
                        ];
                        function formatNumber(n) {
                            for (let i = 0; i < ranges.length; i++) {
                                if (n >= ranges[i].divider) {
                                    return (n / ranges[i].divider).toString() + ranges[i].suffix;
                                }
                            }
                            return n;
                        }
                        return formatNumber(value);
                    },
                    font: {
                        size: 16,
                        family: 'Inter',
                    }
                },
                grid: {
                    color: '#F4F4F4',
                },
            },
        },
        datasets: {
            line: {
                pointRadius: 0 // disable for all `'line'` datasets
            }
        },
        elements: {
            point: {
                radius: 0 // default to disabled in all datasets
            }
        },
        plugins: {
            title: {
                display: false,
            },
            legend: {
                display: false,
            },
        }
    }
});

const ctx2 = document.getElementById('brandsChart');

new Chart(ctx2, {
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