import createCachedSelector from 're-reselect'
import createSelector from 'reselect'
export const getTasks = state =>state.tasks.data;
export const getListType = (state, listName) => listName;
export const getLists = state => state.lists.data;

export const getTasksForList = createCachedSelector(
    getTasks,
    getListType,
    (tasks, listName) => tasks.filter(task => task.status === listName)
)
(
    (tasks, listName) => listName
);

export const getVisibleNewCard = state => state.visibleListCreator;