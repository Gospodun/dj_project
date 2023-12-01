const ctx = document.getElementById('brandsChart');

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