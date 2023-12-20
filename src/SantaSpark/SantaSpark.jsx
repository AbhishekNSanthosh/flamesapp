import React from 'react'
import styles from './SantaSpark.module.css'
import bg from '../assets/bg.png'

const SantaSpark = () => {
    return (
        <div className={styles.container}>
            <div className={styles.wrap}>
                <div className={styles.row}>
                    <input type="text" placeholder='Your name' className={styles.txtBox} />
                    <input type="text" placeholder="Partner's name" className={styles.txtBox} />
                </div>
                <div className={styles.row}>
                    <input type="text" placeholder='Your name' className={styles.txtBox} />
                    <input type="text" placeholder="Partner's name" className={styles.txtBox} />
                </div>
            </div>
        </div>
    )
}

export default SantaSpark