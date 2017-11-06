import React from 'react'
import dateformat from 'dateformat'
import fp from 'lodash-fp';
import Project from './Project';
import {renderResponsibilityItems} from './Project';

const DATE_PATTERN = "mmmm yyyy"
const renderProjects = fp.map((project) => <Project project={project} key={project.name}/>)

function Job({job}) {
  const topLine = [job.company, job.title].filter((val) => val).join(" - ");

  let responsilbilityList;
  if (job.responsibilities) {
    responsilbilityList = (<ul>{renderResponsibilityItems()(job.responsibilities)}</ul>)
  }
  let jobDescription;
  if (job.description) {
    jobDescription = (<p>{job.description}</p>)
  }

  return (
    <div>
      <h3>{topLine}</h3>
      {renderDateRange(job.from, job.to)}
      {jobDescription}
      {responsilbilityList}
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
