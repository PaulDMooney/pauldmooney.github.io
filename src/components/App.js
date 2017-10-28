import React from 'react'
import Header from './Header'
import resume from '../data/resume'
import fp from 'lodash-fp'
import Section from './Section'

// const map = fp.map.convert({cap:false});
const sectionRenderer = fp.map((section) => {
  return (<Section title={section.name} key={section.name}/>)
});

class App extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        {this.renderSections()}
      </div>
    )
  }

  renderSections() {
    return sectionRenderer(resume.sections)

  }
}

export default App;
