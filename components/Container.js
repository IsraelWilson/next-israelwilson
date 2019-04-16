import React from 'react'
import Row from '../components/Row.js'
import Column from '../components/Column.js'
import NavBar from '../components/NavBar.js'
import Progress from '../components/Progress.js'
import ImageLink from '../components/ImageLink.js'
import Contact from '../components/Contact.js'

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
        <Row name="landing" height="80vh">
        </Row>
        <NavBar ref={this.navbarRef} class={this.state.navbar}/>
        <Row name="about" height="80vh">
          <h1>About</h1>
          <p>I'm a software engineer located in the DFW area. I enjoy using different frameworks, developer tools
             and creating products that increase user productivity. My freetime consist of gaming, reading comic books,
             and eating pasteries at the nearest bakery. Welcome to my corner of the internet! I hope you survive the experience.</p>
        </Row>
        <Row name="skills" height="80vh">
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
        <Row name="experience" height="80vh">
          <Column>
            <h1>Software Engineer</h1>
            <p>This was my breakthrough job where I not only grew as a developer, but as a person as well. At Oceus I was responsible
               for designing, implementing, customizing, and unit testing mobile solutions for potential customers. Everyday is a
               learning experience and a lot of fun. During the work week I'm using anywhere from 1 - 3 languages, pushing in new features
               or bug fixes for various products, and improving my ability to work on a team.</p>
            <h3>September 2018 - Current</h3><h3>Oceus Networks</h3>
          </Column>
          <Column>
            <h1>Associate Professional Application Designer</h1>
            <p>As an application designer, my primary duties included taking customer design specifications and implementing it
               using dynamic and resource conscious solutions, using the Agile Development Cycle. Solutions included writing shell
               scripts to automate server deployment and network administration task, setting up reverse proxy and guacamole servers,
               and creating specialized user groups for application server access. Creating customer specific documentation and working
               on Unix based systems remotely were also daily responsibilities.</p>
            <h3>May 2016 - May 2018</h3><h3>DXE Technology</h3>
          </Column>
          <Column>
            <h1>Urban Prep Fellow</h1>
            <p>My initial responsibility as a Fellow was to assist with planning events for students, maintaining communications with supporters,
               and creating a stringer support system for Urban Prep alumnus. I took on the additional responsibility of managing content for the
               academy website and successfully finding new, cost effective technical solutions for fund-raising.</p>
            <h3>August 2015 - May 2016</h3><h3>Urban Prep Academies</h3>
          </Column>
          <Column>
            <h1>Technical Support</h1>
            <p>While working as technical support at Fulton County, I was responsible for learning the standards they had in place
               for maintaining and servicing workstations. I managed software applications, network devices, and cleaned viruses on
               Windows computers.</p>
            <h3>May 2012 - May 2013</h3><h3>Fulton County Information Technology</h3>
          </Column>
        </Row>
        <Row name="education" height="80vh">
          <Column>
            <h4>2015</h4>
            <h1>Morehouse College</h1>
            <h3>B.S. in Computer Science</h3>
          </Column>
          <Column>
            <h4>2010</h4>
            <h1>Urban Prep Academy</h1>
            <h3>High School Diploma</h3>
          </Column>
        </Row>
        <Row name="socialize" height="80vh">
            <ImageLink href="#" src="/static/img/github.png"/>
            <ImageLink href="#" src="/static/img/instagrams.png"/>
            <ImageLink href="#" src="/static/img/plays.png"/>
            <ImageLink href="#" src="/static/img/twitters.png"/>
        </Row>
        </Row>
        <Row name="contact" height="80vh">
            <Contact/>
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
