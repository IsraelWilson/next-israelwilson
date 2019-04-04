import Container from '../components/Container.js'
import Column from '../components/Column.js'
import Row from '../components/Row.js'
import Meta from '../components/Meta.js'

import NavBar from '../components/NavBar.js'

export default function Index() {
  return (
    <div>
      <Meta/>
      <Container>
        <Row name="about" height="100vh">
          <NavBar/>
        </Row>
        <Row name="skills" height="90vh">
          <p>Row 2</p>
        </Row>
        <Row name="experience" height="90vh">
          <p>Row 3</p>
        </Row>
        <Row name="education" height="90vh">
          <p>Row 4</p>
        </Row>
        <Row name="socialize" height="90vh">
          <p>Row 5</p>
        </Row>
        <Row name="contact" height="90vh">
          <p>Row 6</p>
        </Row>
      </Container>
    </div>
  )
}
