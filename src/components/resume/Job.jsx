import React from 'react'
import dateformat from 'dateformat'
import fp from 'lodash-fp';
import Project from './Project';

const DATE_PATTERN = "mmmm yyyy"
const renderProjects = fp.map((project) => <Project project={project} key={project.name}/>)

function Job({job}) {
  const topLine = [job.company, job.title].filter((val) => val).join(" - ");

  return (
    <div>
      <h3>{topLine}</h3>
      {renderDateRange(job.from, job.to)}
      {(() => {
        if (job.description) {
          <p>{job.description}</p>
        }
      })()}
      {renderProjects(job.projects)}
    </div>
  )
}

export default Job;

const renderDateRange = (fromDate, toDate) => {
  console.log("Rende Date Range", fromDate, toDate)
  let dateRangeString = "";
  if (fromDate) {
    dateRangeString += dateformat(fromDate, DATE_PATTERN);
  }

  if (toDate) {
    const toDateStr = dateformat(toDate, DATE_PATTERN);
    dateRangeString += ` - ${toDateStr}`;
  } else {
    dateRangeString += " - Present";
  }

  return (dateRangeString);
}
