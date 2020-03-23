
export default interface stateContext {
    lists: Array<{ id: number, title: string }>,
    tasks: Array<{
        listId: number,
        payload: Array<{ id: number, title: string }>
    }>,
    selectedList: number
}