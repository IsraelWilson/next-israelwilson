import Container from '../components/Container.js'
import Column from '../components/Column.js'
import Row from '../components/Row.js'

import NavBar from '../components/NavBar.js'

export default function Index() {
  return (
    <Container>
      <NavBar/>
      <Row height="100vh">
        <p>Row 1</p>
      </Row>
      <Row>
        <p>Row 2</p>
      </Row>
    </Container>
  )
}
