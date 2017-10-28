import React from 'react';
import styles from '../styles/header.scss'

class Header extends React.Component {
  render() {
    return (
      <header className={styles.header}>
        <h1 className='override'>Paul Mooney</h1>
      </header>
    )
  }
}

export default Header;
