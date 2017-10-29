import React from 'react'
import Experience from './Experience'
import Skills from './Skills'
import Education from './Education'

function Resume({resume}) {
  return (
    <div>
      <h2>Technical Skills</h2>
      <Skills skills={resume.skills}/>

      <h2>Work Experience</h2>
      <Experience experience={resume.experience}/>

      <h2>Education</h2>
      <Education education={resume.education}/>
    </div>
  )
}

export default Resume;
