import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import Main from './Main'
import { addTask, updateTaskText } from './../redux/mainReducer'

const MainContainer = (props) => {
    return (
        <Main {...props} />
    )
}

let mapStateToProps = (state) => {
    return {
        TaskData: state.mainPage.TaskData,
        taskText: state.mainPage.TaskData
    }
}
export default compose(
    connect(mapStateToProps, { addTask, updateTaskText })
)(MainContainer)