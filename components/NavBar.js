import Row from './Row.js'
import Link from 'next/link'
import React from 'react'

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.divRef = React.createRef();
  }

  getContainer() {
    return this.divRef;
  };

  render() {
    return (
      <div ref={this.divRef} className={this.props.class}>
        <Link href="#about"><a>About</a></Link>
        <Link href="#skills"><a>Skills</a></Link>
        <Link href="#experience"><a>Experience</a></Link>
        <Link href="#education"><a>Education</a></Link>
        <Link href="#socialize"><a>Socialize</a></Link>
        <Link href="#contact"><a>Contact</a></Link>
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
            background-color: #555;
          }

          a:active {
            background-color: black;
          }

          a:visited {
            background-color: #ccc;
          }
        `}</style>
      </div>
    );
  }
}
