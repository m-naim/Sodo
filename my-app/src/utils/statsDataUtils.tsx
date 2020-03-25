/* eslint-disable no-param-reassign */
/* eslint-disable guard-for-in */
/* eslint-disable no-use-before-define */
/* eslint-disable no-restricted-syntax */
import { isThisWeek, isToday, isThisMonth } from 'date-fns';

function createData(stats: any) {
  let data: any = [];

  for (const key in stats) {
    data = [...data, creatRow(key, stats[key].day, stats[key].week, stats[key].month)];
  }
  return data;
}

function creatRow(type: string, day: number, week: number, month: number) {
  return {
    type, day, week, month,
  };
}

function WhenIs(type: string, date: string, t: any, stats: { [k: string]: any }) {
  if (isToday(new Date(t[date]))) { stats[type].day += 1; }
  if (isThisWeek(new Date(t[date]))) { stats[type].week += 1; }
  if (isThisMonth(new Date(t[date]))) { stats[type].month += 1; }
}

const statsExtractor = (tasks: any) => {
  const stats: { [k: string]: any } = {
    created: {
      day: 0,
      week: 0,
      month: 0,
    },
    done: {
      day: 0,
      week: 0,
      month: 0,
    },
  };
  tasks.forEach(
    (t: any) => {
      let type = 'created';
      let date = 'creation_date';
      WhenIs(type, date, t, stats);
      if (t.done) {
        type = 'done';
        date = 'done_date';
        WhenIs(type, date, t, stats);
      }
    },
  );

  return createData(stats);
};

export default statsExtractor;
