import React from 'react';
import { Paper, Typography } from '@material-ui/core';
import { useContextValue } from '../shared/AppContextProvider';
import { isThisWeek, isToday, isThisMonth } from 'date-fns'

const StatesBar = () => {
    const [{ tasks, selectedList }, dispatch] = useContextValue();


    const doneTasks = tasks.filter((item: any) => item.done);

    const stats = {

        created: {
            today: tasks.filter((item: any) => isToday(new Date(item.creation_date))).length,
            week: tasks.filter((item: any) => isThisWeek(new Date(item.creation_date))).length,
            month: tasks.filter((item: any) => isThisMonth(new Date(item.creation_date))).length,
        },
        done: {
            today: doneTasks.filter((item: any) => isToday(new Date(item.creation_date))).length,
            week: doneTasks.filter((item: any) => isThisWeek(new Date(item.creation_date))).length,
            month: doneTasks.filter((item: any) => isThisMonth(new Date(item.creation_date))).length,
        }
    }

    return (
        <Paper className="rigth-container">
            <Paper square elevation={1}>
                <Typography align='center' variant="h4" gutterBottom>
                    welcom Naim!
              </Typography>
            </Paper>
            <Paper square elevation={1}>
                <Typography align='center' variant="h4" gutterBottom>
                    Stats
              </Typography>
                <Typography align='center' variant="h4" gutterBottom>
                    created
              </Typography>
                <Typography align='center' variant="h5" gutterBottom>
                    today:{stats.created.today}
                </Typography>
                <Typography align='center' variant="h5" gutterBottom>
                    this week:{stats.created.week}
                </Typography>
                <Typography align='center' variant="h5" gutterBottom>
                    this month:{stats.created.month}
                </Typography>
                <Typography align='center' variant="h4" gutterBottom>
                    Done
              </Typography>
                <Typography align='center' variant="h5" gutterBottom>
                    today: {stats.done.today}
                </Typography>
                <Typography align='center' variant="h5" gutterBottom>
                    this week:{stats.done.week}
                </Typography>
                <Typography align='center' variant="h5" gutterBottom>
                    this month:{stats.done.month}
                </Typography>
            </Paper>
        </Paper>
    );
}

export default StatesBar;