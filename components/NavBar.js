import Row from './Row.js'
import Link from 'next/link'
import React from 'react'

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {about: "inactive",
                  experience: "inactive",
                  skills: "inactive",
                  education: "inactive",
                  socialize: "inactive",
                  contact: "inactive"};
    this.divRef = React.createRef();
    this.handleClick = this.handleClick.bind(this);
  }

  getContainer() {
    return this.divRef;
  };

  handleClick(link) {
    if(link == "about"){
      this.setState({about: "active",
                    experience: "inactive",
                    skills: "inactive",
                    education: "inactive",
                    socialize: "inactive",
                    contact: "inactive"});
    }
    if(link == "experience"){
      this.setState({about: "inactive",
                    experience: "active",
                    skills: "inactive",
                    education: "inactive",
                    socialize: "inactive",
                    contact: "inactive"});
    }
    if(link == "skills"){
      this.setState({about: "inactive",
                    experience: "inactive",
                    skills: "active",
                    education: "inactive",
                    socialize: "inactive",
                    contact: "inactive"});
    }
    if(link == "education"){
      this.setState({about: "inactive",
                    experience: "inactive",
                    skills: "inactive",
                    education: "active",
                    socialize: "inactive",
                    contact: "inactive"});
    }
    if(link == "socialize"){
      this.setState({about: "inactive",
                    experience: "inactive",
                    skills: "inactive",
                    education: "inactive",
                    socialize: "active",
                    contact: "inactive"});
    }
    if(link == "contact"){
      this.setState({about: "inactive",
                    experience: "inactive",
                    skills: "inactive",
                    education: "inactive",
                    socialize: "inactive",
                    contact: "active"});
    }
  }

  render() {
    return (
      <div ref={this.divRef} className={this.props.class}>
        <Link href="#about"><a className={this.state.about == "active" ? "active" : "inactive"} onClick={this.handleClick.bind(this, "about")}>About</a></Link>
        <Link href="#experience"><a className={this.state.experience == "active" ? "active" : "inactive"} onClick={this.handleClick.bind(this, "experience")}>Experience</a></Link>
        <Link href="#skills"><a className={this.state.skills == "active" ? "active" : "inactive"} onClick={this.handleClick.bind(this, "skills")}>Skills</a></Link>
        <Link href="#education"><a className={this.state.education == "active" ? "active" : "inactive"} onClick={this.handleClick.bind(this, "education")}>Education</a></Link>
        <Link href="#socialize"><a className={this.state.socialize == "active" ? "active" : "inactive"} onClick={this.handleClick.bind(this, "socialize")}>Socialize</a></Link>
        <Link href="#contact"><a className={this.state.contact == "active" ? "active" : "inactive"} onClick={this.handleClick.bind(this, "contact")}>Contact</a></Link>
        <style jsx>{`
          div {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            flex-grow: 1;
            justify-content: flex-end;
          }

          .sticky {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            flex-grow: 1;
            justify-content: flex-end;
            position: sticky;
            top: 0;
            background-color: #232323;
          }

          a {
            padding: 1rem 1.5rem;
            text-decoration: none;
            text-transform: uppercase;
            color: #FFFFFF;
          }

          a:hover {
            color: #feda6a;
          }

          a:active {
            background-color: black;
          }

          a:visited {
            background-color: #ccc;
          }

          .active {
            color: #feda6a;
          }
        `}</style>
      </div>
    );
  }
}
