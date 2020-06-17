import {
    CREATE_TASK,
    DELETE_TASK,
    UPDATE_TASK,
    CREATE_LIST,
    DELETE_LIST,
    UPDATE_LIST,
    UPDATE_NEWCARD_VISIBILITY,
    REMOVE_NEWCARD_VISIBILITY,
    DELETE_TASKS_FOR_LIST,
    LOAD_TASKS_IN_PROGRESS,
    LOAD_TASKS_SUCCESS,
    LOAD_TASKS_FAILURE,
} from './actions'

const initialState = { isLoading: false, data: [] }

export const visibleListCreator = (state='', action) =>{
    const { type, payload } = action;
    switch (type) {
        case UPDATE_NEWCARD_VISIBILITY:{
            const { newCard } = payload;
            return newCard;
        }
        case REMOVE_NEWCARD_VISIBILITY:{
            return "";
        }
        default:
            return state;
    }
}

export const lists = (state = initialState, action) =>{
    const { type, payload} = action;
    switch(type) {
        case CREATE_LIST: {
            const { list } = payload
            return{
                ...state,
                data: state.data.concat(list)
            }
        }
        case DELETE_LIST: {
            const { list: listToRemove } = payload
            return{
                ...state,
                data: state.data.filter(list=>list !== listToRemove)
            };
        }
        case UPDATE_LIST: {
            const { list: listToUpdate } = payload
            return{
                ...state,
                data: state.data.map(list=>{
                    if(list.id === listToUpdate.id){
                        return listToUpdate;
                    }
                    return list;
                }),
            };
        }
        default:
        return state;
    }
}

export const tasks = (state = initialState, action) => {
    const { type, payload} = action;
    switch(type) {
        case CREATE_TASK: {
            const { task, status } = payload
            const newTask = {
                task,
                status
            }
            return{
                ...state,
                data: state.data.concat(newTask)
            }
        }
        case DELETE_TASK: {
            const { task: taskToRemove } = payload
            return{
                ...state,
                data: state.data.filter(task=>task.task !== taskToRemove.task)
            };
        }
        case DELETE_TASKS_FOR_LIST: {
            const { list: listToRemove } = payload
            return{
                ...state,
                data: state.data.filter(task=>task.status !== listToRemove)
            };
        }
        case UPDATE_TASK: {
            const { task: taskToUpdate } = payload
            return{
                ...state,
                data: state.data.map(task=>{
                    if(task.id === taskToUpdate.id){
                        return taskToUpdate;
                    }
                    return task;
                }),
            };
        }
        default:
        return state;
    }
}