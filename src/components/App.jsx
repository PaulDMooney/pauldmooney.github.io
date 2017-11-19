import React from 'react'
import Header from './Header'
import resumeData from '../data/resume'
import Resume from './resume/Resume'
import {resumeSections} from './resume/Resume'
import fp from 'lodash-fp'
import Section from './Section'
import styles from '../styles/app.scss';
import Navigation from './Navigation';

// const map = fp.map.convert({cap:false});
const sectionRenderer = fp.map((section) => {
  return (<Section title={section.name} key={section.name}/>)
});

class App extends React.Component {

  render() {

    const menuLinks = resumeSections.map((item) => {return {name: item.title, link: `${item.id}`}})

    return (
      <div className={styles.main}>
        <div className={styles.head}>
        <Header />
        </div>
        <div className={styles.navigation}>
          <Navigation navItems={menuLinks}/>
        </div>
        <div className={styles.content}>
        <Resume resume={resumeData}/>
        </div>
      </div>
    )
  }

  renderSections() {
    return sectionRenderer(resumeData.sections)

  }
}

export default App;
