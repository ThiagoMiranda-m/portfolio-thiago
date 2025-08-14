import React from "react";
import "../styles.css";

// Importando os ícones locais
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
import postgresqlIcon from "../icons/postgresql.png";
import vscodeIcon from "../icons/vscode.png";
import intellijIcon from "../icons/intellij.png";
import eclipseIcon from "../icons/eclipse.png";
import gitIcon from "../icons/git.png";
import githubIcon from "../icons/github.png";

export default function Skills() {
  const skills = [
    { category: "Languages", items: [javaIcon, pythonIcon, jsIcon, cIcon] },
    { category: "Frameworks", items: [nodeIcon, reactIcon, springIcon, angularIcon] },
    { category: "Databases", items: [mysqlIcon, nosqlIcon, postgresqlIcon] },
    { category: "Tools", items: [vscodeIcon, intellijIcon, eclipseIcon, gitIcon, githubIcon] }
  ];

  return (
    <section className="skills-section">
      <h2>Skills</h2>
      {skills.map((group, index) => (
        <div key={index} className="skills-group">
          <h3>{group.category}</h3>
          <div className="skills-icons">
            {group.items.map((icon, idx) => (
              <img key={idx} src={icon} alt={`${group.category} icon`} />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
