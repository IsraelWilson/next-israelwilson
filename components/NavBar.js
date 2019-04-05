import Row from './Row.js'
import Link from 'next/link'
import React from 'react'

export default function NavBar(props) {
return (
    <Row justify="flex-end" navbar={true}>
      <Link href="#about"><a>About</a></Link>
      <Link href="#skills"><a>Skills</a></Link>
      <Link href="#experience"><a>Experience</a></Link>
      <Link href="#education"><a>Education</a></Link>
      <Link href="#socialize"><a>Socialize</a></Link>
      <Link href="#contact"><a>Contact</a></Link>
      <style jsx>{`
        a {
          padding: 1rem 1.5rem;
          text-decoration: none;
          text-transform: uppercase;
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
    </Row>
  )
}
