import React from 'react';
import fp from 'lodash-fp';

const renderResponsibilityItems = () => {
  let counter = 0;
  return fp.map((responsibility) => (<li key={counter++}>{responsibility}</li>))
}


function Project({project}) {

  let counter = 0;

  let responsibilityList;
  if (project.responsibilities) {
    responsibilityList = (<ul>{renderResponsibilityItems()(project.responsibilities)}</ul>)
  }

  return (
    <div>
      <h4>{project.name}</h4>
      <p>{project.description}</p>
      {responsibilityList}
    </div>
  )
}

export default Project;
export {renderResponsibilityItems}
