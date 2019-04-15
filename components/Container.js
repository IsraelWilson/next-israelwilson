import React from 'react'
import Row from '../components/Row.js'
import Column from '../components/Column.js'
import NavBar from '../components/NavBar.js'
import Progress from '../components/Progress.js'

export default class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {navbar: "clean"};
    this.navbarRef = React.createRef();
    this.divOffsetTop = 0;
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    this.divOffsetTop = this.navbarRef.current.getContainer().current.offsetTop;
    window.addEventListener('scroll', this.handleScroll);
  };

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  };

  handleScroll(event) {
    //console.log(this.navbarRef.current.getContainer().current.offsetTop);
    if(window.scrollY >= this.divOffsetTop) {
      this.setState({navbar: "sticky"});
    } else {
      this.setState({navbar: "clean"});
    }
  };

  render() {
    const children = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        scroll: this.state.scroll
      });
    });

    return (
      <div>
        <Row name="about" height="80vh">
        </Row>
        <NavBar ref={this.navbarRef} class={this.state.navbar}/>
        <Row name="skills" height="80vh">
          <h1>About</h1>
          <p>I'm a software engineer located in the DFW area. I enjoy using different frameworks, developer tools
             and creating products that increase user productivity. My freetime consist of gaming, reading comic books,
             and eating pasteries at the nearest bakery. Welcome to my corner of the internet! I hope you survive the experience.</p>
        </Row>
        <Row name="experience" height="80vh">
          <Column>
            <h1>Languages</h1>
            <Row>
              <Column>
                <Progress value="25" name="C++"></Progress>
                <Progress value="25" name="Java"></Progress>
                <Progress value="25" name="PHP"></Progress>
                <Progress value="25" name="Python"></Progress>
              </Column>
              <Column>
                <Progress value="25" name="HTML"></Progress>
                <Progress value="25" name="CSS"></Progress>
                <Progress value="25" name="MySQL"></Progress>
                <Progress value="25" name="Javascript"></Progress>
              </Column>
            </Row>
          </Column>
          <Column>
            <h1>Software</h1>
            <Column>
              <Progress value="25" name="React"></Progress>
              <Progress value="25" name="Android Studio"></Progress>
              <Progress value="25" name="Unreal Engine"></Progress>
              <Progress value="25" name="Illustrator"></Progress>
            </Column>

          </Column>
          <Column>
            <h1>Operating Systems</h1>
            <Column>
              <Progress value="25" name="Linux"></Progress>
              <Progress value="25" name="Microsoft Windows"></Progress>
            </Column>

          </Column>
        </Row>
        <Row name="education" height="80vh">
          <Column>
            <h1>Software Engineer</h1>
            <p></p>
            <h1>Oceus Networks</h1>
          </Column>
          <Column>
            <h1>Associate Professional Application Designer</h1>
            <p></p>
            <h1>DXE Technology</h1>
          </Column>
          <Column>
            <h1>Urban Prep Fellow</h1>
            <p></p>
            <h1>Urban Prep Academies</h1>
          </Column>
          <Column>
            <h1>Technical Support</h1>
            <p></p>
            <h1>Fulton County Information Technology</h1>
          </Column>
        </Row>
        <Row name="socialize" height="80vh">
          <p>Row 5</p>
        </Row>
        <Row name="contact" height="80vh">
          <p>Row 6</p>
        </Row>
        <style jsx>{`
          div {
            display: flex;
            flex-direction: column;
            width: 100%;
          }
        `}</style>
      </div>
    );
  }
}
