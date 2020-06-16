export const UPDATE_NEWCARD_VISIBILITY = 'UPDATE_NEWCARD_VISIBILITY'
export const updateNewcardVisibility = newCard => ({
    type:UPDATE_NEWCARD_VISIBILITY,
    payload: { newCard }
});

export const REMOVE_NEWCARD_VISIBILITY = 'REMOVE_NEWCARD_VISIBILITY'
export const removeNewcardVisibility = () => ({
    type:REMOVE_NEWCARD_VISIBILITY,
});

export const CREATE_TASK = 'CREATE_TASK'
export const createTask = (task, status) => ({
    type: CREATE_TASK,
    payload: { task, status }
});

export const DELETE_TASK = 'DELETE_TASK'
export const deleteTask = task => ({
    type: DELETE_TASK,
    payload: { task }
});

export const DELETE_TASKS_FOR_LIST = 'DELETE_TASKS_FOR_LIST'
export const deleteTasksForList = list => ({
    type: DELETE_TASKS_FOR_LIST,
    payload: { list }
});

export const UPDATE_TASK = 'UPDATE_TASK'
export const updateTask = task => ({
    type: UPDATE_TASK,
    payload: { task }
});

export const LOAD_TASKS_IN_PROGRESS = "LOAD_TASKS_IN_PROGRESS";
export const loadTasksInProgress = () => ({
    type: 'LOAD_TASKS_IN_PROGRESS',
});

export const LOAD_TASKS_SUCCESS = "LOAD_TASKS_SUCCESS"
export const loadTasksSuccess = tasks => ({
    type: 'LOAD_TASKS_SUCCESS',
    payload: { tasks }
});

export const LOAD_TASKS_FAILURE = "LOAD_TASKS_FAILURE"
export const loadTasksFailure = () => ({
    type: 'LOAD_TASKS_FAILURE',
});

export const CREATE_LIST = 'CREATE_LIST'
export const createList = list => ({
    type: CREATE_LIST,
    payload: { list }
});

export const DELETE_LIST = 'DELETE_LIST'
export const deleteList = list => ({
    type: DELETE_LIST,
    payload: { list }
});

export const UPDATE_LIST = 'UPDATE_LIST'
export const updateList = list => ({
    type: UPDATE_LIST,
    payload: { list }
});

export const LOAD_LISTS_IN_PROGRESS = "LOAD_LISTS_IN_PROGRESS";
export const loadListsInProgress = () => ({
    type: 'LOAD_LISTS_IN_PROGRESS',
});

export const LOAD_LISTS_SUCCESS = "LOAD_LISTS_SUCCESS"
export const loadListsSuccess = lists => ({
    type: 'LOAD_LISTS_SUCCESS',
    payload: { lists }
});

export const LOAD_LISTS_FAILURE = "LOAD_LISTS_FAILURE"
export const loadListsFailure = () => ({
    type: 'LOAD_LISTS_FAILURE',
});