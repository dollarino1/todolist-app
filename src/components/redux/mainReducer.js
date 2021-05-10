const ADD_TASK = 'ADD_TASK'
const UPDATE_TASK_TEXT = 'UPDATE_TASK_TEXT'

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
                id: Math.random() * 1000,
                taskText: action.inputTaskText,
                taskChecked: false
            }
            return {
                ...state,
                TaskData: [...state.TaskData, newTask]
            }
        case UPDATE_TASK_TEXT:
            return {
                ...state,
                TaskData: [...state.TaskData, state.TaskData.filter(el => el.id !== state.TaskData.id)]
            }
    }
    return state;
}

export const addTask = (inputTaskText) => ({type: ADD_TASK, inputTaskText})
export const updateTaskText = (taskText) => ({type: UPDATE_TASK_TEXT, taskText})

export default mainReducer;