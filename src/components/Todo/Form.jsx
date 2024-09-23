import React, { useState } from 'react'
import styles from './form.module.css'

function Form({ setTask }) {
    const [todo, setTodo] = useState({ name: "", done: false })

    const handleAdd = (e) => {
        e.preventDefault()

        setTask((prev) => [...prev, todo])
        setTodo({ name: "", done: false })
    }
    return (
        <div >
            <form className={styles.todoForm} onSubmit={handleAdd}>
                <input className={styles.modernInput} type='text' value={todo.name} onChange={(e) => setTodo({ ...todo, name: (e.target.value) })} placeholder='Enter your task' />
                <button className={styles.modernButton} type='submit' >Add</button>
            </form>
        </div>
    )
}

export default Form