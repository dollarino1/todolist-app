import { useFormik } from 'formik'
import React from 'react'
import MyTasks from './MyTasks'

const Main = (props) => {

    const formik = useFormik({
        initialValues: {
            task: ""
        },
        onSubmit: (values) => {
            console.log(values)
            props.setTodos([...props.todos, {taskText: values.task, completed: false, id: Math.random() * 1000}])
            formik.resetForm(formik.initialValues)
        },
        validate: values => {
            let errors = {}

            if(!values.task) {
                errors.task = "Required"
            }

            return errors
        }
    })

    let taskElements = props.todos.map((todo) => <MyTasks key={todo.id} taskText={todo.taskText} 
                                                        setTodos={props.setTodos} todos={props.todos} todo={todo}/>)

    return <div className="main__section">
        <form className="main__form" onSubmit={formik.handleSubmit}>
            <div className="Wrapper">
                <h1 className="Title">To-Do List App</h1>
                <div className="Input">
                    <input type="text" id="input" class="Input-text" name='task' 
                    onChange={formik.handleChange} value={formik.values.task}
                    placeholder="Write new task" autoComplete='off' />
                    <label for="input" class="Input-label">Your task</label>
                </div>
            </div>
        </form>
        <div className='main__tasklist'>
            <h2>My tasks</h2>
            {taskElements}
        </div>
    </div>
}
export default Main