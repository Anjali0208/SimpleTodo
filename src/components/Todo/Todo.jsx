import React, { useState } from 'react'
import Form from './Form'
import TodoList from './TodoList'
import Footer from './Footer'

function Todo() {
    const [task, setTask] = useState([])
    const completedTask = task.filter((todo) => todo.done).length
    const totalTask = task.length

    return (
        <div>
            <Form setTask={setTask} />
            <TodoList task={task} setTask={setTask} />
            <Footer completedTask={completedTask} totalTask={totalTask} />
        </div>
    )
}

export default Todo 