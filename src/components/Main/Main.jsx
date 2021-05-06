import { useFormik } from 'formik'
import React from 'react'
import MyTasks from './MyTasks'


const Main = (props) => {

    const formik = useFormik({
        initialValues: {
            task: ""
        },
        onSubmit: values => {
            console.log(values)
            props.addTask(values.task)
        }
    })

    let taskElements = props.TaskData.map(t => <MyTasks key={t.id} taskText={t.taskText}/>)

    return <div>
        <form onSubmit={formik.handleSubmit}>
            <input type="text" placeholder="Write new task" name="task" onChange={formik.handleChange} value={formik.values.task}/>
            <button type='submit'>Add</button>
        </form>
        <br></br>
        <hr></hr>
        <h4>My tasks</h4>
        {taskElements}
    </div>
}
export default Main