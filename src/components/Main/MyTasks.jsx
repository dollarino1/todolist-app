import React, { useEffect, useState } from 'react'
import _uniqueId from 'lodash/uniqueId'

const MyTasks = (props) => {
    let [editMode, setEditMode] = useState(false)
    let [taskText, setTaskText] = useState(props.taskText)
    
    useEffect(() => {
        setTaskText(props.taskText)
    }, [props.taskText])

    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false)
        debugger
        props.updateTaskText(taskText)
    }
    const onTaskTextChange = (e) => {
        setTaskText(e.target.value)
    }
    const deleteTaskHandler = () => {
        props.setTodos(props.todos.filter(el => el.id !== props.todo.id))
    } 
    const completeTaskHandler = () => {
        
    }
    //generate random id for input and label(for proper work of css animation)
    const [id] = useState(_uniqueId('prefix-'))

    return (
        <> 
            {editMode
            ? <div className="main__task">
            <input onChange={onTaskTextChange} autoFocus={true} onBlur={deactivateEditMode}
            value={taskText} id={id} type="text" name="taskCheckbox"/>
            </div>
            : <div id='checklist' className="main__task">
            <input id={id} type="checkbox" name="taskCheckbox"/>
            <label onDoubleClick={activateEditMode} for={id} >{props.taskText}</label>
            <a className='close' onClick={deleteTaskHandler}></a>
            </div>
            }
        </>
    )
}
export default MyTasks