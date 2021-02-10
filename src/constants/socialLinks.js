import React from "react"
import {
  FaLinkedin,
  FaGithubSquare,
  FaFile,
  FaAngellist,
  FaTwitterSquare,
} from "react-icons/fa"

const data = [
  {
    id: 1,
    icon: <FaLinkedin className="social-icon"></FaLinkedin>,
    url: "https://www.linkedin.com/in/acushlakoncept",
  },
  {
    id: 2,
    icon: <FaGithubSquare className="social-icon"></FaGithubSquare>,
    url: "https://github.com/acushlakoncept",
  },
  {
    id: 3,
    icon: <FaAngellist className="social-icon"></FaAngellist>,
    url: "https://angel.co/u/acushlakoncept",
  },
  {
    id: 4,
    icon: <FaTwitterSquare className="social-icon"></FaTwitterSquare>,
    url: "https://twitter.com/acushlakoncept",
  },
  {
    id: 5,
    icon: <FaFile className="social-icon"></FaFile>,
    url: "https://docs.google.com/document/d/1uvF70p3wZKJf7EUSRmtKh2CHu6SfH2yuLsQTO2hcbUg/edit?usp=sharing",
  },
]
const links = data.map(link => {
  return (
    <li key={link.id}>
      <a href={link.url} className="social-link" target="_blank" rel="noopener noreferrer">
        {link.icon}
      </a>
    </li>
  )
})

export default ({ styleClass }) => {
  return (
    <ul className={`social-links ${styleClass ? styleClass : ""}`}>{links}</ul>
  )
}
