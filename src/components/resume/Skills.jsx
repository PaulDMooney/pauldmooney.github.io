import React from 'react';
import fp from 'lodash-fp';
import Rating from './Rating';
import style from './Skills.scss';

const renderSkills = fp.map((skill) => (
  <li key={skill.name}>

      {skill.name}

  </li>
));

const renderSkillCategories = fp.map((skillCategory) => (
  <div key={skillCategory.category}>
    <h3>{skillCategory.category}</h3>
    <ul className={style['skill-list']}>
      {renderSkills(skillCategory.skills)}
    </ul>
  </div>
));

function Skills({skillCategories}) {
  return renderSkillCategories(skillCategories);
}

export default Skills;
