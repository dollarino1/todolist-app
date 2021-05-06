import React from 'react'

const MyTasks = (props) => {
    return <div>
        <input type="checkbox" name="taskCheckbox" id=""/>
        <span>{props.taskText}</span>
    </div>
}
export default MyTasks