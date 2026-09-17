import React from 'react';

import pythonIcon from '../assets/download 1.png';
import cIcon from '../assets/download 2.png';
import cppIcon from '../assets/download 3.png';
import htmlIcon from '../assets/download 4.png';
import cssIcon from '../assets/download 5.png';
import jsIcon from '../assets/download 6.png';
import javaIcon from '../assets/download 7.png';
import reactIcon from '../assets/download 8.png';
import nodeicon from '../assets/image 1.png';
import nextIcon from '../assets/next-logo.jpg';
import tsIcon from '../assets/ts-logo.png';
import tailwindIcon from '../assets/tailwind.svg';
import mongoIcon from '../assets/mongodb.png';
import mysqlIcon from '../assets/mysql.png';
import fastapiIcon from '../assets/fastapi.png';
import solidityIcon from '../assets/solidity.png';
import dockerIcon from '../assets/docker.png';

const skillsData = [
  { name: 'Python', icon: pythonIcon },
  { name: 'C', icon: cIcon },
  { name: 'C++', icon: cppIcon },
  { name: 'Web Dev', icons: [htmlIcon, cssIcon, jsIcon] },
  { name: 'Java', icon: javaIcon },
  { name: 'React', icon: reactIcon },
  { name: 'Node.js / Express', icon: nodeicon },
  { name: 'Next.js', icon: nextIcon },
  { name: 'TypeScript', icon: tsIcon },
  { name: 'Tailwind CSS', icon: tailwindIcon },
  { name: 'MongoDB', icon: mongoIcon },
  { name: 'MySQL', icon: mysqlIcon },
  { name: 'FastAPI', icon: fastapiIcon },
  { name: 'Solidity', icon: solidityIcon },
  { name: 'Docker', icon: dockerIcon },
];


const Skills = () => {
  return (
    <section 
      id="skills" 
      className="font-poppins h-screen w-full bg-brand-bg-light flex flex-col items-center justify-center py-8 px-10 lg:px-20"
    >
      <div className="w-full max-w-5xl">
        <h2 className="text-4xl mb-6 text-brand-bg-dark tracking-wide text-left">
          My Skills:
        </h2>

        <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
          {skillsData.map((skill) => (
            <div key={skill.name} className="bg-brand-bg-dark rounded-xl p-3 flex flex-col items-center justify-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer">

              <div className="h-14 w-14 mb-2 flex items-center justify-center">
                {skill.icons ? (
                  <div className="grid grid-cols-2 gap-2 w-full h-full">
                    {skill.icons.map((iconSrc, index) => (
                      <img key={index} src={iconSrc} alt="" className="w-full h-full object-contain" />
                    ))}
                  </div>
                ) : (
                  <img src={skill.icon} alt={skill.name} className="max-w-full max-h-full object-contain" />
                )}
              </div>
              
              <p className="text-sm text-white mt-auto text-center">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;