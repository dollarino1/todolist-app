import { mainAPI } from "../api/api"

const ADD_TASK = 'ADD_TASK'

let initialState = {
    TaskData: [
        {id:0, taskText: 'First task', taskChecked: false},
    ],
    inputTaskText: ''
}

const mainReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TASK:
            let newTask = {
                id: 1,
                taskText: action.inputTaskText,
                taskChecked: false
            }
            return {
                ...state,
                TaskData: [...state.TaskData, newTask]
            }
    }
    return state;
}

export const addTask = (inputTaskText) => ({type: ADD_TASK, inputTaskText})

export const addTaskThunk = (taskText) => async (dispatch) => {
    let data = await mainAPI.addTask(taskText)
    if (data.resultCode === 0) {
        dispatch(addTask(description))
    }
}

export default mainReducer;