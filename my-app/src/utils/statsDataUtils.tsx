import { isThisWeek, isToday, isThisMonth } from 'date-fns'

export const statsExtractor = (tasks: any) => {
    let stats: { [k: string]: any } = {
        created: {
            day: 0,
            week: 0,
            month: 0
        },
        done: {
            day: 0,
            week: 0,
            month: 0
        }
    };
    const doneTasks = tasks.filter((item: any) => item.done);
    tasks.forEach(
        (t: any) => {
            let type = 'created';
            let date = 'creation_date';
            WhenIs(type, date, t, stats)
            if (t.done) {
                type = 'done';
                date = 'done_date';
                WhenIs(type, date, t, stats)
            }

        }
    )

    return createData(stats);

}

function createData(stats: any) {
    let data: any = [];

    for (const key in stats)
        data = [...data, creatRow(key, stats[key].day, stats[key].week, stats[key].month)]
    return data;
}

function creatRow(type: string, day: number, week: number, month: number) {
    return { type, day, week, month }
}

function WhenIs(type: string, date: string, t: any, stats: { [k: string]: any }) {
    if (isToday(new Date(t[date])))
        stats[type].day++;
    if (isThisWeek(new Date(t[date])))
        stats[type].week++
    if (isThisMonth(new Date(t[date])))
        stats[type].month++

}