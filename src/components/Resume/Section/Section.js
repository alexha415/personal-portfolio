import React from 'react'
import styles from './Section.module.css';

const Section = ({title, items}) => {
  return (
    <div className={`${styles.section} flex-row`}>
      <div className={`${styles.card} flex-col`}>
        <span className={`${styles.cardHeader}`}><h4>{title}</h4></span>
        <div className={styles.cardBody}>
          <ul className = {styles.list}>
            {items.map(item => {
              return (
                <li><span className={styles.listText} key={item}>{item}</span></li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Section
