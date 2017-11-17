import React from 'react';

class Navigation extends React.Component {



  render() {

    const links = this.props.navItems.map((navItem) => (<a href={navItem.link} key={navItem.link}>{navItem.name}</a>))

    return (
      <nav>
        {links}
      </nav>
    )
  }

}

export default Navigation;
