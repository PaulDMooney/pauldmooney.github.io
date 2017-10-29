import React from 'react';
import fp from 'lodash-fp';



function Project({project}) {

  let counter = 0;
  const renderResponsibilities =
    fp.map((responsibility) => (<li key={project.name + counter++}>{responsibility}</li>))

  return (
    <div>
      <h4>{project.name}</h4>
      <p>{project.description}</p>
      <ul>
        {renderResponsibilities(project.responsibilities)}
      </ul>
    </div>
  )
}

export default Project;
