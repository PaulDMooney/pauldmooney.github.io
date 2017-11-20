import React from 'react';
import Scroll from 'react-scroll';
import style from './Navigation.scss';

class Navigation extends React.Component {



  render() {

    const links = this.props.navItems.map((navItem) =>
      (<Scroll.Link  href={navItem.link}
        to={navItem.link}
        key={navItem.link}
        offset={-100}
        activeClass={style.active}
        spy={true}
        className={style['nav-item']}
        smooth={true}
        duration={250}
        hashSpy={true}
        >{navItem.name}</Scroll.Link>)
    )

    return (
      <nav className={style.nav}>
        {links}
      </nav>
    )
  }

}

export default Navigation;
