import React from 'react';
import fp from 'lodash-fp';
import Rating from './Rating';

const renderSkills = fp.map((skill) => (
  <div key={skill.name}>
    <div>
      {skill.name}
    </div>
    {/* <div>
      <Rating rating={skill.rating}/>
    </div> */}
  </div>
));

function Skills({skills}) {
  return renderSkills(skills);
}

export default Skills;
