export const initialState = {
    lists: [
        { id: 1, title: 'roro' },
        { id: 2, title: 'koko' },
        { id: 3, title: 'lolo' },
    ],
    tasks: [
        { listID: 1, id: 1, title: 'roro', done: false },
        { listID: 1, id: 2, title: 'koko', done: false },
        { listID: 2, id: 3, title: 'ro', done: false },
        { listID: 2, id: 4, title: 'ko', done: false },
    ],
    model: {
        open: false,
    },
    selectedList: 1,
}