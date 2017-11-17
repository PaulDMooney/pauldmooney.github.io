import React from 'react'
import Experience from './Experience'
import Skills from './Skills'
import Education from './Education'
import ScrollableAnchor from 'react-scrollable-anchor'

const resumeSections = [
  {
    title: "Technical Skills",
    id: "technicalskills",
    render: (resume) => (<Skills skillCategories={resume.skills}/>),
  },
  {
    title: "Work Experience",
    id: "workexperience",
    render: (resume) => (<Experience experience={resume.experience}/>),
  },
  {
    title: "Education",
    id: "education",
    render: (resume) => (<Education education={resume.education}/>)
  }
]

function Resume({resume}) {

  const renderResumeSections = resumeSections.map((section) => (
    <section key={section.title}>
      <ScrollableAnchor id={`${section.id}`}>
        <h2>{section.title}</h2>
        {section.render(resume)}
      </ScrollableAnchor>
    </section>
  ))

  return (
    <div>
      {renderResumeSections}
    </div>
  )
}

export default Resume;
export {resumeSections};
