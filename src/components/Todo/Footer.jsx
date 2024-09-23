import React from 'react'
import styles from './footer.module.css'

function Footer({ completedTask, totalTask }) {
    return (
        <div className={styles.footer} >
            <span className={styles.item}>Completed Task: {completedTask}</span>
            <span className={styles.item}>Total Task: {totalTask}</span>
        </div>
    )
}

export default Footer