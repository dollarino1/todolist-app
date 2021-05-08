import React from 'react'

const MyTasks = (props) => {
    return <div id='checklist' className="main__task">
        <input type="checkbox" name="taskCheckbox" id=""/>
        <label>{props.taskText}</label>
    </div>
}
export default MyTasks