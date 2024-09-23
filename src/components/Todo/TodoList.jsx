import React from "react";
import TodoItems from "./TodoItems";
import styles from "./todoList.module.css";

export default function TodoList({ task, setTask }) {
    const sortedTask = task.slice().sort((a, b) => Number(a.done) - Number(b.done))
    return (
        <div className={styles.todoList}>
            {sortedTask.map((item) => (
                <TodoItems key={item.name} item={item} setTask={setTask} task={task} />
            ))}
        </div>
    );
}
