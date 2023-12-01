lightGallery(document.getElementById('lightgallery'), {
    speed: 500,
});

document.querySelectorAll('.category__item').forEach((item) => {
    item.addEventListener('click', () => {
        item.classList.toggle('active');
    })
});

const swiper = new Swiper('.swiper3', {
    loop: true,
    slidesPerView: 'auto',
    slidesPerColumn: 1,
    spaceBetween: 20,
});

// Chart
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

window.onscroll = function () {
    if (window.scrollY > document.querySelector('.product__page-breadcrumbs').clientHeight + 65) {
        document.querySelector('.sidebar__inner').classList.add('scroll');
    } else {
        document.querySelector('.sidebar__inner').classList.remove('scroll');
    }
};

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

// Chart
const ctx2 = document.getElementById('ordersChart');
new Chart(ctx2, {
    type: 'line',
    data: {
        labels: ['1 Окт', '3 Окт', '7 Окт', '10 Окт', '14 Окт', '20 Окт', '23 Окт', '27 Окт', '30 Окт'],
        datasets: [
            {
                label: 'Заказы',
                data: [1600, 2600, 2000, 3800, 1400, 500, 1500, 3900],
                borderWidth: 2,
                borderColor: '#4A3AFF',
                pointStyle: 'circle',
                pointRadius: 6,
                pointHoverRadius: 7,
                backgroundColor: 'rgba(255,255,255,1)',
            },
            {
                label: 'Продажи',
                data: [0, 1000, 1500, 1000, 2800, 3800, 2900, 3600, 2000],
                borderWidth: 2,
                borderColor: '#C893FD',
                pointStyle: 'circle',
                pointRadius: 6,
                pointHoverRadius: 7,
                backgroundColor: 'rgba(255,255,255,1)',
            },
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        interaction: {
            mode: 'index',
            intersect: false,
        },
        stacked: false,
        plugins: {

        },
        scales: {
            x: {
                border: {
                    display: false,
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
                type: 'linear',
                display: true,
                position: 'left',
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
        }
    },
});

document.querySelector('#cabinet-burger').addEventListener('click', function () {
    this.classList.toggle('active');
    document.querySelector('.cabinet__sidebar').classList.toggle('active');
    document.querySelector('body').classList.toggle('no-scroll');

    if (document.querySelector('#cabinet-burger').classList.contains('active')) {
        document.querySelector('header').style.background = "#F1F2F7";
    } else {
        document.querySelector('header').style.background = "none";
    }
})


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
