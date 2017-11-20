import React from 'react';
import styles from './Header.scss'

class Header extends React.Component {
  render() {
    return (
      <header className={styles.header}>
        <div className={styles.content}>
          <h1>Paul Mooney</h1>
          <ul>
            <li>Software Developer</li>
            <li>Technical Lead</li>
          </ul>
        </div>
      </header>
    )
  }
}

export default Header;
