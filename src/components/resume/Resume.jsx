import React from 'react'
import Experience from './Experience'

function Resume({resume}) {
  return (
    <div>
      <Experience experience={resume.experience}/>
    </div>
  )
}

export default Resume;
