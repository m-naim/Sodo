import { makeStyles, Theme } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({

    small: {
        width: theme.spacing(4),
        height: theme.spacing(4),
    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        height: 224,
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
    },

    list: {
        width: '100%',
        minWidth: 260,
    },
}));