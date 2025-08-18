import React from "react";
import "../styles.css";

// Importando as imagens do src/icons
import javaIcon from "../icons/java.png";
import pythonIcon from "../icons/python.png";
import jsIcon from "../icons/javascript.png";
import cIcon from "../icons/c.png";

import nodeIcon from "../icons/nodejs.png";
import reactIcon from "../icons/react.png";
import springIcon from "../icons/spring.png";
import angularIcon from "../icons/angular.png";

import mysqlIcon from "../icons/mysql.png";
import nosqlIcon from "../icons/nosql.png";

import vscodeIcon from "../icons/vscode.png";
import intellijIcon from "../icons/intellij.png";
import eclipseIcon from "../icons/eclipse.png";
import gitIcon from "../icons/git.png";
import githubIcon from "../icons/github.png";
import postgresqlIcon from "../icons/postgresql.png";


export default function Skills() {
  const skillsData = [
    {
      title: "Linguagens",
      items: [
        { name: "Java", icon: javaIcon },
        { name: "Python", icon: pythonIcon },
        { name: "JavaScript", icon: jsIcon },
        { name: "C", icon: cIcon },
      ],
    },
    {
      title: "Frameworks",
      items: [
        { name: "Node.js", icon: nodeIcon },
        { name: "React", icon: reactIcon },
        { name: "Spring", icon: springIcon },
        { name: "Angular", icon: angularIcon },
      ],
    },
    {
      title: "Banco de Dados",
      items: [
        { name: "MySQL", icon: mysqlIcon },
        { name: "NoSQL", icon: nosqlIcon },
        { name: "PostgreSQL", icon: postgresqlIcon },
      ],
    },
    {
      title: "Ferramentas",
      items: [
        { name: "VS Code", icon: vscodeIcon },
        { name: "IntelliJ", icon: intellijIcon },
        { name: "Eclipse", icon: eclipseIcon },
        { name: "Git", icon: gitIcon },
        { name: "GitHub", icon: githubIcon },
      ],
    },
  ];

  return (
    <div className="skills-container">
      <h2 className="skills-title">Skills</h2>
      <div className="skills-grid">
        {skillsData.map((category, index) => (
          <div key={index} className="skills-category">
            <h3>{category.title}</h3>
            <div className="skills-items">
              {category.items.map((skill, idx) => (
                <div key={idx} className="skill-card">
                  <img src={skill.icon} alt={skill.name} className="skill-icon" />
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
