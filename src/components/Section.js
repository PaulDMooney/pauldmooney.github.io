import React from 'react'

class Section extends React.Component {

  render() {
    return(
      <section>
        <h2>{this.props.title}</h2>
      </section>
    )
  }

}

export default Section;
