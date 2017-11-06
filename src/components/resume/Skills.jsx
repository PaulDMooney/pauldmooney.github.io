import React from 'react';
import fp from 'lodash-fp';
import Rating from './Rating';

const renderSkills = fp.map((skill) => (
  <li key={skill.name}>
    <div>
      {skill.name}
    </div>
    {/* <div>
      <Rating rating={skill.rating}/>
    </div> */}
  </li>
));

const renderSkillCategories = fp.map((skillCategory) => (
  <div key={skillCategory.category}>
    <h3>{skillCategory.category}</h3>
    <ul>
      {renderSkills(skillCategory.skills)}
    </ul>
  </div>
));

function Skills({skillCategories}) {
  return renderSkillCategories(skillCategories);
}

export default Skills;
