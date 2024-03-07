import React from 'react';
import s from './TechSkills.module.scss';
import { SiRedux, SiAmazonaws, SiMui, SiFigma } from 'react-icons/si';
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
  DiSass,
  DiPhotoshop,
  DiHtml5,
  DiMysql,
} from 'react-icons/di';

const skillData = [
  { icon: DiJavascript1, name: 'JavaScript' },
  { icon: DiReact, name: 'React' },
  { icon: DiNodejs, name: 'Node.js' },
  { icon: DiMongodb, name: 'MongoDB' },
  { icon: DiMysql, name: 'MySQL' },
  { icon: DiSass, name: 'Sass' },
  { icon: SiRedux, name: 'Redux' },
  { icon: SiAmazonaws, name: 'Amazon AWS' },
  { icon: DiGit, name: 'Git' },
  { icon: SiMui, name: 'Material UI' },
  { icon: SiFigma, name: 'Figma' },
  { icon: DiHtml5, name: 'HTML5' },
  { icon: DiPhotoshop, name: 'Photoshop' },
];

const TechSkills = () => {
  return (
    <ul className={s.container}>
      {skillData.map((skill, index) => (
        <li key={index} className={s.techIcon}>
          <skill.icon />
          <div className={s.techName}>{skill.name}</div>
        </li>
      ))}
    </ul>
  );
};

export default TechSkills;
