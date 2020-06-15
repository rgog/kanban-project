import {
    CREATE_TASK,
    DELETE_TASK,
    UPDATE_TASK,
    CREATE_LIST,
    DELETE_LIST,
    UPDATE_LIST,
    LOAD_TASKS_IN_PROGRESS,
    LOAD_TASKS_SUCCESS,
    LOAD_TASKS_FAILURE,
} from './actions'

const initialState = { isLoading: false, data: [] }

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
                data: state.data.filter(list=>list.id !== listToRemove.id)
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
        return {
            ...state,
            isLoading: false,
        };
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
                data: state.data.filter(task=>task.id !== taskToRemove.id)
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