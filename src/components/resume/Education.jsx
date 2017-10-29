import React from 'react';
import Job from './Job';
import fp from 'lodash-fp';

const renderInstitutes = fp.map((institute) => <Job key={institute.company} job={institute}/>)

function Education({education}) {

  return renderInstitutes(education.institutes)

}

export default Education;
