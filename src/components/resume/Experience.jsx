import React from 'react'
import Job from './Job';
import fp from 'lodash-fp'

function Experience({experience}) {
  return fp.map((job) => <Job key={job.company} job={job}/>)(experience.jobs)
}

export default Experience;
