import { createCachedSelector } from 're-reselect'
export const getTasks = state =>state.tasks.data;
const getListType = (state, ownProps) => ownProps.listName;
export const getLists = state => state.lists.data;

export const getTasksForList = createCachedSelector(
    getTasks,
    getListType,
    (tasks, listName) => tasks.filter(task => task.status === listName)
)
(
    (tasks, listName) => listName
);
