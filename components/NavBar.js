import Row from './Row.js'
import Link from 'next/link'

export default function NavBar() {
  return (
    <Row>
      <Link href="#about"><a>About</a></Link>
      <Link href="#skills"><a>Skills</a></Link>
      <Link href="#experience"><a>Experience</a></Link>
      <Link href="#education"><a>Education</a></Link>
      <Link href="#contact"><a>Contact</a></Link>
      <style jsx>{`
        a {
          margin: 0;
          padding: 0;
          list-style: none;
        }
      `}</style>
    </Row>
  )
}
