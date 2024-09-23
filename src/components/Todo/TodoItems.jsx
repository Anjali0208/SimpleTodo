import React, { useState } from "react";
import styles from './todoItems.module.css'

function TodoItems({ item, task, setTask }) {

    const handleDelete = (item) => {
        console.log('delete item');
        setTask(task.filter((todo) => todo != item))
    }

    const handlecompleted = (name) => {
        const newArray = task.map((todo) => todo.name === name ? { ...todo, done: !todo.done } : todo)
        setTask(newArray)
    }
    const complete = item.done ? styles.completed : "";

    return (

        <div className={styles.item}>
            <div className={styles.itemName}>
                <span className={complete} onClick={() => handlecompleted(item.name)}>{item.name}</span>
                <span>
                    <button onClick={() => { handleDelete(item) }} className={styles.deleteBtn}>x</button>
                </span>
            </div>
            <hr className={styles.line} />

        </div>
    );
}

export default TodoItems;
