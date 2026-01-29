export interface TableRow{
    id: number,
    name: string,
    currentDay: number,
    yesterday: {
        value: number,
        percent: number
    },
    sameWeekday: number
}

// Фиксированные данные для таблицы
export const tableData: TableRow[] = [
    {
        id: 1,
        name: 'Выручка, руб',
        currentDay: 500_521,
        yesterday: {
            value: 480_521,
            percent: 4
        },
        sameWeekday: 4_805_121
    },

    {
        id: 2,
        name: 'Наличные',
        currentDay: 300_000,
        yesterday: {
            value: 300_000,
            percent: 0
        },
        sameWeekday: 300_000
    },
    
    {
        id: 3,
        name: 'Безналичный расчет',
        currentDay: 100_000,
        yesterday: {
            value: 100_000,
            percent: 0
        },
        sameWeekday: 100_000
    },
    
    {
        id: 4,
        name: 'Кредитные карты',
        currentDay: 100_521,
        yesterday: {
            value: 100_521,
            percent: 0
        },
        sameWeekday: 100_521
    },
    
    {
        id: 5,
        name: 'Средний чек, руб',
        currentDay: 1300,
        yesterday: {
            value: 900,
            percent: 44
        },
        sameWeekday: 900
    },
    
    {
        id: 6,
        name: 'Средний гость, руб',
        currentDay: 1200,
        yesterday: {
            value: 800,
            percent: 50
        },
        sameWeekday: 800
    },
    
    {
        id: 7,
        name: 'Удаление из чека (после оплаты), руб',
        currentDay: 1000,
        yesterday: {
            value: 1000,
            percent: -9
        },
        sameWeekday: 900
    },
    
    {
        id: 8,
        name: 'Удаление из чека (до оплаты), руб',
        currentDay: 1300,
        yesterday: {
            value: 1300,
            percent: 0
        },
        sameWeekday: 900
    },
    
    {
        id: 9,
        name: 'Количество чеков',
        currentDay: 34,
        yesterday: {
            value: 36,
            percent: -6
        },
        sameWeekday: 34
    },
    
    {
        id: 10,
        name: 'Количество гостей',
        currentDay: 34,
        yesterday: {
            value: 36,
            percent: -6
        },
        sameWeekday: 32
    },
]