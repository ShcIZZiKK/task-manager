const declensions = ['Проект', 'Проекта', 'Проектов'];

export const options = {
    maintainAspectRatio: false,
    layout: {
        padding: {
            top: 16,
            bottom: 16,
            right: 20,
            left: 0,
        },
    },
    scales: {
        y: {
            beginAtZero: false,
            ticks: {
                major: false,
                padding: 16,
                stepSize: 1,
                color: '#141522',
                font: {
                    size: 12,
                    weight: '500',
                    family: '"Rubik", sans-serif',
                },
            },
            grid: {
                drawBorder: false,
                display: false,
            },
        },
        x: {
            ticks: {
                major: false,
                color: '#141522',
                font: {
                    size: 12,
                    weight: '500',
                    family: '"Rubik", sans-serif',
                },
            },
            grid: {
                drawBorder: false,
                color: '#F5F5F7',
            },
        },
    },
    elements: {
        point: {
            backgroundColor: '#FFFFFF',
            borderWidth: 4,
            hoverBorderWidth: 4,
            borderColor: '#546FFF',
            radius: 0,
            hoverRadius: 8,
            hitRadius: 16,
        },
        line: {
            borderWidth: 3,
            borderColor: '#141522',
        },
    },
    plugins: {
        tooltip: {
            callbacks: {
                title: () => {},
                label: ({ formattedValue }) => {
                    const value = Number(formattedValue);

                    if (!value) {
                        return 'Пусто';
                    }

                    const word =
                        value === 1
                            ? declensions[0]
                            : value > 1 && value < 5
                            ? declensions[1]
                            : declensions[2];

                    return `${value} ${word}`;
                },
            },
            bodyFont: {
                size: 14,
                weight: '700',
                family: '"Rubik", sans-serif',
            },
            padding: {
                top: 8,
                right: 18,
                bottom: 8,
                left: 18,
            },
            backgroundColor: '#141522',
            displayColors: false,
        },
        legend: {
            labels: {
                padding: 10,
                boxWidth: 20,
                boxHeight: 20,
                color: '#141522',
                font: {
                    size: 14,
                    weight: '500',
                    family: '"Rubik", sans-serif',
                },
            },
        },
    },
};
