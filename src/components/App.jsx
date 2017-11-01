import React from 'react'
import Header from './Header'
import resume from '../data/resume'
import Resume from './resume/Resume'
import fp from 'lodash-fp'
import Section from './Section'
import styles from '../styles/app.scss';

// const map = fp.map.convert({cap:false});
const sectionRenderer = fp.map((section) => {
  return (<Section title={section.name} key={section.name}/>)
});

class App extends React.Component {
  render() {
    return (
      <div className={styles.main}>
        <div className={styles.head}>
        <Header />
        </div>
        <div className={styles.content}>
        <Resume resume={resume}/>
        </div>
      </div>
    )
  }

  renderSections() {
    return sectionRenderer(resume.sections)

  }
}

export default App;
